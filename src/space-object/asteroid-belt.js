import * as THREE from '../../node_modules/three/build/three.module.min.js';
import { getRandomNumber } from '../utils/utility.js';

const defaultColor = 0x3d3838;

/**
 * @typedef {{
 *  minOrbit: number,
 *  maxOrbit: number,
 *  height: number,
 *  countAsteroids: number,
 * }} AsteroidBeltParams
 */

export default class AsteroidBelt {
  /** @type {THREE.Mesh} */
  #spaceObject = null;
  /** @type {THREE.Mesh[]} */
  #asteroidObject = [];
  /**
   * @param {AsteroidBeltParams} params
   */
  constructor(params) {
    this.params = params;

    this.#spaceObject = this.#createObject();

    const countAsteroidsInDegree = Math.floor(params.countAsteroids / 360);
    for (let i = 0; i < 360; i += 1) {
      for (let j = 0; j < countAsteroidsInDegree; j += 1) {
        const asteroid = this.#createAsteriod(i, params.minOrbit, params.maxOrbit, params.height);
        this.#spaceObject.add(asteroid);
        this.#asteroidObject.push(asteroid);
      }
    }

    this.#animate();
  }
  getObject() {
    return this.#spaceObject;
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.#spaceObject.rotation.y += 0.00001;

    for (let i = 0; i < this.#asteroidObject.length; i += 1) {
      this.#asteroidObject[i].rotation.x += 0.001;
      this.#asteroidObject[i].rotation.z += 0.01;
    }
  }
  /**
   * @returns {THREE.Mesh}
   */
  #createObject() {
    const asteroidBeltSpaceObject = new THREE.Object3D();
    asteroidBeltSpaceObject.position.set(0, 0, 0);
    return asteroidBeltSpaceObject;
  }
  /**
   * @param {number} angle
   * @param {number} minOrbit
   * @param {number} maxOrbit
   * @param {number} height
   * @returns {THREE.Mesh}
   */
  #createAsteriod(angle, minOrbit, maxOrbit, height) {
    const widthFigure = getRandomNumber(3, 9);
    const heightFigure = getRandomNumber(3, 9);
    const geometry = new THREE.SphereGeometry(2, widthFigure, heightFigure);
    const material = new THREE.MeshLambertMaterial({ color: defaultColor });
    const asteroid = new THREE.Mesh(geometry, material);
    asteroid.receiveShadow = false;
    asteroid.castShadow = false;

    const radius = getRandomNumber(minOrbit, maxOrbit);
    const change = getRandomNumber(-height, height);

    const asteroidY = change;
    const asteroidX = Math.cos(angle) * radius;
    const asteroidZ = Math.sin(angle) * radius;

    asteroid.position.set(asteroidX, asteroidY, asteroidZ);

    return asteroid;
  }
}
