import * as THREE from '../../node_modules/three/build/three.module.js';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

const gridColor = 0x696969;
const backgroundColor = 0x000000;
const backgroundLightColor = 0xffffff;

export default class PlanetSystem {
  #renderer = null;
  #scene = null;
  #camera = null;
  #controls = null;
  #raycaster = null;
  #grid = null;
  #axes = null;
  /** @type {import('./space-object.js').default[]} */
  #spaceObjects = [];

  #hasGridShowed = false;
  #hasAxesShowed = false;
  /**
   * @param {HTMLElement} container
   * @param {string} name
   */
  constructor(container, name) {
    this.#grid = new THREE.GridHelper(90000, 80, gridColor, gridColor);
    this.#grid.rotateY(Math.PI / 2);

    this.#axes = new THREE.AxesHelper(10000);
    this.#axes.position.set(0, 0, 0);

    this.name = name;
    this.#renderer = this.#createSystem();
    container.append(this.#renderer.domElement);
    this.#animate();
  }
  toggleOrbit() {
    this.#spaceObjects.forEach((spaceObject) => {
      if ('toggleOrbit' in spaceObject && typeof spaceObject.toggleOrbit === 'function') {
        spaceObject.toggleOrbit();
      }
    });
  }
  toggleGrid() {
    if (!this.#hasGridShowed) {
      this.#scene.add(this.#grid);
      this.#hasGridShowed = true;
    } else {
      this.#scene.remove(this.#grid);
      this.#hasGridShowed = false;
    }
  }
  toggleAxis() {
    // Ось X красного цвета, ось Y - зеленая, ось Z - синяя
    if (!this.#hasAxesShowed) {
      this.#scene.add(this.#axes);
      this.#hasAxesShowed = true;
    } else {
      this.#scene.remove(this.#axes);
      this.#hasAxesShowed = false;
    }
  }
  /**
   * @param {import('./planet.js').default} planet
   */
  addPlanet(planet) {
    this.#scene.add(planet.getObject());

    this.#spaceObjects.push(planet);
  }
  /**
   * @param {import('./planet.js').default} sun
   */
  addSolar(sun) {
    this.#scene.add(sun.getObject());

    this.#spaceObjects.push(sun);
  }
  /**
   * @param {import('./asteroid-belt.js').default} asteroidBelt
   */
  addAsteroidBelt(asteroidBelt) {
    this.#scene.add(asteroidBelt.getObject());
  }
  /**
   * @returns {THREE.WebGLRenderer}
   */
  #createSystem() {
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    // const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.addEventListener('click', this.#clickHandler.bind(this), true);

    this.#scene = new THREE.Scene();
    this.#scene.background = new THREE.Color(backgroundColor);

    const backgroundObject = this.#createBackground();
    this.#scene.add(backgroundObject);

    this.#camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000000);
    this.#camera.position.z = -2000;
    this.#camera.position.y = 500;
    this.#camera.position.x = 1000;
    // Ось X красного цвета, ось Y - зеленая, ось Z - синяя
    this.#controls = new OrbitControls(this.#camera, renderer.domElement);
    this.#raycaster = new THREE.Raycaster();

    const upperDirectionalLight = new THREE.DirectionalLight(backgroundLightColor, 0.1);
    upperDirectionalLight.position.set(0, 10000, 0);
    const lowerDirectionalLight = new THREE.DirectionalLight(backgroundLightColor, 0.1);
    lowerDirectionalLight.position.set(0, -10000, 0);

    this.#scene.add(upperDirectionalLight);
    this.#scene.add(lowerDirectionalLight);

    return renderer;
  }
  #clickHandler(event) {
    const mouse = new THREE.Vector2();
    mouse.set(
      (event.clientX / this.#renderer.domElement.clientWidth) * 2 - 1,
      -(event.clientY / this.#renderer.domElement.clientHeight) * 2 + 1
    );

    this.#raycaster.setFromCamera(mouse, this.#camera);
    const intersects = this.#raycaster.intersectObjects(this.#scene.children, true);

    console.log(this.#camera);

    this.#spaceObjects.forEach((spaceObject) => {
      spaceObject.clickHandler(intersects, this.#camera);
    });

    // if (intersects.length > 0) {
    //   const selectedObject = intersects[0];
    //   // console.log(selectedObject);
    //   const spaceObject = this.#planets.get(selectedObject.object.uuid);
    //   if (spaceObject) {
    //     spaceObject.clickHandler();
    //   } else {
    //     console.log('Unknown object selected');
    //   }
    // }
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.#controls.update();
    this.#renderer.render(this.#scene, this.#camera);
  }
  /**
   * @returns {THREE.Mesh}
   */
  #createBackground() {
    const geometry = new THREE.SphereGeometry(2439000.7 / 5, 32, 32);
    let material = null;
    const loader = new THREE.TextureLoader();
    const texture = loader.load('./img/background.webp');
    material = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.BackSide,
    });
    const backgroundObject = new THREE.Mesh(geometry, material);
    backgroundObject.position.set(0, 0, 0);
    return backgroundObject;
  }
}
