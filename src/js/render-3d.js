const modelos3D = [
  {
    id: 6,
    titulo: 'Excalibur',
    desc: 'Robô seguidor de linha — modelo 3D completo em CAD.',
    cor: 0x00f5ff,
    imagem: '../assets/images/turbo.jpeg',
    file: '../assets/models/excalibur.glb',
    rotacao: [-1.5708, 0, 0],
    tipo: null
  },
  {
    id: 8,
    titulo: 'Carcaça',
    desc: 'Robô de sumô 1kg — estrutura compacta e resistente para combates na arena.',
    cor: 0xff6b35,
    imagem: '../assets/images/carcaca.png',
    file: '../assets/models/SUMO.obj',
    rotacao: [-1.5708, 0, 0],
    tipo: null
  }
];

function initViewer3D() {
  const grid = document.getElementById('viewer3dGrid');
  if (!grid) return;

  let currentRenderer = null;
  let animationId = null;

  const modal = document.getElementById('viewer3dModal');
  const closeBtn = document.getElementById('viewer3dClose');
  const titleEl = document.getElementById('viewer3dTitle');
  const descEl = document.getElementById('viewer3dDesc');

  function fecharModal() {
    modal.classList.remove('active');
    if (animationId) { cancelAnimationFrame(animationId); animationId = null; }
    if (currentRenderer) { currentRenderer.dispose(); currentRenderer = null; }
    document.body.style.overflow = '';
  }

  const backBtn = document.getElementById('viewer3dBack');
  closeBtn.addEventListener('click', fecharModal);
  backBtn.addEventListener('click', fecharModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal(); });

  function criarCena3D(container, modelo) {
    const rect = container.getBoundingClientRect();
    const largura = rect.width || 600;
    const altura = rect.height || 400;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(35, largura / altura, 0.1, 100);
    camera.position.set(3, 1, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(largura, altura);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404060, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
    keyLight.position.set(4, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8888ff, 0.2);
    fillLight.position.set(-4, 3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(0, 1, -6);
    scene.add(rimLight);



    let meshGroup = new THREE.Group();
    meshGroup.rotation.y = Math.PI / 2;
    scene.add(meshGroup);

    function criarPartesModelo() {
      const baseCor = new THREE.Color(modelo.cor);
      const metalMat = new THREE.MeshStandardMaterial({
        color: baseCor,
        metalness: 0.2,
        roughness: 0.8
      });
      const darkMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.2,
        roughness: 0.8
      });
      const accentMat = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.3,
        roughness: 0.7
      });

      function addPart(geo, mat, x, y, z, rx, ry, rz, s) {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        m.rotation.set(rx || 0, ry || 0, rz || 0);
        if (s) m.scale.set(s, s, s);
        m.castShadow = true;
        m.receiveShadow = true;
        meshGroup.add(m);
        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.08 }));
        line.position.copy(m.position);
        line.rotation.copy(m.rotation);
        if (s) line.scale.set(s, s, s);
        meshGroup.add(line);
        return m;
      }

      switch (modelo.tipo) {
        case 'combate':
          addPart(new THREE.BoxGeometry(2.6, 0.6, 1.8), metalMat, 0, -0.3, 0);
          addPart(new THREE.BoxGeometry(2.0, 0.4, 1.4), accentMat, 0, 0.1, 0);
          addPart(new THREE.CylinderGeometry(0.6, 0.8, 0.7, 16), metalMat, 0.5, 0.2, 0, 0, 0, Math.PI / 2);
          addPart(new THREE.CylinderGeometry(0.6, 0.8, 0.7, 16), metalMat, -0.5, 0.2, 0, 0, 0, Math.PI / 2);
          const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.5, 24), new THREE.MeshStandardMaterial({
            color: 0x555577, metalness: 0.3, roughness: 0.7, emissive: 0xff4400, emissiveIntensity: 0.1
          }));
          drum.position.set(1.3, -0.1, 0);
          drum.rotation.z = Math.PI / 2;
          drum.castShadow = true;
          meshGroup.add(drum);
          // wedge
          const wedgeGeo = new THREE.BoxGeometry(0.3, 0.4, 1.4);
          const wedge = new THREE.Mesh(wedgeGeo, new THREE.MeshStandardMaterial({
            color: 0x666688, metalness: 0.8, roughness: 0.2
          }));
          wedge.position.set(-1.3, -0.2, 0);
          wedge.rotation.z = 0.15;
          wedge.castShadow = true;
          meshGroup.add(wedge);
          break;

        case 'rover':
          addPart(new THREE.BoxGeometry(2.4, 0.5, 1.6), metalMat, 0, 0, 0);
          addPart(new THREE.BoxGeometry(1.8, 0.3, 1.2), accentMat, 0, 0.3, 0);
          // 4 wheels
          const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
          const wh = new THREE.CylinderGeometry(0.5, 0.5, 0.2, 20);
          const posW = [[-0.8, -0.3, -0.9], [0.8, -0.3, -0.9], [-0.8, -0.3, 0.9], [0.8, -0.3, 0.9]];
          posW.forEach(p => {
            const w = new THREE.Mesh(wh, wheelMat);
            w.position.set(p[0], p[1], p[2]);
            w.rotation.x = Math.PI / 2;
            w.castShadow = true;
            meshGroup.add(w);
            const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.25, 12), accentMat);
            hub.position.set(p[0], p[1], p[2]);
            hub.rotation.x = Math.PI / 2;
            meshGroup.add(hub);
          });
          // camera mast
          addPart(new THREE.CylinderGeometry(0.06, 0.06, 0.8, 8), darkMat, 0, 0.7, 0.2);
          addPart(new THREE.BoxGeometry(0.2, 0.15, 0.2), accentMat, 0, 1.1, 0.2);
          // antenna
          addPart(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 6), accentMat, 0.6, 0.6, -0.5);
          const antBall = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 8), new THREE.MeshStandardMaterial({
            color: 0x00ccee, emissive: 0x00ccee, emissiveIntensity: 0.15
          }));
          antBall.position.set(0.6, 0.9, -0.5);
          meshGroup.add(antBall);
          break;

        case 'garra':
          addPart(new THREE.CylinderGeometry(0.5, 0.6, 0.4, 20), metalMat, 0, -0.4, 0);
          addPart(new THREE.CylinderGeometry(0.3, 0.3, 1.0, 12), darkMat, 0, 0.2, 0);
          addPart(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 12), metalMat, 0, 0.9, 0.3);
          addPart(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 12), metalMat, 0, 0.9, -0.3);
          const gripperMat = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa, metalness: 0.2, roughness: 0.8, emissive: modelo.cor, emissiveIntensity: 0.02
          });
          // gripper fingers
          for (let side = -1; side <= 1; side += 2) {
            const finger = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.4, 0.6), gripperMat);
            finger.position.set(side * 0.25, 1.25, 0);
            finger.rotation.z = side * 0.15;
            finger.castShadow = true;
            meshGroup.add(finger);
          }
          break;

        case 'suporte':
          addPart(new THREE.CylinderGeometry(0.8, 0.8, 0.2, 20), metalMat, 0, -0.6, 0);
          addPart(new THREE.CylinderGeometry(0.08, 0.1, 1.2, 10), darkMat, 0, 0.1, 0);
          // pan head
          addPart(new THREE.BoxGeometry(0.4, 0.15, 0.3), metalMat, 0, 0.75, 0);
          addPart(new THREE.BoxGeometry(0.2, 0.2, 0.2), accentMat, 0, 0.9, 0);
          // camera lens
          const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.1, 16), new THREE.MeshStandardMaterial({
            color: 0x111111, metalness: 0.3, roughness: 0.1
          }));
          lens.position.set(0, 0.9, 0.2);
          lens.rotation.x = Math.PI / 2;
          meshGroup.add(lens);
          const lensGlow = new THREE.Mesh(new THREE.CircleGeometry(0.08, 16), new THREE.MeshBasicMaterial({
            color: 0x00f5ff, transparent: true, opacity: 0.6
          }));
          lensGlow.position.set(0, 0.9, 0.25);
          meshGroup.add(lensGlow);
          break;

        case 'base':
          addPart(new THREE.CylinderGeometry(1.2, 1.2, 0.4, 24), metalMat, 0, -0.4, 0);
          addPart(new THREE.CylinderGeometry(0.9, 0.9, 0.15, 24), accentMat, 0, -0.05, 0);
          addPart(new THREE.TorusGeometry(0.7, 0.06, 8, 24), new THREE.MeshStandardMaterial({
            color: 0x00aacc, emissive: 0x00aacc, emissiveIntensity: 0.1
          }), 0, 0, 0, Math.PI / 2, 0);
          // 2 big wheels
          const bigWheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
          for (let side = -1; side <= 1; side += 2) {
            const w = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.25, 20), bigWheelMat);
            w.position.set(side * 0.9, -0.4, 0);
            w.rotation.z = Math.PI / 2;
            w.castShadow = true;
            meshGroup.add(w);
          }
          // caster
          addPart(new THREE.SphereGeometry(0.15, 10, 10), darkMat, 0, -0.7, 0.9);
          // top detail
          addPart(new THREE.CylinderGeometry(0.15, 0.2, 0.2, 12), accentMat, 0, 0.2, 0);
          break;

        case 'sumo': {
          addPart(new THREE.CylinderGeometry(1.0, 1.2, 0.5, 24), metalMat, 0, -0.2, 0);
          addPart(new THREE.CylinderGeometry(0.8, 1.0, 0.3, 24), darkMat, 0, 0.1, 0);
          addPart(new THREE.TorusGeometry(0.7, 0.08, 8, 24), new THREE.MeshStandardMaterial({
            color: 0xff6b35, emissive: 0xff6b35, emissiveIntensity: 0.05
          }), 0, 0.15, 0, Math.PI / 2, 0);
          // wedge/scoop
          const scoopMat = new THREE.MeshStandardMaterial({
            color: 0x666688, metalness: 0.8, roughness: 0.2
          });
          addPart(new THREE.BoxGeometry(0.4, 0.3, 1.2), scoopMat, -0.9, -0.1, 0, 0, 0, 0.2);
          // wheels
          const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
          const wh = new THREE.CylinderGeometry(0.4, 0.4, 0.18, 20);
          [[-0.5, -0.4, -0.8], [0.5, -0.4, -0.8], [-0.5, -0.4, 0.8], [0.5, -0.4, 0.8]].forEach(p => {
            const w = new THREE.Mesh(wh, wheelMat);
            w.position.set(p[0], p[1], p[2]);
            w.rotation.x = Math.PI / 2;
            w.castShadow = true;
            meshGroup.add(w);
          });
          // blade/arma
          const bladeMat = new THREE.MeshStandardMaterial({
            color: 0xcccccc, metalness: 0.9, roughness: 0.1
          });
          addPart(new THREE.BoxGeometry(1.6, 0.06, 0.3), bladeMat, 0.7, 0.25, 0);
          break;
        }

        case 'braco': {
          addPart(new THREE.CylinderGeometry(0.6, 0.7, 0.3, 20), metalMat, 0, -0.6, 0);
          const segMat1 = new THREE.MeshStandardMaterial({ color: 0x334466, metalness: 0.7, roughness: 0.3 });
          const segMat2 = new THREE.MeshStandardMaterial({ color: 0x446688, metalness: 0.7, roughness: 0.3 });
          // segment 1
          const s1 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.7, 0.25), segMat1);
          s1.position.set(0, -0.05, 0.3);
          s1.rotation.x = 0.4;
          s1.castShadow = true;
          meshGroup.add(s1);
          // joint 1
          addPart(new THREE.SphereGeometry(0.15, 12, 12), accentMat, 0, 0.2, 0.55);
          // segment 2
          const s2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 0.2), segMat2);
          s2.position.set(0, 0.45, 0.65);
          s2.rotation.x = -0.3;
          s2.castShadow = true;
          meshGroup.add(s2);
          // joint 2
          addPart(new THREE.SphereGeometry(0.12, 10, 10), accentMat, 0, 0.7, 0.55);
          // end effector base
          addPart(new THREE.BoxGeometry(0.15, 0.1, 0.2), metalMat, 0, 0.85, 0.5);
          // gripper tips
          const tipMat = new THREE.MeshStandardMaterial({ color: 0x00aacc, emissive: 0x00aacc, emissiveIntensity: 0.1 });
          addPart(new THREE.BoxGeometry(0.04, 0.1, 0.15), tipMat, 0.08, 0.9, 0.55);
          addPart(new THREE.BoxGeometry(0.04, 0.1, 0.15), tipMat, -0.08, 0.9, 0.55);
          break;
        }
      }
    }

    function aplicarMateriais(model) {
      const colors = [
        0x00f5ff, 0x34d399, 0xf472b6, 0xa78bfa, 0xfbbf24,
        0xfb7185, 0x60a5fa, 0xf59e0b, 0xef4444, 0x10b981,
        0x8b5cf6, 0xec4899, 0x14b8a6, 0xf97316, 0x6366f1
      ];
      let ci = 0;
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            mat.opacity = 1;
            mat.transparent = false;
            mat.depthWrite = true;
            const match = mat.name && mat.name.match(/^Opaque\((\d+),(\d+),(\d+)\)$/);
            if (match) {
              mat.color.setRGB(parseInt(match[1]) / 255, parseInt(match[2]) / 255, parseInt(match[3]) / 255);
              mat.metalness = 0;
              mat.roughness = 0.7;
            } else if (mat.name === 'Aço_-_Acetinado') {
              mat.color.setHex(0xcccccc);
              mat.metalness = 0.8;
              mat.roughness = 0.2;
            } else {
              mat.color.setHex(colors[ci % colors.length]);
              ci++;
              mat.metalness = 0;
              mat.roughness = 0.7;
            }
          });
        }
      });
      if (modelo.rotacao) {
        model.rotation.set(modelo.rotacao[0], modelo.rotacao[1], modelo.rotacao[2]);
      }
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());
      const scale = size > 0 ? 4 / size : 1;
      model.scale.set(scale, scale, scale);
      model.position.set(
        -center.x * scale,
        -center.y * scale,
        -center.z * scale
      );
      meshGroup.add(model);
      controls.target.set(0, 0, 0);
      controls.update();
    }

    if (modelo.file) {
      if (modelo.file.endsWith('.obj')) {
        const loader = new THREE.OBJLoader();
        loader.load(modelo.file, (model) => {
          aplicarMateriais(model);
        }, undefined, () => {
          criarPartesModelo();
        });
      } else {
        const loader = new THREE.GLTFLoader();
        const dracoLoader = new THREE.DRACOLoader();
        dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/libs/draco/');
        loader.setDRACOLoader(dracoLoader);
        loader.load(modelo.file, (gltf) => {
          aplicarMateriais(gltf.scene);
        }, undefined, () => {
          criarPartesModelo();
        });
      }
    } else {
      criarPartesModelo();
    }

    // Particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 16;
      positions[i] += (i % 3 === 1) ? 2 : 0;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x004466,
      size: 0.02,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    controls.autoRotate = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 25;
    controls.maxPolarAngle = Math.PI;
    controls.target.set(0, 0, 0);
    controls.update();

    let time = 0;

    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      controls.update();

      // Only float procedural models (GLB is too heavy)
      if (!modelo.file && modelo.tipo) {
        meshGroup.position.y = Math.sin(time * 0.5) * 0.03;
      }

      // particle drift
      particles.rotation.y += 0.0003;

      renderer.render(scene, camera);
    }

    animate();

    const resizeObserver = new ResizeObserver(() => {
      const r = container.getBoundingClientRect();
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width, r.height);
    });
    resizeObserver.observe(container);

    return {
      renderer,
      controls,
      dispose: () => {
        controls.dispose();
        renderer.dispose();
        resizeObserver.disconnect();
        meshGroup.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
            else child.material.dispose();
          }
        });
      }
    };
  }

  modelos3D.forEach((modelo, i) => {
    const corHex = '#' + modelo.cor.toString(16).padStart(6, '0');

    const card = document.createElement('div');
    card.className = 'viewer3d-card';
    card.setAttribute('data-id', modelo.id);
    card.style.animationDelay = `${i * 0.08}s`;

    const thumbStyle = modelo.imagem
      ? `background-image: url(${modelo.imagem});`
      : `background: linear-gradient(135deg, ${corHex}22, ${corHex}66);`;

    card.innerHTML = `
      <div class="viewer3d-card-thumb" style="${thumbStyle}">
        <div class="viewer3d-card-overlay">
          <i class="fas fa-expand"></i>
          <span>Visualizar</span>
        </div>
      </div>
      <div class="viewer3d-card-info">
        <h4>${modelo.titulo}</h4>
        <p>${modelo.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      titleEl.textContent = modelo.titulo;
      descEl.textContent = modelo.desc;
      const canvasWrapper = document.getElementById('viewer3dCanvas');
      canvasWrapper.innerHTML = '';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const result = criarCena3D(canvasWrapper, modelo);
      currentRenderer = result.renderer;
    });

    grid.appendChild(card);
  });
}
