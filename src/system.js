import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

export default class PlanetSystem {
  #renderer = null;
  #scene = null;
  #camera = null;
  #controls = null;
  #raycaster = null;
  #planets = [];
  /**
   * @param {HTMLElement} container
   * @param {string} name
   */
  constructor(container, name) {
    this.name = name;
    this.#renderer = this.#createSystem();
    container.append(this.#renderer.domElement);
    this.#animate();
  }
  showGrid() {
    const grid = new THREE.GridHelper(1000, 20, 0xc0c0c0, 0xc0c0c0);
    grid.rotateY(Math.PI / 2);
    this.#scene.add(grid);
  }
  showAxis() {
    // Ось X красного цвета, ось Y - зеленая, ось Z - синяя
    const axes = new THREE.AxesHelper(100);
    axes.position.set(0, 0, 0);
    this.#scene.add(axes);
  }
  /**
   * @param {import('./planet.js').default} planet
   */
  addPlanet(planet) {
    this.#scene.add(planet.getObject());
    this.#planets.push(planet);
  }
  /**
   * @param {import('./planet.js').default} sun
   */
  addSolar(sun) {
    this.#scene.add(sun.getObject());
  }
  toggleOrbit() {
    this.#planets.forEach((planet) => planet.toggleOrbit());
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
    this.#camera.position.z = 700;
    this.#camera.position.y = 200;
    this.#camera.position.x = 0;

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
      // this.#camera.lookAt(selectedObject);
      console.log(selectedObject);
    }
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.#controls.update();
    this.#renderer.render(this.#scene, this.#camera);
  }
}
