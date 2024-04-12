import * as THREE from '../node_modules/three/build/three.module.min.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * radius: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * angle: {
 *  x: number,
 *  y: number,
 * },
 * }} OrbitParams
 * @typedef {{
 * units: CoeffParam,
 * object: SpaceObjectParams,
 * orbit: OrbitParams,
 * sputnik: PlanetParams[],
 * }} PlanetParams
 */
export default class Planet extends SpaceObject {
  /**
   * @param {PlanetParams} planetParam
   */
  constructor(planetParam) {
    super(planetParam.object, planetParam.units);
    this.objectParam = planetParam;

    this.#setAxis(planetParam);
    this.spaceObject = this.#createPlanet(planetParam);

    if (planetParam.sputnik) {
      planetParam.sputnik.forEach((sputnik) => {
        const planetSputnik = new Planet(sputnik);
        this.planet.add(planetSputnik.getObject());
      });
    }

    this.#animate();
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.quaternion.setFromAxisAngle(
      this.systemAxis,
      (this.objectParam.orbit.rotationSpeed * this.objectParam.orbit.rotationDirection) / this.coeffParam.speedCoeff
    );
    this.planet.position.applyQuaternion(this.quaternion);

    this.planet.rotation.z +=
      (this.objectParam.object.rotationSpeed * this.objectParam.object.rotationDirection) / this.coeffParam.speedCoeff;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {boolean}
   */
  #setAxis(planetParam) {
    this.quaternion = new THREE.Quaternion();

    const axisX = Math.abs(planetParam.orbit.angle.x);
    const axisY = Math.abs(planetParam.orbit.angle.y);
    let axisZ = 90;
    if (axisX === 45 && axisY === 45) {
      axisZ = 45;
    }

    this.orbitAxis = new THREE.Vector3(axisX, axisY, axisZ).normalize();
    this.systemAxis = new THREE.Vector3(0, 0, 90).normalize();
    return true;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planetSystem = new THREE.Object3D(planetParam.object.description.name);
    planetSystem.position.set(0, 0, 0);

    const curve = new THREE.EllipseCurve(
      0,
      0,
      planetParam.orbit.radius / planetParam.units.dimensionCoeff,
      planetParam.orbit.radius / planetParam.units.dimensionCoeff,
      0,
      2 * Math.PI,
      false,
      0
    );
    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const orbit = new THREE.Line(geometry, material);

    this.planet = this.spaceObject;
    const planetX = 0;
    const planetY = planetParam.orbit.radius / planetParam.units.dimensionCoeff;
    const planetZ = 0;
    this.planet.position.set(planetX, planetY, planetZ);

    planetSystem.add(orbit);
    planetSystem.add(this.planet);

    planetSystem.lookAt(this.orbitAxis);
    return planetSystem;
  }
}
