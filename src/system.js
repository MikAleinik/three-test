import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

export default class PlanetSystem {
  #renderer = null;
  #scene = null;
  #camera = null;
  #controls = null;
  #raycaster = null;
  /**
   * @param {HTMLElement} container
   * @param {string} name
   */
  constructor(container, name) {
    this.name = name;
    this.#renderer = this.#createSystem();
    container.append(this.#renderer.domElement);
    this.#animate();

    this.#tempLight();
  }
  showGrid() {
    const grid = new THREE.GridHelper(1000, 20, 0x666666, 0x444444);
    grid.rotateY(Math.PI / 2);
    this.#scene.add(grid);
  }
  showAxis() {
    const axes = new THREE.AxesHelper(50);
    axes.position.set(-75, 0, -25);
    this.#scene.add(axes);
  }
  showPlane() {
    const geometry1 = new THREE.PlaneGeometry(400, 200, 100, 100);
    const material1 = new THREE.MeshLambertMaterial({ color: 0x008cf0 });
    // const material1 = new THREE.ShadowMaterial({ color: 0x008cf0, transparent: false });
    // material1.opacity = 0.5;
    // material1.transparent = false;
    const plane = new THREE.Mesh(geometry1, material1);
    plane.position.y = -85;
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.#scene.add(plane);
  }
  /**
   * @param {import('./space-object.js').default} spaceObject
   */
  addObject(spaceObject) {
    this.#scene.add(spaceObject.getObject());
  }
  /**
   * @returns {THREE.WebGLRenderer}
   */
  #createSystem() {
    // const renderer = new THREE.WebGLRenderer({ alpha: true });
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.addEventListener('click', this.#clickHandler.bind(this), true);

    this.#scene = new THREE.Scene();
    this.#scene.background = new THREE.Color(0xdcdcdc);

    this.#camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
    this.#camera.position.z = 200;
    this.#camera.position.y = 100;
    this.#camera.position.x = -30;

    this.#controls = new OrbitControls(this.#camera, renderer.domElement);
    this.#raycaster = new THREE.Raycaster();

    return renderer;
  }
  #clickHandler() {
    const mouse = new THREE.Vector2();
    this.#raycaster.setFromCamera(mouse, this.#camera);
    const intersects = this.#raycaster.intersectObjects(this.#scene.children, true);
    if (intersects.length > 0) {
      const selectedObject = intersects[0];
      console.log(selectedObject);
    }
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.#controls.update();
    this.#renderer.render(this.#scene, this.#camera);
  }
  #tempLight() {
    const pointLight = new THREE.PointLight(0xffffff, 1, 300);
    pointLight.position.set(0, 100, 0);
    pointLight.castShadow = true;
    pointLight.intensity = 75000;

    this.#scene.add(pointLight);

    const sphereSize = 3;
    const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
    this.#scene.add(pointLightHelper);
  }
}
