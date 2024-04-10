import * as THREE from '../node_modules/three/build/three.module.min.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * radius: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * angle: [number, number, number],
 * }} OrbitParams
 * @typedef {{
 * object: SpaceObjectParams,
 * orbit: OrbitParams,
 * sputnik: PlanetParams[],
 * }} PlanetParams
 */
export default class Planet extends SpaceObject {
  // #orbitWidth = 0.1;
  #orbitWidth = 1;
  /**
   * @param {PlanetParams} planetParam
   */
  constructor(planetParam) {
    super(planetParam.object);
    this.objectParam = planetParam;

    this.spaceObject = this.#createPlanet(planetParam);

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.quaternion.setFromAxisAngle(this.orbitAxis, 0.03);
    this.planet.position.applyQuaternion(this.quaternion);
    // this.spaceObject.rotation.y += this.objectParam.orbit.rotationSpeed * this.objectParam.orbit.rotationDirection;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planetSystem = new THREE.Object3D(planetParam.object.description.name);
    planetSystem.position.set(0, 0, 0);

    this.quaternion = new THREE.Quaternion();
    this.orbitAxis = new THREE.Vector3(...planetParam.orbit.angle).normalize();
    planetSystem.position.applyQuaternion(this.quaternion);

    const geometryOrbit = new THREE.RingGeometry(
      planetParam.orbit.radius,
      planetParam.orbit.radius + this.#orbitWidth,
      32
    );
    const materialOrbit = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(geometryOrbit, materialOrbit);
    orbit.rotation.x = Math.PI / 2;
    orbit.rotation.x = this.orbitAxis.x === 0 ? orbit.rotation.x : this.orbitAxis.x;
    orbit.rotation.y = this.orbitAxis.y;
    orbit.rotation.z = this.orbitAxis.z;

    planetSystem.add(orbit);

    planetSystem.add(this.spaceObject);
    this.planet = this.spaceObject;
    this.planet.position.set(0, 0, planetParam.orbit.radius);

    this.quaternion.setFromAxisAngle(this.orbitAxis, 0.1);
    this.planet.position.applyQuaternion(this.quaternion);

    // const vector = new THREE.Vector3(...planetParam.orbit.angle).normalize();
    // planetSystem.rotation.set(vector);

    return planetSystem;
  }
}
