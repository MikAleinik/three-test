import * as THREE from '../../node_modules/three/build/three.module.js';
import SpaceObject from './space-object.js';

/**
 * @typedef {{
 * units: import('./space-object.js').CoeffParam,
 * object: import('./space-object.js').SpaceObjectParams,
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
    super(starParam.object, starParam.units);
    /** @type {StarParams} */
    this.objectParam = starParam;

    const geometry = new THREE.SphereGeometry(
      this.objectParam.object.radius / this.objectParam.units.objectDimensionCoeff,
      32,
      32
    );

    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshStandardMaterial({
      emissive: 0xffd700,
      emissiveMap: loader.load(this.objectParam.object.texture),
      emissiveIntensity: 1,
    });

    this.spaceObject.material = this.#getStarMaterial();
    this.spaceObject = new THREE.Mesh(geometry, material);

    const light = this.#createLight();
    this.spaceObject.add(light);

    this.spaceObject.receiveShadow = true;
    this.spaceObject.castShadow = true;

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.spaceObject.rotation.y +=
      (this.objectParam.object.rotationSpeed * this.objectParam.object.rotationDirection) /
      this.objectParam.units.objectSpeedCoeff;
  }
  /**
   * @returns {THREE.MeshStandardMaterial}
   */
  #getStarMaterial() {
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshStandardMaterial({
      emissive: 0xffd700,
      emissiveMap: loader.load(this.objectParam.object.texture),
      emissiveIntensity: 1,
    });
    return material;
  }
  /**
   * @returns {THREE.PointLight}
   */
  #createLight() {
    const pointLight = new THREE.PointLight(this.objectParam.color, 1, 5000000000);
    pointLight.position.set(0, 0, 0);

    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 2048 * 1.5;
    pointLight.shadow.mapSize.height = 2048 * 1.5;
    pointLight.shadow.camera.near = this.objectParam.object.radius / this.objectParam.units.objectDimensionCoeff + 1;
    pointLight.shadow.camera.far =
      (this.objectParam.object.radius / this.objectParam.units.objectDimensionCoeff) * 5000000000;

    pointLight.power = this.objectParam.power;
    return pointLight;
  }
}
