import * as THREE from '../node_modules/three/build/three.module.min.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * x: number,
 * y: number,
 * z: number,
 * }} Position
 */
/**
 * @typedef {{
 * radius: number,
 * center: Position,
 * rotationSpeed: number,
 * rotationDirectionOnClock: boolean,
 * }} OrbitParams
 */
export default class Planet extends SpaceObject {
  /**
   * @param {SpaceObjectParams & OrbitParams} planetParam
   */
  constructor(planetParam) {
    super(planetParam);
    this.objectParam = planetParam;

    this.spaceObject = this.#createPlanet(planetParam);
  }
  /**
   * @param {OrbitParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planet = new THREE.Object3D('test');
    planet.position.set(0, 0, 0);

    planet.add(this.spaceObject);

    const geometryOrbit = new THREE.RingGeometry(20, 20.1, 32);
    const materialOrbit = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(geometryOrbit, materialOrbit);
    orbit.rotation.x = -Math.PI / 2;
    planet.add(orbit);

    return planet;
  }
}
