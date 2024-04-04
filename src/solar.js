import * as THREE from '../node_modules/three/build/three.module.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * color: string,
 * power: number,
 * }} SolarParams
 */
export default class Solar extends SpaceObject {
  #pointLight = null;
  /**
   * @param {SpaceObjectParams & SolarParams} solarParam
   */
  constructor(solarParam) {
    super(solarParam);
    this.objectParam = solarParam;

    this.#pointLight = this.#createLight(solarParam);
  }
  /**
   * @returns {THREE.PointLight}
   */
  getLight() {
    return this.#pointLight;
  }
  /**
   * @param {SolarParams} solarParam
   * @returns {THREE.PointLight}
   */
  #createLight(solarParam) {
    const pointLight = new THREE.PointLight(solarParam.color, 1, 360);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    pointLight.intensity = solarParam.power;
    return pointLight;
  }
}
