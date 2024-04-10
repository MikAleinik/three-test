import * as THREE from '../node_modules/three/build/three.module.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * object: SpaceObjectParams,
 * color: string,
 * power: number,
 * }} StarParams
 */
export default class Solar extends SpaceObject {
  #pointLight = null;
  /**
   * @param {StarParams} starParam
   */
  constructor(starParam) {
    super(starParam.object);
    this.starParam = starParam;

    this.spaceObject = this.#updateSpaceObject(starParam);
    this.#pointLight = this.#createLight(starParam);
  }
  /**
   * @returns {THREE.PointLight}
   */
  getLight() {
    return this.#pointLight;
  }
  /**
   * @param {StarParams} starParam
   */
  #updateSpaceObject(starParam) {
    const { spaceObject } = this;

    spaceObject.material.color = new THREE.Color(starParam.color);

    // this.spaceObject.transparent = true;
    // this.spaceObject.opacity = 0.5;
    return spaceObject;
  }
  /**
   * @param {StarParams} starParam
   * @returns {THREE.PointLight}
   */
  #createLight(starParam) {
    const pointLight = new THREE.PointLight(starParam.color, 1, 360);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    pointLight.intensity = starParam.power;
    return pointLight;
  }
}
