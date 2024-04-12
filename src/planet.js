import * as THREE from '../node_modules/three/build/three.module.min.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * radius: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * angle: {
 *  x: number,
 *  z: number,
 * },
 * }} OrbitParams
 * @typedef {{
 * object: SpaceObjectParams,
 * orbit: OrbitParams,
 * sputnik: PlanetParams[],
 * }} PlanetParams
 */
export default class Planet extends SpaceObject {
  #orbitWidth = 1;
  /**
   * @param {PlanetParams} planetParam
   */
  constructor(planetParam) {
    super(planetParam.object);
    this.objectParam = planetParam;

    // this.orbitAxis = new THREE.Vector3(
    //   this.objectParam.orbit.angle.x / 180,
    //   1,
    //   this.objectParam.orbit.angle.z / 180
    // ).normalize();
    this.orbitAxis = new THREE.Vector3(0, 1, 0.5).normalize();
    this.orbitAxis = new THREE.Vector3(0, 1, 0.5).normalize();

    // this.quaternion = new THREE.Quaternion();
    // this.quaternion.setFromAxisAngle(this.orbitAxis, 0);

    this.spaceObject = this.#createPlanet(planetParam);

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    // this.quaternion.setFromAxisAngle(this.orbitAxis, 0.02);
    // this.spaceObject.setRotationFromQuaternion(this.quaternion);
    // this.spaceObject.position.applyQuaternion(this.quaternion);
    // this.spaceObject.rotation.y += this.objectParam.orbit.rotationSpeed * this.objectParam.orbit.rotationDirection;
    // this.spaceObject.rotateOnWorldAxis(this.orbitAxis, 0.01);
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planetSystem = new THREE.Object3D(planetParam.object.description.name);
    planetSystem.position.set(0, 0, 0);

    const geometryOrbit = new THREE.RingGeometry(
      planetParam.orbit.radius,
      planetParam.orbit.radius + this.#orbitWidth,
      32
    );
    const materialOrbit = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(geometryOrbit, materialOrbit);
    orbit.rotation.x = Math.PI / 2;

    const planet = this.spaceObject;
    const planetX = 0;
    const planetY = 0;
    const planetZ = planetParam.orbit.radius;
    planet.position.set(planetX, planetY, planetZ);

    planetSystem.add(orbit);
    planetSystem.add(planet);

    planetSystem.lookAt(this.orbitAxis);
    return planetSystem;
  }
}
