import * as THREE from '../../node_modules/three/build/three.module.min.js';
import SpaceObject from './space-object.js';
/**
 * @typedef {{
 * radiusMin: number,
 * radiusMax: number,
 * width: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * angle: {
 *  x: number,
 *  y: number,
 *  z?: number,
 * },
 * texture: string,
 * color?: string,
 * }} RingParams
 * @typedef {{
 * radius: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * angle: {
 *  x: number,
 *  y: number,
 *  z?: number,
 *  start?: number,
 * },
 * }} OrbitParams
 * @typedef {{
 * units: import('./space-object.js').CoeffParam,
 * object: import('./space-object.js').SpaceObjectParams,
 * orbit: OrbitParams,
 * sputnik: PlanetParams[],
 * ring: RingParams,
 * }} PlanetParams
 */

const orbitPoints = 200;
const orbitColor = 0x696969;

const defaultRingColor = 0x87ceeb;

export default class Planet extends SpaceObject {
  #sputniks = [];
  /**
   * @param {PlanetParams} planetParam
   */
  constructor(planetParam) {
    super(planetParam.object, planetParam.units);
    /** @type {PlanetParams} */
    this.objectParam = planetParam;

    this.#setAxis(planetParam);
    this.spaceObject = this.#createPlanet(planetParam);

    if (planetParam.sputnik) {
      planetParam.sputnik.forEach((sputnik) => {
        const planetSputnik = new Planet(sputnik, planetParam.units);
        this.planetSystem.add(planetSputnik.getObject());
        this.#sputniks.push(planetSputnik);
      });
    }
    if (planetParam.ring) {
      this.#createRing();
    }

    this.#animate();
  }
  toggleOrbit() {
    this.orbit.material.opacity = Number(!this.orbit.material.opacity);
    this.#sputniks.forEach((sputnik) => sputnik.toggleOrbit());
  }
  /**
   * @param {THREE.Mesh[]} intersects
   */
  clickHandler(intersects, camera) {
    let isChecked = false;
    intersects.forEach((item) => {
      if (item.object.uuid === this.planet.uuid) {
        console.log(this.objectParam.object.description);
        isChecked = true;

        const geometry = new THREE.TorusGeometry(
          (this.objectParam.object.radius / this.objectParam.units.objectDimensionCoeff) * 2,
          0.5,
          10,
          4
        );
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const torus = new THREE.Mesh(geometry, material);

        // const axis = new THREE.Vector3(item.normal.x, item.normal.y, item.normal.z).normalize();
        // torus.lookAt(axis);
        // torus.rotation.x = Math.cos(item.normal.x);
        // torus.rotation.y = Math.tan(item.normal.y);
        // torus.rotation.z = Math.cos(item.normal.z);

        // this.planet.add(torus);
        this.planetSystem.add(torus);
      }
    });
    if (!isChecked) {
      this.#sputniks.forEach((sputnik) => {
        sputnik.clickHandler(intersects);
      });
    }
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.quaternion.setFromAxisAngle(
      this.systemAxis,
      (this.objectParam.orbit.rotationSpeed * this.objectParam.orbit.rotationDirection) /
        this.objectParam.units.orbitSpeedCoeff
    );
    this.planetSystem.position.applyQuaternion(this.quaternion);

    this.planet.rotation.y +=
      (this.objectParam.object.rotationSpeed * this.objectParam.object.rotationDirection) /
      this.objectParam.units.objectSpeedCoeff;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {boolean}
   */
  #setAxis(planetParam) {
    this.quaternion = new THREE.Quaternion();

    const axisX = Math.abs(planetParam.orbit.angle.x);
    let axisY = 90;
    const axisZ = Math.abs(planetParam.orbit.angle.y);
    if (axisX === 45 && axisZ === 45) {
      axisY = 45;
    }

    this.orbitAxis = new THREE.Vector3(axisX, axisY, axisZ).normalize();
    this.systemAxis = new THREE.Vector3(0, 0, 90).normalize();
    return true;
  }
  /**
   * @returns {THREE.Object3D}
   */
  #createPlanet() {
    const globalPlanetSystem = new THREE.Object3D(this.objectParam.object.description.name);
    globalPlanetSystem.position.set(0, 0, 0);

    const curve = new THREE.EllipseCurve(
      0,
      0,
      this.objectParam.orbit.radius / this.objectParam.units.orbitDimensionCoeff,
      this.objectParam.orbit.radius / this.objectParam.units.orbitDimensionCoeff,
      0,
      2 * Math.PI,
      false,
      0
    );
    const points = curve.getPoints(orbitPoints);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: orbitColor, transparent: true, opacity: 0.5 });
    this.orbit = new THREE.Line(geometry, material);

    this.planet = this.spaceObject;
    this.planet.position.set(0, 0, 0);

    this.planetSystem = new THREE.Object3D();
    this.planetSystem.rotation.x = Math.PI / 2;
    const planetX = (this.objectParam.orbit.radius / this.objectParam.units.orbitDimensionCoeff) * -1;
    const planetY = 0;
    const planetZ = 0;
    this.planetSystem.position.set(planetX, planetY, planetZ);
    this.planetSystem.add(this.planet);

    globalPlanetSystem.add(this.orbit);
    globalPlanetSystem.add(this.planetSystem);

    globalPlanetSystem.lookAt(this.orbitAxis);

    globalPlanetSystem.castShadow = true;
    globalPlanetSystem.receiveShadow = true;

    return globalPlanetSystem;
  }
  #createRing() {
    const geometry = new THREE.RingGeometry(
      this.objectParam.ring.radiusMin / this.objectParam.units.objectDimensionCoeff,
      this.objectParam.ring.radiusMax / this.objectParam.units.objectDimensionCoeff,
      32
    );

    let material = new THREE.MeshPhongMaterial({ color: defaultRingColor, side: THREE.DoubleSide });
    if (this.objectParam.ring.texture) {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(this.objectParam.ring.texture);
      texture.anisotropy = 8;
      material = new THREE.MeshPhongMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
    } else if (this.objectParam.ring.color) {
      material.color = new THREE.Color(this.objectParam.ring.color);
    }

    const ring = new THREE.Mesh(geometry, material);

    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = Math.PI - Math.PI * Math.tan(this.objectParam.ring.angle.x) * 2;
    ring.receiveShadow = true;
    ring.castShadow = true;
    ring.position.set(0, 0, 0);

    this.planetSystem.add(ring);
  }
}
