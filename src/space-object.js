import * as THREE from '../node_modules/three/build/three.module.js';
import img from './img/cube.png';
/**
 * @typedef {{
 * name: string,
 * description: string,
 * }} Description
 *
 * @typedef {{
 * description: Description,
 * radius: number,
 * rotationSpeed: number,
 * rotationDirectionOnClock: boolean,
 * color: string,
 * }} SpaceObjectParams
 */
export default class SpaceObject {
  spaceObject = null;
  /**
   * @param {SpaceObjectParams} geometryParam
   */
  constructor(geometryParam) {
    this.objectParam = geometryParam;

    this.spaceObject = this.#createObject(geometryParam);
  }
  getObject() {
    return this.spaceObject;
  }
  /**
   * @param {SpaceObjectParams} geometryParam
   * @returns {THREE.Mesh}
   */
  #createObject(geometryParam) {
    const geometry = new THREE.SphereGeometry(geometryParam.radius, 32, 32);
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshLambertMaterial({ map: loader.load(img) });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.transparent = true;
    sphere.opacity = 0.5;
    sphere.receiveShadow = true;
    sphere.castShadow = true;
    sphere.position.set(0, 0, 0);

    return sphere;
  }
}
