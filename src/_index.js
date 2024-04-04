// @ts-nocheck
import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import img from './img/cube.png';

const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xdcdcdc);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
// const camera = new THREE.OrthographicCamera(-20, 20, 20, -20, 0.1, 1000);
camera.position.z = 400;
camera.position.y = 70;
camera.position.x = -30;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
function onclick(event) {
  console.log('click');
  const mouse = new THREE.Vector2();
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);
  if (intersects.length > 0) {
    const selectedObject = intersects[0];
    console.log(selectedObject);
  }
}
renderer.domElement.addEventListener('click', onclick, true);

const geometry1 = new THREE.PlaneGeometry(400, 200, 100, 100);
const material1 = new THREE.MeshLambertMaterial({ color: 0x008cf0 });
// const material1 = new THREE.ShadowMaterial({ color: 0x008cf0, transparent: false });
// material1.opacity = 0.5;
// material1.transparent = false;
const plane = new THREE.Mesh(geometry1, material1);
plane.position.y = -85;
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

/**
 * стрелки осей
 */
// const axesHelper = new THREE.AxesHelper(20);
// scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(10, 10, 10);
// const loader = new THREE.CubeTextureLoader();
// loader.setPath('./img/');
// const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
// const material = new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: textureCube });
const material = new THREE.MeshLambertMaterial({ color: 0xa9a9a9 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(5, 0, 0);
cube.castShadow = true;
cube.receiveShadow = true;
cube.name = 'cube';
scene.add(cube);

const geometry2 = new THREE.BoxGeometry(30, 30, 30);
// const loader2 = new THREE.CubeTextureLoader();
// loader2.setPath('./img/');
// const textureCube2 = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
// const material2 = new THREE.MeshLambertMaterial({ color: 0xffffff, envMap: textureCube2 });
const material2 = new THREE.MeshLambertMaterial({ color: 0x808080 });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(0, -40, 0);
cube2.castShadow = true;
cube2.receiveShadow = true;
cube2.name = 'cube2';
scene.add(cube2);

const obj = new THREE.Object3D('test');
obj.position.set(-30, -40, 50);

const geometry3 = new THREE.SphereGeometry(10, 16, 16);
const loader = new THREE.TextureLoader();
// const material3 = loader.load('./img/cube.png');
// const material3 = new THREE.MeshBasicMaterial({ map: loader.load('./img/cube.png') });
const material3 = new THREE.MeshLambertMaterial({ map: loader.load(img) });
const sphere = new THREE.Mesh(geometry3, material3);
sphere.receiveShadow = true;
sphere.castShadow = true;
sphere.position.set(0, 0, 0);
obj.add(sphere);

const geometry4 = new THREE.SphereGeometry(5, 16, 16);
const material4 = new THREE.MeshLambertMaterial({ color: 0xa9a9a9 });
const sphere2 = new THREE.Mesh(geometry4, material4);
sphere2.position.set(-20, 0, 0);
sphere2.receiveShadow = true;
sphere2.castShadow = true;
obj.add(sphere2);

const geometry6 = new THREE.RingGeometry(20, 20.1, 32);
const material6 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const circle = new THREE.Mesh(geometry6, material6);
circle.rotation.x = -Math.PI / 2;
obj.add(circle);

scene.add(obj);

/**
 * Свет
 */
const geometry5 = new THREE.SphereGeometry(5, 16, 16);
const material5 = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const sphere3 = new THREE.Mesh(geometry5, material5);
sphere3.position.set(70, 60, 0);
scene.add(sphere3);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(35, 30, 0);
spotLight.castShadow = true;
// spotLight.target.position.set(0, -70, 0);
spotLight.target = cube;
spotLight.power = 50000;
spotLight.angle = Math.PI / 2.5;
scene.add(spotLight);
scene.add(spotLight.target);

// const sphereSize = 1;
// const spotLightHelper = new THREE.SpotLightHelper(spotLight, sphereSize);
// scene.add(spotLightHelper);

// spotLight.add(spotLightHelper);

// const pointLight = new THREE.PointLight(0xffffff, 1, 300);
// pointLight.position.set(35, 30, 0);
// pointLight.castShadow = true;
// pointLight.target = cube;
// pointLight.intensity = 75000;
// scene.add(pointLight);

// const sphereSize = 2;
// const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
// scene.add(pointLightHelper);

/**
 * Вращение камеры
 */
const controls = new OrbitControls(camera, renderer.domElement);

camera.target = cube2;

/**
 * Вращение сферы
 */
// const axis = new THREE.Vector3(0, 0, 0).normalize();
const quaternion = new THREE.Quaternion();
const axis = new THREE.Vector3(0, 1, 0).normalize();

const quaternion1 = new THREE.Quaternion();
const axis1 = new THREE.Vector3(0, 0.5, 0).normalize();

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  cube2.rotation.x -= 0.005;
  cube2.rotation.y -= 0.005;

  sphere.rotation.y += 0.05;

  quaternion1.setFromAxisAngle(axis1, 0.03);
  sphere2.position.applyQuaternion(quaternion1);

  quaternion.setFromAxisAngle(axis, -0.01);
  obj.position.applyQuaternion(quaternion);

  controls.update();

  renderer.render(scene, camera);
}

animate();

// THREE.TOUCH = {};
// const base64prefix = 'data:image/png;base64,';
// const blue = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkuPn/PwAFkgLZdUNuXwAAAABJRU5ErkJggg==';
// const blue2 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkqPz/HwAEcgJ5UUczUQAAAABJRU5ErkJggg==';
// const orange = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8H8PwHwAGGQJcoBRfLQAAAABJRU5ErkJggg==';

// const solarsystem = [
//   {
//     texture: blue,
//     name: 'earth',
//     radius: 2,
//     orbit: 30,
//     speed: 2,
//     satellites: [
//       {
//         texture: blue2,
//         rotation: [1, 1, 1],
//         name: 'rock',
//         radius: 0.5,
//         orbit: 4,
//         speed: 5,
//       },
//       {
//         texture: blue2,
//         name: 'moon',
//         radius: 1,
//         orbit: 6,
//         speed: 1,
//       },
//     ],
//   },
//   {
//     texture: orange,
//     name: 'mars',
//     radius: 2,
//     orbit: 50,
//     speed: 1,
//     satellites: [
//       {
//         texture: blue2,
//         name: 'phobos',
//         radius: 0.5,
//         orbit: 3,
//         speed: 1,
//       },
//       {
//         texture: blue2,
//         name: 'deimos',
//         radius: 0.5,
//         orbit: 4,
//         speed: 3,
//       },
//     ],
//   },
// ];

// const scene = new THREE.Scene();
// const aspect = window.innerWidth / window.innerHeight;
// const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // planets
// solarsystem.forEach((d) => create(d, scene));

// // sun
// const sun = sphere({ radius: 3, orbit: 0, texture: orange });
// scene.add(sun);

// function create(d, target) {
//   const o = new THREE.Object3D(d.name);
//   d.rotation && o.rotateX(d.rotation[0]);
//   d.rotation && o.rotateY(d.rotation[1]);
//   d.rotation && o.rotateZ(d.rotation[2]);
//   o.add(orbit(d));
//   const p = sphere(d);
//   o.add(p);
//   d.satellites && d.satellites.forEach((d1) => create(d1, p));
//   target.add(o);
//   d.o = o;
// }

// function orbit(d) {
//   const o = new THREE.Object3D(`orbit ${d.name}`);
//   o.rotateX(Math.PI / 2);
//   o.add(new THREE.Line(new THREE.CircleGeometry(d.orbit, 64), new THREE.LineBasicMaterial({ color: 0xffffff })));
//   return o;
// }

// function sphere(d) {
//   const o = new THREE.Object3D(`sphere ${d.name}`);
//   o.translateX(d.orbit);
//   const loader = new THREE.TextureLoader();
//   loader.load(base64prefix + d.texture, function (texture) {
//     const geometry = new THREE.SphereGeometry(d.radius, 20, 20);
//     const material = new THREE.MeshBasicMaterial({
//       map: texture,
//       overdraw: 0.5,
//     });
//     o.add(new THREE.Mesh(geometry, material));
//   });
//   return o;
// }

// const grid = new THREE.GridHelper(500, 100, 0x666666, 0x444444);
// grid.rotateY(Math.PI / 2);
// scene.add(grid);
// camera.position.set(25, 25, 25);

// // new THREE.OrbitControls(camera, renderer.domElement);
// const controls = new OrbitControls(camera, renderer.domElement);

// let t = 0;
// function render(dt) {
//   const t2 = dt - t;
//   requestAnimationFrame(render);
//   renderer.render(scene, camera);
//   solarsystem.forEach(upd);
//   sun.rotateY(t2 / 1000);
//   t = dt;

//   function upd(d) {
//     d.o.rotateY((t2 / 10000) * d.speed);
//     d.satellites && d.satellites.forEach(upd);
//   }

//   controls.update();
// }

// requestAnimationFrame(render);
