import * as THREE from "../../../node_modules/three/build/three.module.js";

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = Math.floor(canvas.clientWidth * pixelRatio);
  const height = Math.floor(canvas.clientHeight * pixelRatio);
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function main() {
  const canvas = document.querySelector("#space");

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 10);
  camera.position.z = 3;

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 1, 4);

  const spot = new THREE.DirectionalLight(0xffffff, 3);
  spot.position.set(0, -3, 1);

  const cube = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.24, 64, 64),
    new THREE.MeshPhongMaterial({ color: "#ff9800", shininess: 150 })
  );
  cube.rotation.x = 30 * (Math.PI / 180);
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#242424");

  scene.add(cube);
  scene.add(light);
  scene.add(spot);

  function rotate(time) {
    const angle = (time / 40) * (Math.PI / 180);
    cube.rotation.y = angle;
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);
    requestAnimationFrame(rotate);
  }
  requestAnimationFrame(rotate);
}
main();
