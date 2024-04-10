import * as THREE from '../node_modules/three/build/three.module.js';

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
 * rotationDirection: -1 | 1,
 * color: string,
 * }} SpaceObjectParams
 */
const defaultColor = 0xffffff;

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
  animate() {}
  /**
   * @param {SpaceObjectParams} geometryParam
   * @returns {THREE.Mesh}
   */
  #createObject(geometryParam) {
    const geometry = new THREE.SphereGeometry(geometryParam.radius, 32, 32);

    // const loader = new THREE.TextureLoader();
    // const material = new THREE.MeshLambertMaterial({ map: loader.load(img) });

    const material = new THREE.MeshLambertMaterial({ color: defaultColor });

    const spaceObject = new THREE.Mesh(geometry, material);
    spaceObject.receiveShadow = true;
    spaceObject.castShadow = true;
    spaceObject.position.set(0, 0, 0);

    return spaceObject;
  }
}
