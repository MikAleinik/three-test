import * as THREE from '../node_modules/three/build/three.module.min.js';

/**
 * @typedef {{
 * radius: number,
 * inclinationAngle: number,
 * rotationSpeed: number,
 * rotationDirectionOnClock: boolean,
 * color: string,
 * }} GeometryParams
 */
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
export default class Planet {
  #planet = null;
  #orbit = null;

  /**
   * @param {string} name
   * @param {GeometryParams} planetParam
   * @param {OrbitParams} orbitParam
   */
  constructor(name, planetParam, orbitParam) {
    this.name = name;
    this.planetParam = planetParam;
    this.orbitParam = orbitParam;

    this.#planet = this.#createPlanet(planetParam);
    this.#orbit = this.#createOrbit(orbitParam);
  }
  getPlanet() {
    return this.#planet;
  }
  getOrbit() {
    return this.#orbit;
  }
  /**
   * @param {GeometryParams} planetParam
   * @returns {THREE.Mesh}
   */
  #createPlanet(planetParam) {
    const geometry = new THREE.SphereGeometry(planetParam.radius, 32, 32, 0, 0.5, 0);
    // const material = new THREE.MeshBasicMaterial({ color: planetParam.color });
    const material = new THREE.LineDashedMaterial({
      color: planetParam.color,
      linewidth: 1,
      scale: 1,
      dashSize: 3,
      gapSize: 1,
    });

    return new THREE.Mesh(geometry, material);
  }
  /**
   * @param {OrbitParams} orbitParam
   * @returns {THREE.Mesh}
   */
  #createOrbit(orbitParam) {
    // const curve = new THREE.EllipseCurve(
    //   orbitParam.center.x, // ax
    //   orbitParam.center.y, // aY
    //   orbitParam.diameter / 2, // xRadius
    //   orbitParam.diameter / 2, // yRadius
    //   0, // aStartAngle
    //   2 * Math.PI, // aEndAngle
    //   false, // aClockwise
    //   0 // aRotation
    // );

    // const points1 = curve.getPoints(300).filter((value, index) => index % 2 === 0);
    const points = [];
    // for (let i = 0; i < 360; i += 1) {
    //   const vector = new THREE.Vector3()
    //   points.push({
    //     x: Math.cos(i) * orbitParam.radius,
    //     y: Math.sin(i) * orbitParam.radius,
    //   });
    // }

    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0x000000 });

    return new THREE.Mesh(geometry, material);
  }
}
