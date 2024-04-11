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

    this.orbitAxis = new THREE.Vector3(
      this.objectParam.orbit.angle.x / 90,
      1,
      this.objectParam.orbit.angle.z / 90
    ).normalize();
    this.quaternion = new THREE.Quaternion();
    this.quaternion.setFromAxisAngle(this.orbitAxis, 0);

    this.spaceObject = this.#createPlanet(planetParam);

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    // this.quaternion.setFromAxisAngle(this.orbitAxis, 0.02);
    // this.planet.position.applyQuaternion(this.quaternion);
    // this.spaceObject.rotation.y += this.objectParam.orbit.rotationSpeed * this.objectParam.orbit.rotationDirection;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planetSystem = new THREE.Object3D(planetParam.object.description.name);
    planetSystem.position.set(0, 0, 0);

    // planetSystem.position.applyQuaternion(this.quaternion);

    const geometryOrbit = new THREE.RingGeometry(
      planetParam.orbit.radius,
      planetParam.orbit.radius + this.#orbitWidth,
      32
    );
    const materialOrbit = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const orbit = new THREE.Mesh(geometryOrbit, materialOrbit);
    // orbit.rotation.x = Math.PI / 2;
    orbit.lookAt(this.orbitAxis);
    // orbit.normal.x = this.orbitAxis.x;
    // orbit.normal.y = this.orbitAxis.y;
    // orbit.normal.z = this.orbitAxis.z;

    // orbit.rotation.x = this.orbitAxis.x;
    // orbit.rotation.y = this.orbitAxis.y;
    // orbit.rotation.z = this.orbitAxis.z;

    planetSystem.add(orbit);

    planetSystem.add(this.spaceObject);
    this.planet = this.spaceObject;

    const planetX = planetParam.orbit.radius;
    let planetY = planetParam.orbit.radius;
    let planetZ = planetParam.orbit.radius;

    // if (this.objectParam.orbit.angle.x > 0) {
    //   planetX *= Math.cos(this.objectParam.orbit.angle.x);
    // }

    //* (planetParam.orbit.radius - this.objectParam.object.radius) * -1
    // if (this.objectParam.orbit.angle.z > 0) {
    planetY = Math.cos(this.objectParam.orbit.angle.z) * planetParam.orbit.radius;
    planetZ = Math.sin(this.objectParam.orbit.angle.z) * planetParam.orbit.radius;
    // }
    this.planet.position.set(planetX, planetY, planetZ);
    // this.planet.position.set(
    //   planetParam.orbit.radius * this.orbitAxis.x,
    //   planetParam.orbit.radius * this.orbitAxis.y,
    //   planetParam.orbit.radius * this.orbitAxis.z
    // );
    // this.planet.lookAt(this.orbitAxis);
    // this.planet.rotation.x = this.orbitAxis.x;
    // this.planet.rotation.y = this.orbitAxis.y;
    // this.planet.rotation.z = this.orbitAxis.z;
    // this.orbitAxis.z === 0 ? planetParam.orbit.radius : planetParam.orbit.radius * this.orbitAxis.x;

    // this.planet.position.applyQuaternion(this.quaternion);

    // const vector = new THREE.Vector3(...planetParam.orbit.angle).normalize();
    // planetSystem.rotation.set(vector);
    // planetSystem.position.applyQuaternion(this.quaternion);

    // planetSystem.lookAt(this.orbitAxis);
    return planetSystem;
  }
}
