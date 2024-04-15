import * as THREE from '../node_modules/three/build/three.module.js';
/**
 * @typedef {{
 * speedCoeff: number
 * dimensionCoeff: number
 * }} CoeffParam
 * @typedef {{
 * name: string,
 * description: string,
 * }} Description
 * @typedef {{
 * description: Description,
 * radius: number,
 * rotationSpeed: number,
 * rotationDirection: -1 | 1,
 * texture?: string,
 * textureBump?: string,
 * textureSpec?: string,
 * textureCloud?: string,
 * color?: string,
 * }} SpaceObjectParams
 */
const defaultColor = 0xffffff;

export default class SpaceObject {
  spaceObject = null;
  /**
   * @param {SpaceObjectParams} objectParam
   */
  constructor(objectParam, coeffParam) {
    this.objectParam = objectParam;
    this.coeffParam = coeffParam;

    this.spaceObject = this.#createObject(objectParam, coeffParam);
  }
  getObject() {
    return this.spaceObject;
  }
  animate() {}
  /**
   * @param {SpaceObjectParams} objectParam
   * @param {CoeffParam} coeffParam
   * @returns {THREE.Mesh}
   */
  #createObject(objectParam, coeffParam) {
    const geometry = new THREE.SphereGeometry(objectParam.radius / coeffParam.dimensionCoeff, 32, 32);

    let material = new THREE.MeshPhongMaterial({ color: defaultColor });
    if (objectParam.texture) {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(objectParam.texture);
      let textureBump = null;
      let textureSpec = null;
      if (objectParam.textureBump) {
        textureBump = loader.load(objectParam.textureBump);
      }
      if (objectParam.textureSpec) {
        textureSpec = loader.load(objectParam.textureSpec);
      }
      texture.anisotropy = 8;
      material = new THREE.MeshPhongMaterial({
        map: texture,
        bumpMap: textureBump,
        bumpScale: 0.5,
        specularMap: textureSpec,
        shininess: 0.5,
      });
    } else if (objectParam.color) {
      material.color = new THREE.Color(objectParam.color);
    }

    // Для облаков еще одна сфера большего размера прозрачная

    const spaceObject = new THREE.Mesh(geometry, material);
    spaceObject.rotation.x = Math.PI / 2;
    spaceObject.receiveShadow = true;
    spaceObject.castShadow = true;
    spaceObject.position.set(0, 0, 0);

    return spaceObject;
  }
}
