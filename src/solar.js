import * as THREE from '../node_modules/three/build/three.module.js';
import SpaceObject from './space-object.js';

/**
 * @typedef {{
 * units: CoeffParam,
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
    super(starParam.object, starParam.units);
    this.objectParam = starParam;

    const geometry = new THREE.SphereGeometry(this.objectParam.object.radius / starParam.units.dimensionCoeff, 32, 32);

    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshStandardMaterial({
      emissive: 0xffd700,
      emissiveMap: loader.load(this.objectParam.object.texture),
      emissiveIntensity: 1,
    });

    this.spaceObject.material = this.#getStarMaterial();
    this.spaceObject = new THREE.Mesh(geometry, material);

    const light = this.#createLight(starParam);
    this.spaceObject.add(light);

    this.spaceObject.receiveShadow = true;
    this.spaceObject.castShadow = true;

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.spaceObject.rotation.y +=
      (this.objectParam.object.rotationSpeed * this.objectParam.object.rotationDirection) / this.coeffParam.speedCoeff;
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
   * @param {StarParams} starParam
   * @returns {THREE.PointLight}
   */
  #createLight(starParam) {
    // const pointLight = new THREE.PointLight(starParam.color, 1, distance);
    const pointLight = new THREE.PointLight(starParam.color, 1);
    pointLight.position.set(0, 0, 0);

    pointLight.castShadow = true;
    pointLight.shadow.mapSize.width = 512;
    pointLight.shadow.mapSize.height = 512;
    pointLight.shadow.camera.near = starParam.object.radius + 1;
    pointLight.shadow.camera.far = starParam.object.radius + 500;

    pointLight.power = starParam.power;
    return pointLight;
  }
}
