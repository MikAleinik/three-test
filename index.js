/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _planet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planet.js */ "./src/planet.js");
/* harmony import */ var _solar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solar.js */ "./src/solar.js");
/* harmony import */ var _system_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system.js */ "./src/system.js");
/* eslint-disable no-unused-vars */




// Скорость вращения по орбите в км/с
// Скорость вращения по оси в км/с
// Радиус орбиты в км
// Радиус объектов в км
const speedCoeff = 10000;
const dimensionCoeff = 1;

const units = {
  speedCoeff,
  dimensionCoeff,
};

const system = new _system_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.body, 'Солнечная система');
// system.showGrid();
// system.showAxis();

const solarParams = {
  units,
  object: {
    description: {
      name: 'Солнце',
      description: 'Описание',
    },
    radius: 100,
    rotationSpeed: 100,
    rotationDirection: 1,
  },
  color: 0xffff00,
  power: 100000,
};

const mercuryParams = {
  units,
  object: {
    description: {
      name: 'Меркурий',
      description: 'Описание Меркурий',
    },
    radius: 3,
    rotationSpeed: 0.003025555556,
    rotationDirection: 1,
  },
  orbit: {
    radius: 200,
    rotationSpeed: 47.36,
    rotationDirection: 1,
    angle: {
      x: 0,
      y: 0,
    },
  },
  sputnik: [],
};
const venusParams = {
  units,
  object: {
    description: {
      name: 'Венера',
      description: 'Описание Венера',
    },
    radius: 6,
    rotationSpeed: 0.001811111111,
    rotationDirection: 1,
  },
  orbit: {
    radius: 300,
    rotationSpeed: 35.02,
    rotationDirection: 1,
    angle: {
      x: 0,
      y: 0,
    },
  },
  sputnik: [],
};
const earthParams = {
  units,
  object: {
    description: {
      name: 'Земля',
      description: 'Описание земля',
    },
    radius: 15,
    rotationSpeed: 0.465111111111,
    rotationDirection: 1,
  },
  orbit: {
    radius: 400,
    rotationSpeed: 29.783,
    rotationDirection: 1,
    angle: {
      x: 0,
      y: 0,
    },
  },
  sputnik: [
    {
      units,
      object: {
        description: {
          name: 'Луна',
          description: 'Описание луна',
        },
        radius: 3,
        rotationSpeed: 0.010277777778,
        rotationDirection: 1,
      },
      orbit: {
        radius: 20,
        rotationSpeed: 360,
        rotationDirection: 1,
        angle: {
          x: 0,
          y: 0,
        },
      },
    },
  ],
};
const marsParams = {
  units,
  object: {
    description: {
      name: 'Марс',
      description: 'Описание Марс',
    },
    radius: 6,
    rotationSpeed: 0.241172222222,
    rotationDirection: 1,
  },
  orbit: {
    radius: 500,
    rotationSpeed: 24.13,
    rotationDirection: 1,
    angle: {
      x: 0,
      y: 0,
    },
  },
  sputnik: [
    {
      units,
      object: {
        description: {
          name: 'Фобос',
          description: 'Описание Фобос',
        },
        radius: 2,
        rotationSpeed: 2.14, // не верное значение
        rotationDirection: 1,
      },
      orbit: {
        radius: 9,
        rotationSpeed: 440,
        rotationDirection: 1,
        angle: {
          x: 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units,
      object: {
        description: {
          name: 'Деймос',
          description: 'Описание Деймос',
        },
        radius: 3,
        rotationSpeed: 3.94, // не верное значение
        rotationDirection: 1,
      },
      orbit: {
        radius: 15,
        rotationSpeed: 370,
        rotationDirection: 1,
        angle: {
          x: 0,
          y: 0,
        },
      },
      sputnik: [],
    },
  ],
};

const solar = new _solar_js__WEBPACK_IMPORTED_MODULE_1__["default"](solarParams);
system.addObject(solar);

system.addObject(new _planet_js__WEBPACK_IMPORTED_MODULE_0__["default"](mercuryParams));
system.addObject(new _planet_js__WEBPACK_IMPORTED_MODULE_0__["default"](venusParams));
system.addObject(new _planet_js__WEBPACK_IMPORTED_MODULE_0__["default"](earthParams));
system.addObject(new _planet_js__WEBPACK_IMPORTED_MODULE_0__["default"](marsParams));


/***/ }),

/***/ "./src/planet.js":
/*!***********************!*\
  !*** ./src/planet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Planet)
/* harmony export */ });
/* harmony import */ var _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/three/build/three.module.min.js */ "./node_modules/three/build/three.module.min.js");
/* harmony import */ var _space_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-object.js */ "./src/space-object.js");


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
class Planet extends _space_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    this.quaternion = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.Quaternion();

    const axisX = Math.abs(planetParam.orbit.angle.x);
    const axisY = Math.abs(planetParam.orbit.angle.y);
    let axisZ = 90;
    if (axisX === 45 && axisY === 45) {
      axisZ = 45;
    }

    this.orbitAxis = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(axisX, axisY, axisZ).normalize();
    this.systemAxis = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 90).normalize();
    return true;
  }
  /**
   * @param {PlanetParams} planetParam
   * @returns {THREE.Object3D}
   */
  #createPlanet(planetParam) {
    const planetSystem = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.Object3D(planetParam.object.description.name);
    planetSystem.position.set(0, 0, 0);

    const curve = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.EllipseCurve(
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
    const geometry = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints(points);
    const material = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({ color: 0xff0000 });
    const orbit = new _node_modules_three_build_three_module_min_js__WEBPACK_IMPORTED_MODULE_1__.Line(geometry, material);

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


/***/ }),

/***/ "./src/solar.js":
/*!**********************!*\
  !*** ./src/solar.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Solar)
/* harmony export */ });
/* harmony import */ var _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _space_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-object.js */ "./src/space-object.js");


/**
 * @typedef {{
 * units: CoeffParam,
 * object: SpaceObjectParams,
 * color: string,
 * power: number,
 * }} StarParams
 */
class Solar extends _space_object_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  #pointLight = null;
  /**
   * @param {StarParams} starParam
   */
  constructor(starParam) {
    super(starParam.object, starParam.units);
    this.objectParam = starParam;

    this.spaceObject = this.#updateSpaceObject(starParam);
    this.#pointLight = this.#createLight(starParam);

    this.#animate();
  }
  /**
   * @returns {THREE.PointLight}
   */
  getLight() {
    return this.#pointLight;
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.spaceObject.rotation.z +=
      (this.objectParam.object.rotationSpeed * this.objectParam.object.rotationDirection) / this.coeffParam.speedCoeff;
  }
  /**
   * @param {StarParams} starParam
   */
  #updateSpaceObject(starParam) {
    const { spaceObject } = this;

    spaceObject.material.color = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_1__.Color(starParam.color);

    return spaceObject;
  }
  /**
   * @param {StarParams} starParam
   * @returns {THREE.PointLight}
   */
  #createLight(starParam) {
    const pointLight = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_1__.PointLight(starParam.color, 1, 360);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    pointLight.intensity = starParam.power;
    return pointLight;
  }
}


/***/ }),

/***/ "./src/space-object.js":
/*!*****************************!*\
  !*** ./src/space-object.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpaceObject)
/* harmony export */ });
/* harmony import */ var _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js");

// import img from './img/cube.png';
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
 * color: string,
 * }} SpaceObjectParams
 */
const defaultColor = 0xffffff;

class SpaceObject {
  spaceObject = null;
  /**
   * @param {SpaceObjectParams} geometryParam
   */
  constructor(geometryParam, coeffParam) {
    this.objectParam = geometryParam;
    this.coeffParam = coeffParam;

    this.spaceObject = this.#createObject(geometryParam, coeffParam);
  }
  getObject() {
    return this.spaceObject;
  }
  animate() {}
  /**
   * @param {SpaceObjectParams} geometryParam
   * @param {CoeffParam} coeffParam
   * @returns {THREE.Mesh}
   */
  #createObject(geometryParam, coeffParam) {
    const geometry = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(geometryParam.radius / coeffParam.dimensionCoeff, 32, 32);

    // const loader = new THREE.TextureLoader();
    // const material = new THREE.MeshLambertMaterial({ map: loader.load(img) });

    const material = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({ color: defaultColor });

    const spaceObject = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);
    spaceObject.receiveShadow = true;
    spaceObject.castShadow = true;
    spaceObject.position.set(0, 0, 0);

    return spaceObject;
  }
}


/***/ }),

/***/ "./src/system.js":
/*!***********************!*\
  !*** ./src/system.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlanetSystem)
/* harmony export */ });
/* harmony import */ var _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/three/examples/jsm/controls/OrbitControls.js */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");



class PlanetSystem {
  #renderer = null;
  #scene = null;
  #camera = null;
  #controls = null;
  #raycaster = null;
  /**
   * @param {HTMLElement} container
   * @param {string} name
   */
  constructor(container, name) {
    this.name = name;
    this.#renderer = this.#createSystem();
    container.append(this.#renderer.domElement);
    this.#animate();

    this.#tempLight();
  }
  showGrid() {
    const grid = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.GridHelper(1000, 20, 0xc0c0c0, 0xc0c0c0);
    grid.rotateY(Math.PI / 2);
    this.#scene.add(grid);
  }
  showAxis() {
    // Ось X красного цвета, ось Y - зеленая, ось Z - синяя
    const axes = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(100);
    axes.position.set(0, 0, 0);
    this.#scene.add(axes);
  }
  showPlane() {
    const geometry1 = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(400, 200, 100, 100);
    const material1 = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.MeshLambertMaterial({ color: 0x008cf0 });
    // const material1 = new THREE.ShadowMaterial({ color: 0x008cf0, transparent: false });
    // material1.opacity = 0.5;
    // material1.transparent = false;
    const plane = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry1, material1);
    plane.position.y = -85;
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    this.#scene.add(plane);
  }
  /**
   * @param {import('./space-object.js').default} spaceObject
   */
  addObject(spaceObject) {
    this.#scene.add(spaceObject.getObject());
  }
  /**
   * @returns {THREE.WebGLRenderer}
   */
  #createSystem() {
    // const renderer = new THREE.WebGLRenderer({ alpha: true });
    const renderer = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.addEventListener('click', this.#clickHandler.bind(this), true);

    this.#scene = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Scene();
    this.#scene.background = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Color(0xdcdcdc);

    this.#camera = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
    this.#camera.position.z = 600;
    this.#camera.position.y = -1200;
    this.#camera.position.x = 0;

    this.#controls = new _node_modules_three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(this.#camera, renderer.domElement);
    this.#raycaster = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Raycaster();

    return renderer;
  }
  #clickHandler() {
    const mouse = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.Vector2();
    this.#raycaster.setFromCamera(mouse, this.#camera);
    const intersects = this.#raycaster.intersectObjects(this.#scene.children, true);
    if (intersects.length > 0) {
      const selectedObject = intersects[0];
      console.log(selectedObject);
    }
  }
  #animate() {
    requestAnimationFrame(this.#animate.bind(this));

    this.#controls.update();
    this.#renderer.render(this.#scene, this.#camera);
  }
  #tempLight() {
    const pointLight = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1, 500);
    pointLight.position.set(0, 0, 400);
    pointLight.castShadow = true;
    pointLight.intensity = 750000;

    this.#scene.add(pointLight);

    const sphereSize = 3;
    const pointLightHelper = new _node_modules_three_build_three_module_js__WEBPACK_IMPORTED_MODULE_0__.PointLightHelper(pointLight, sphereSize);
    this.#scene.add(pointLightHelper);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthree"] = self["webpackChunkthree"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNpQztBQUNGO0FBQ1E7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFLO0FBQ3ZCO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQU07QUFDM0IscUJBQXFCLGtEQUFNO0FBQzNCLHFCQUFxQixrREFBTTtBQUMzQixxQkFBcUIsa0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE04QztBQUM3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ2UscUJBQXFCLHdEQUFXO0FBQy9DO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHFGQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtGQUFhO0FBQ3RDLDBCQUEwQixrRkFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsbUZBQWM7QUFDM0M7QUFDQTtBQUNBLHNCQUFzQix1RkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseUZBQW9CO0FBQzdDLHlCQUF5Qiw0RkFBdUIsR0FBRyxpQkFBaUI7QUFDcEUsc0JBQXNCLCtFQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdxRTtBQUN6QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDZSxvQkFBb0Isd0RBQVc7QUFDOUM7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBLHFDQUFxQyw0RUFBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixlQUFlO0FBQ2Y7QUFDQTtBQUNBLDJCQUEyQixpRkFBZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsYUFBYSxZQUFZO0FBQ3pCLGVBQWU7QUFDZjtBQUNBO0FBQ0EseUJBQXlCLHFGQUFvQjtBQUM3QztBQUNBO0FBQ0Esd0RBQXdELHVCQUF1QjtBQUMvRTtBQUNBLHlCQUF5QiwwRkFBeUIsR0FBRyxxQkFBcUI7QUFDMUU7QUFDQSw0QkFBNEIsMkVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERxRTtBQUN3QjtBQUM3RjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpRkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0ZBQW1CO0FBQzdDLDBCQUEwQiwwRkFBeUIsR0FBRyxpQkFBaUI7QUFDdkUsb0RBQW9ELHFDQUFxQztBQUN6RjtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQXFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtEQUFrRCxhQUFhO0FBQy9ELHlCQUF5QixvRkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0RUFBVztBQUNqQyxpQ0FBaUMsNEVBQVc7QUFDNUM7QUFDQSx1QkFBdUIsd0ZBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFHQUFhO0FBQ3RDLDBCQUEwQixnRkFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4RUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlGQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1RkFBc0I7QUFDdkQ7QUFDQTtBQUNBOzs7Ozs7O1VDckdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGhyZWUvLi9zcmMvcGxhbmV0LmpzIiwid2VicGFjazovL3RocmVlLy4vc3JjL3NvbGFyLmpzIiwid2VicGFjazovL3RocmVlLy4vc3JjL3NwYWNlLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90aHJlZS8uL3NyYy9zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vdGhyZWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhyZWUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90aHJlZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhyZWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aHJlZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RocmVlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RocmVlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGhyZWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RocmVlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgUGxhbmV0IGZyb20gJy4vcGxhbmV0LmpzJztcclxuaW1wb3J0IFNvbGFyIGZyb20gJy4vc29sYXIuanMnO1xyXG5pbXBvcnQgUGxhbmV0U3lzdGVtIGZyb20gJy4vc3lzdGVtLmpzJztcclxuXHJcbi8vINCh0LrQvtGA0L7RgdGC0Ywg0LLRgNCw0YnQtdC90LjRjyDQv9C+INC+0YDQsdC40YLQtSDQsiDQutC8L9GBXHJcbi8vINCh0LrQvtGA0L7RgdGC0Ywg0LLRgNCw0YnQtdC90LjRjyDQv9C+INC+0YHQuCDQsiDQutC8L9GBXHJcbi8vINCg0LDQtNC40YPRgSDQvtGA0LHQuNGC0Ysg0LIg0LrQvFxyXG4vLyDQoNCw0LTQuNGD0YEg0L7QsdGK0LXQutGC0L7QsiDQsiDQutC8XHJcbmNvbnN0IHNwZWVkQ29lZmYgPSAxMDAwMDtcclxuY29uc3QgZGltZW5zaW9uQ29lZmYgPSAxO1xyXG5cclxuY29uc3QgdW5pdHMgPSB7XHJcbiAgc3BlZWRDb2VmZixcclxuICBkaW1lbnNpb25Db2VmZixcclxufTtcclxuXHJcbmNvbnN0IHN5c3RlbSA9IG5ldyBQbGFuZXRTeXN0ZW0oZG9jdW1lbnQuYm9keSwgJ9Ch0L7Qu9C90LXRh9C90LDRjyDRgdC40YHRgtC10LzQsCcpO1xyXG4vLyBzeXN0ZW0uc2hvd0dyaWQoKTtcclxuLy8gc3lzdGVtLnNob3dBeGlzKCk7XHJcblxyXG5jb25zdCBzb2xhclBhcmFtcyA9IHtcclxuICB1bml0cyxcclxuICBvYmplY3Q6IHtcclxuICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgIG5hbWU6ICfQodC+0LvQvdGG0LUnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ce0L/QuNGB0LDQvdC40LUnLFxyXG4gICAgfSxcclxuICAgIHJhZGl1czogMTAwLFxyXG4gICAgcm90YXRpb25TcGVlZDogMTAwLFxyXG4gICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgfSxcclxuICBjb2xvcjogMHhmZmZmMDAsXHJcbiAgcG93ZXI6IDEwMDAwMCxcclxufTtcclxuXHJcbmNvbnN0IG1lcmN1cnlQYXJhbXMgPSB7XHJcbiAgdW5pdHMsXHJcbiAgb2JqZWN0OiB7XHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICBuYW1lOiAn0JzQtdGA0LrRg9GA0LjQuScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0J7Qv9C40YHQsNC90LjQtSDQnNC10YDQutGD0YDQuNC5JyxcclxuICAgIH0sXHJcbiAgICByYWRpdXM6IDMsXHJcbiAgICByb3RhdGlvblNwZWVkOiAwLjAwMzAyNTU1NTU1NixcclxuICAgIHJvdGF0aW9uRGlyZWN0aW9uOiAxLFxyXG4gIH0sXHJcbiAgb3JiaXQ6IHtcclxuICAgIHJhZGl1czogMjAwLFxyXG4gICAgcm90YXRpb25TcGVlZDogNDcuMzYsXHJcbiAgICByb3RhdGlvbkRpcmVjdGlvbjogMSxcclxuICAgIGFuZ2xlOiB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3B1dG5pazogW10sXHJcbn07XHJcbmNvbnN0IHZlbnVzUGFyYW1zID0ge1xyXG4gIHVuaXRzLFxyXG4gIG9iamVjdDoge1xyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgbmFtZTogJ9CS0LXQvdC10YDQsCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0J7Qv9C40YHQsNC90LjQtSDQktC10L3QtdGA0LAnLFxyXG4gICAgfSxcclxuICAgIHJhZGl1czogNixcclxuICAgIHJvdGF0aW9uU3BlZWQ6IDAuMDAxODExMTExMTExLFxyXG4gICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgfSxcclxuICBvcmJpdDoge1xyXG4gICAgcmFkaXVzOiAzMDAsXHJcbiAgICByb3RhdGlvblNwZWVkOiAzNS4wMixcclxuICAgIHJvdGF0aW9uRGlyZWN0aW9uOiAxLFxyXG4gICAgYW5nbGU6IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcHV0bmlrOiBbXSxcclxufTtcclxuY29uc3QgZWFydGhQYXJhbXMgPSB7XHJcbiAgdW5pdHMsXHJcbiAgb2JqZWN0OiB7XHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICBuYW1lOiAn0JfQtdC80LvRjycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAn0J7Qv9C40YHQsNC90LjQtSDQt9C10LzQu9GPJyxcclxuICAgIH0sXHJcbiAgICByYWRpdXM6IDE1LFxyXG4gICAgcm90YXRpb25TcGVlZDogMC40NjUxMTExMTExMTEsXHJcbiAgICByb3RhdGlvbkRpcmVjdGlvbjogMSxcclxuICB9LFxyXG4gIG9yYml0OiB7XHJcbiAgICByYWRpdXM6IDQwMCxcclxuICAgIHJvdGF0aW9uU3BlZWQ6IDI5Ljc4MyxcclxuICAgIHJvdGF0aW9uRGlyZWN0aW9uOiAxLFxyXG4gICAgYW5nbGU6IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcHV0bmlrOiBbXHJcbiAgICB7XHJcbiAgICAgIHVuaXRzLFxyXG4gICAgICBvYmplY3Q6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogJ9Cb0YPQvdCwJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J7Qv9C40YHQsNC90LjQtSDQu9GD0L3QsCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByYWRpdXM6IDMsXHJcbiAgICAgICAgcm90YXRpb25TcGVlZDogMC4wMTAyNzc3Nzc3NzgsXHJcbiAgICAgICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yYml0OiB7XHJcbiAgICAgICAgcmFkaXVzOiAyMCxcclxuICAgICAgICByb3RhdGlvblNwZWVkOiAzNjAsXHJcbiAgICAgICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgICAgICAgYW5nbGU6IHtcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbmNvbnN0IG1hcnNQYXJhbXMgPSB7XHJcbiAgdW5pdHMsXHJcbiAgb2JqZWN0OiB7XHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICBuYW1lOiAn0JzQsNGA0YEnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ce0L/QuNGB0LDQvdC40LUg0JzQsNGA0YEnLFxyXG4gICAgfSxcclxuICAgIHJhZGl1czogNixcclxuICAgIHJvdGF0aW9uU3BlZWQ6IDAuMjQxMTcyMjIyMjIyLFxyXG4gICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgfSxcclxuICBvcmJpdDoge1xyXG4gICAgcmFkaXVzOiA1MDAsXHJcbiAgICByb3RhdGlvblNwZWVkOiAyNC4xMyxcclxuICAgIHJvdGF0aW9uRGlyZWN0aW9uOiAxLFxyXG4gICAgYW5nbGU6IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzcHV0bmlrOiBbXHJcbiAgICB7XHJcbiAgICAgIHVuaXRzLFxyXG4gICAgICBvYmplY3Q6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogJ9Ck0L7QsdC+0YEnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICfQntC/0LjRgdCw0L3QuNC1INCk0L7QsdC+0YEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFkaXVzOiAyLFxyXG4gICAgICAgIHJvdGF0aW9uU3BlZWQ6IDIuMTQsIC8vINC90LUg0LLQtdGA0L3QvtC1INC30L3QsNGH0LXQvdC40LVcclxuICAgICAgICByb3RhdGlvbkRpcmVjdGlvbjogMSxcclxuICAgICAgfSxcclxuICAgICAgb3JiaXQ6IHtcclxuICAgICAgICByYWRpdXM6IDksXHJcbiAgICAgICAgcm90YXRpb25TcGVlZDogNDQwLFxyXG4gICAgICAgIHJvdGF0aW9uRGlyZWN0aW9uOiAxLFxyXG4gICAgICAgIGFuZ2xlOiB7XHJcbiAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgeTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzcHV0bmlrOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVuaXRzLFxyXG4gICAgICBvYmplY3Q6IHtcclxuICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgbmFtZTogJ9CU0LXQudC80L7RgScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ9Ce0L/QuNGB0LDQvdC40LUg0JTQtdC50LzQvtGBJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhZGl1czogMyxcclxuICAgICAgICByb3RhdGlvblNwZWVkOiAzLjk0LCAvLyDQvdC1INCy0LXRgNC90L7QtSDQt9C90LDRh9C10L3QuNC1XHJcbiAgICAgICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yYml0OiB7XHJcbiAgICAgICAgcmFkaXVzOiAxNSxcclxuICAgICAgICByb3RhdGlvblNwZWVkOiAzNzAsXHJcbiAgICAgICAgcm90YXRpb25EaXJlY3Rpb246IDEsXHJcbiAgICAgICAgYW5nbGU6IHtcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwdXRuaWs6IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3Qgc29sYXIgPSBuZXcgU29sYXIoc29sYXJQYXJhbXMpO1xyXG5zeXN0ZW0uYWRkT2JqZWN0KHNvbGFyKTtcclxuXHJcbnN5c3RlbS5hZGRPYmplY3QobmV3IFBsYW5ldChtZXJjdXJ5UGFyYW1zKSk7XHJcbnN5c3RlbS5hZGRPYmplY3QobmV3IFBsYW5ldCh2ZW51c1BhcmFtcykpO1xyXG5zeXN0ZW0uYWRkT2JqZWN0KG5ldyBQbGFuZXQoZWFydGhQYXJhbXMpKTtcclxuc3lzdGVtLmFkZE9iamVjdChuZXcgUGxhbmV0KG1hcnNQYXJhbXMpKTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5taW4uanMnO1xyXG5pbXBvcnQgU3BhY2VPYmplY3QgZnJvbSAnLi9zcGFjZS1vYmplY3QuanMnO1xyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogcmFkaXVzOiBudW1iZXIsXHJcbiAqIHJvdGF0aW9uU3BlZWQ6IG51bWJlcixcclxuICogcm90YXRpb25EaXJlY3Rpb246IC0xIHwgMSxcclxuICogYW5nbGU6IHtcclxuICogIHg6IG51bWJlcixcclxuICogIHk6IG51bWJlcixcclxuICogfSxcclxuICogfX0gT3JiaXRQYXJhbXNcclxuICogQHR5cGVkZWYge3tcclxuICogdW5pdHM6IENvZWZmUGFyYW0sXHJcbiAqIG9iamVjdDogU3BhY2VPYmplY3RQYXJhbXMsXHJcbiAqIG9yYml0OiBPcmJpdFBhcmFtcyxcclxuICogc3B1dG5pazogUGxhbmV0UGFyYW1zW10sXHJcbiAqIH19IFBsYW5ldFBhcmFtc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0IGV4dGVuZHMgU3BhY2VPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGxhbmV0UGFyYW1zfSBwbGFuZXRQYXJhbVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHBsYW5ldFBhcmFtKSB7XHJcbiAgICBzdXBlcihwbGFuZXRQYXJhbS5vYmplY3QsIHBsYW5ldFBhcmFtLnVuaXRzKTtcclxuICAgIHRoaXMub2JqZWN0UGFyYW0gPSBwbGFuZXRQYXJhbTtcclxuXHJcbiAgICB0aGlzLiNzZXRBeGlzKHBsYW5ldFBhcmFtKTtcclxuICAgIHRoaXMuc3BhY2VPYmplY3QgPSB0aGlzLiNjcmVhdGVQbGFuZXQocGxhbmV0UGFyYW0pO1xyXG5cclxuICAgIGlmIChwbGFuZXRQYXJhbS5zcHV0bmlrKSB7XHJcbiAgICAgIHBsYW5ldFBhcmFtLnNwdXRuaWsuZm9yRWFjaCgoc3B1dG5paykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldFNwdXRuaWsgPSBuZXcgUGxhbmV0KHNwdXRuaWspO1xyXG4gICAgICAgIHRoaXMucGxhbmV0LmFkZChwbGFuZXRTcHV0bmlrLmdldE9iamVjdCgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy4jYW5pbWF0ZSgpO1xyXG4gIH1cclxuICAjYW5pbWF0ZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLiNhbmltYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMucXVhdGVybmlvbi5zZXRGcm9tQXhpc0FuZ2xlKFxyXG4gICAgICB0aGlzLnN5c3RlbUF4aXMsXHJcbiAgICAgICh0aGlzLm9iamVjdFBhcmFtLm9yYml0LnJvdGF0aW9uU3BlZWQgKiB0aGlzLm9iamVjdFBhcmFtLm9yYml0LnJvdGF0aW9uRGlyZWN0aW9uKSAvIHRoaXMuY29lZmZQYXJhbS5zcGVlZENvZWZmXHJcbiAgICApO1xyXG4gICAgdGhpcy5wbGFuZXQucG9zaXRpb24uYXBwbHlRdWF0ZXJuaW9uKHRoaXMucXVhdGVybmlvbik7XHJcblxyXG4gICAgdGhpcy5wbGFuZXQucm90YXRpb24ueiArPVxyXG4gICAgICAodGhpcy5vYmplY3RQYXJhbS5vYmplY3Qucm90YXRpb25TcGVlZCAqIHRoaXMub2JqZWN0UGFyYW0ub2JqZWN0LnJvdGF0aW9uRGlyZWN0aW9uKSAvIHRoaXMuY29lZmZQYXJhbS5zcGVlZENvZWZmO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1BsYW5ldFBhcmFtc30gcGxhbmV0UGFyYW1cclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICAjc2V0QXhpcyhwbGFuZXRQYXJhbSkge1xyXG4gICAgdGhpcy5xdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcbiAgICBjb25zdCBheGlzWCA9IE1hdGguYWJzKHBsYW5ldFBhcmFtLm9yYml0LmFuZ2xlLngpO1xyXG4gICAgY29uc3QgYXhpc1kgPSBNYXRoLmFicyhwbGFuZXRQYXJhbS5vcmJpdC5hbmdsZS55KTtcclxuICAgIGxldCBheGlzWiA9IDkwO1xyXG4gICAgaWYgKGF4aXNYID09PSA0NSAmJiBheGlzWSA9PT0gNDUpIHtcclxuICAgICAgYXhpc1ogPSA0NTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9yYml0QXhpcyA9IG5ldyBUSFJFRS5WZWN0b3IzKGF4aXNYLCBheGlzWSwgYXhpc1opLm5vcm1hbGl6ZSgpO1xyXG4gICAgdGhpcy5zeXN0ZW1BeGlzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgOTApLm5vcm1hbGl6ZSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7UGxhbmV0UGFyYW1zfSBwbGFuZXRQYXJhbVxyXG4gICAqIEByZXR1cm5zIHtUSFJFRS5PYmplY3QzRH1cclxuICAgKi9cclxuICAjY3JlYXRlUGxhbmV0KHBsYW5ldFBhcmFtKSB7XHJcbiAgICBjb25zdCBwbGFuZXRTeXN0ZW0gPSBuZXcgVEhSRUUuT2JqZWN0M0QocGxhbmV0UGFyYW0ub2JqZWN0LmRlc2NyaXB0aW9uLm5hbWUpO1xyXG4gICAgcGxhbmV0U3lzdGVtLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcbiAgICBjb25zdCBjdXJ2ZSA9IG5ldyBUSFJFRS5FbGxpcHNlQ3VydmUoXHJcbiAgICAgIDAsXHJcbiAgICAgIDAsXHJcbiAgICAgIHBsYW5ldFBhcmFtLm9yYml0LnJhZGl1cyAvIHBsYW5ldFBhcmFtLnVuaXRzLmRpbWVuc2lvbkNvZWZmLFxyXG4gICAgICBwbGFuZXRQYXJhbS5vcmJpdC5yYWRpdXMgLyBwbGFuZXRQYXJhbS51bml0cy5kaW1lbnNpb25Db2VmZixcclxuICAgICAgMCxcclxuICAgICAgMiAqIE1hdGguUEksXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gICAgY29uc3QgcG9pbnRzID0gY3VydmUuZ2V0UG9pbnRzKDUwKTtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCkuc2V0RnJvbVBvaW50cyhwb2ludHMpO1xyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSk7XHJcbiAgICBjb25zdCBvcmJpdCA9IG5ldyBUSFJFRS5MaW5lKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG4gICAgdGhpcy5wbGFuZXQgPSB0aGlzLnNwYWNlT2JqZWN0O1xyXG4gICAgY29uc3QgcGxhbmV0WCA9IDA7XHJcbiAgICBjb25zdCBwbGFuZXRZID0gcGxhbmV0UGFyYW0ub3JiaXQucmFkaXVzIC8gcGxhbmV0UGFyYW0udW5pdHMuZGltZW5zaW9uQ29lZmY7XHJcbiAgICBjb25zdCBwbGFuZXRaID0gMDtcclxuICAgIHRoaXMucGxhbmV0LnBvc2l0aW9uLnNldChwbGFuZXRYLCBwbGFuZXRZLCBwbGFuZXRaKTtcclxuXHJcbiAgICBwbGFuZXRTeXN0ZW0uYWRkKG9yYml0KTtcclxuICAgIHBsYW5ldFN5c3RlbS5hZGQodGhpcy5wbGFuZXQpO1xyXG5cclxuICAgIHBsYW5ldFN5c3RlbS5sb29rQXQodGhpcy5vcmJpdEF4aXMpO1xyXG4gICAgcmV0dXJuIHBsYW5ldFN5c3RlbTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyc7XHJcbmltcG9ydCBTcGFjZU9iamVjdCBmcm9tICcuL3NwYWNlLW9iamVjdC5qcyc7XHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiB1bml0czogQ29lZmZQYXJhbSxcclxuICogb2JqZWN0OiBTcGFjZU9iamVjdFBhcmFtcyxcclxuICogY29sb3I6IHN0cmluZyxcclxuICogcG93ZXI6IG51bWJlcixcclxuICogfX0gU3RhclBhcmFtc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29sYXIgZXh0ZW5kcyBTcGFjZU9iamVjdCB7XHJcbiAgI3BvaW50TGlnaHQgPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3RhclBhcmFtc30gc3RhclBhcmFtXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Ioc3RhclBhcmFtKSB7XHJcbiAgICBzdXBlcihzdGFyUGFyYW0ub2JqZWN0LCBzdGFyUGFyYW0udW5pdHMpO1xyXG4gICAgdGhpcy5vYmplY3RQYXJhbSA9IHN0YXJQYXJhbTtcclxuXHJcbiAgICB0aGlzLnNwYWNlT2JqZWN0ID0gdGhpcy4jdXBkYXRlU3BhY2VPYmplY3Qoc3RhclBhcmFtKTtcclxuICAgIHRoaXMuI3BvaW50TGlnaHQgPSB0aGlzLiNjcmVhdGVMaWdodChzdGFyUGFyYW0pO1xyXG5cclxuICAgIHRoaXMuI2FuaW1hdGUoKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1RIUkVFLlBvaW50TGlnaHR9XHJcbiAgICovXHJcbiAgZ2V0TGlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcG9pbnRMaWdodDtcclxuICB9XHJcbiAgI2FuaW1hdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy4jYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLnNwYWNlT2JqZWN0LnJvdGF0aW9uLnogKz1cclxuICAgICAgKHRoaXMub2JqZWN0UGFyYW0ub2JqZWN0LnJvdGF0aW9uU3BlZWQgKiB0aGlzLm9iamVjdFBhcmFtLm9iamVjdC5yb3RhdGlvbkRpcmVjdGlvbikgLyB0aGlzLmNvZWZmUGFyYW0uc3BlZWRDb2VmZjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtTdGFyUGFyYW1zfSBzdGFyUGFyYW1cclxuICAgKi9cclxuICAjdXBkYXRlU3BhY2VPYmplY3Qoc3RhclBhcmFtKSB7XHJcbiAgICBjb25zdCB7IHNwYWNlT2JqZWN0IH0gPSB0aGlzO1xyXG5cclxuICAgIHNwYWNlT2JqZWN0Lm1hdGVyaWFsLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKHN0YXJQYXJhbS5jb2xvcik7XHJcblxyXG4gICAgcmV0dXJuIHNwYWNlT2JqZWN0O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcGFyYW0ge1N0YXJQYXJhbXN9IHN0YXJQYXJhbVxyXG4gICAqIEByZXR1cm5zIHtUSFJFRS5Qb2ludExpZ2h0fVxyXG4gICAqL1xyXG4gICNjcmVhdGVMaWdodChzdGFyUGFyYW0pIHtcclxuICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodChzdGFyUGFyYW0uY29sb3IsIDEsIDM2MCk7XHJcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICAgIHBvaW50TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICBwb2ludExpZ2h0LmludGVuc2l0eSA9IHN0YXJQYXJhbS5wb3dlcjtcclxuICAgIHJldHVybiBwb2ludExpZ2h0O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICcuLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzJztcclxuLy8gaW1wb3J0IGltZyBmcm9tICcuL2ltZy9jdWJlLnBuZyc7XHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiBzcGVlZENvZWZmOiBudW1iZXJcclxuICogZGltZW5zaW9uQ29lZmY6IG51bWJlclxyXG4gKiB9fSBDb2VmZlBhcmFtXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqIG5hbWU6IHN0cmluZyxcclxuICogZGVzY3JpcHRpb246IHN0cmluZyxcclxuICogfX0gRGVzY3JpcHRpb25cclxuICogQHR5cGVkZWYge3tcclxuICogZGVzY3JpcHRpb246IERlc2NyaXB0aW9uLFxyXG4gKiByYWRpdXM6IG51bWJlcixcclxuICogcm90YXRpb25TcGVlZDogbnVtYmVyLFxyXG4gKiByb3RhdGlvbkRpcmVjdGlvbjogLTEgfCAxLFxyXG4gKiBjb2xvcjogc3RyaW5nLFxyXG4gKiB9fSBTcGFjZU9iamVjdFBhcmFtc1xyXG4gKi9cclxuY29uc3QgZGVmYXVsdENvbG9yID0gMHhmZmZmZmY7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZU9iamVjdCB7XHJcbiAgc3BhY2VPYmplY3QgPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3BhY2VPYmplY3RQYXJhbXN9IGdlb21ldHJ5UGFyYW1cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihnZW9tZXRyeVBhcmFtLCBjb2VmZlBhcmFtKSB7XHJcbiAgICB0aGlzLm9iamVjdFBhcmFtID0gZ2VvbWV0cnlQYXJhbTtcclxuICAgIHRoaXMuY29lZmZQYXJhbSA9IGNvZWZmUGFyYW07XHJcblxyXG4gICAgdGhpcy5zcGFjZU9iamVjdCA9IHRoaXMuI2NyZWF0ZU9iamVjdChnZW9tZXRyeVBhcmFtLCBjb2VmZlBhcmFtKTtcclxuICB9XHJcbiAgZ2V0T2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BhY2VPYmplY3Q7XHJcbiAgfVxyXG4gIGFuaW1hdGUoKSB7fVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7U3BhY2VPYmplY3RQYXJhbXN9IGdlb21ldHJ5UGFyYW1cclxuICAgKiBAcGFyYW0ge0NvZWZmUGFyYW19IGNvZWZmUGFyYW1cclxuICAgKiBAcmV0dXJucyB7VEhSRUUuTWVzaH1cclxuICAgKi9cclxuICAjY3JlYXRlT2JqZWN0KGdlb21ldHJ5UGFyYW0sIGNvZWZmUGFyYW0pIHtcclxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KGdlb21ldHJ5UGFyYW0ucmFkaXVzIC8gY29lZmZQYXJhbS5kaW1lbnNpb25Db2VmZiwgMzIsIDMyKTtcclxuXHJcbiAgICAvLyBjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG4gICAgLy8gY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IG1hcDogbG9hZGVyLmxvYWQoaW1nKSB9KTtcclxuXHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHsgY29sb3I6IGRlZmF1bHRDb2xvciB9KTtcclxuXHJcbiAgICBjb25zdCBzcGFjZU9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICBzcGFjZU9iamVjdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHNwYWNlT2JqZWN0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgc3BhY2VPYmplY3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuICAgIHJldHVybiBzcGFjZU9iamVjdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyc7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0U3lzdGVtIHtcclxuICAjcmVuZGVyZXIgPSBudWxsO1xyXG4gICNzY2VuZSA9IG51bGw7XHJcbiAgI2NhbWVyYSA9IG51bGw7XHJcbiAgI2NvbnRyb2xzID0gbnVsbDtcclxuICAjcmF5Y2FzdGVyID0gbnVsbDtcclxuICAvKipcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgbmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuI3JlbmRlcmVyID0gdGhpcy4jY3JlYXRlU3lzdGVtKCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuI3JlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgdGhpcy4jYW5pbWF0ZSgpO1xyXG5cclxuICAgIHRoaXMuI3RlbXBMaWdodCgpO1xyXG4gIH1cclxuICBzaG93R3JpZCgpIHtcclxuICAgIGNvbnN0IGdyaWQgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigxMDAwLCAyMCwgMHhjMGMwYzAsIDB4YzBjMGMwKTtcclxuICAgIGdyaWQucm90YXRlWShNYXRoLlBJIC8gMik7XHJcbiAgICB0aGlzLiNzY2VuZS5hZGQoZ3JpZCk7XHJcbiAgfVxyXG4gIHNob3dBeGlzKCkge1xyXG4gICAgLy8g0J7RgdGMIFgg0LrRgNCw0YHQvdC+0LPQviDRhtCy0LXRgtCwLCDQvtGB0YwgWSAtINC30LXQu9C10L3QsNGPLCDQvtGB0YwgWiAtINGB0LjQvdGP0Y9cclxuICAgIGNvbnN0IGF4ZXMgPSBuZXcgVEhSRUUuQXhlc0hlbHBlcigxMDApO1xyXG4gICAgYXhlcy5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcbiAgICB0aGlzLiNzY2VuZS5hZGQoYXhlcyk7XHJcbiAgfVxyXG4gIHNob3dQbGFuZSgpIHtcclxuICAgIGNvbnN0IGdlb21ldHJ5MSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQwMCwgMjAwLCAxMDAsIDEwMCk7XHJcbiAgICBjb25zdCBtYXRlcmlhbDEgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IGNvbG9yOiAweDAwOGNmMCB9KTtcclxuICAgIC8vIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUSFJFRS5TaGFkb3dNYXRlcmlhbCh7IGNvbG9yOiAweDAwOGNmMCwgdHJhbnNwYXJlbnQ6IGZhbHNlIH0pO1xyXG4gICAgLy8gbWF0ZXJpYWwxLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAvLyBtYXRlcmlhbDEudHJhbnNwYXJlbnQgPSBmYWxzZTtcclxuICAgIGNvbnN0IHBsYW5lID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkxLCBtYXRlcmlhbDEpO1xyXG4gICAgcGxhbmUucG9zaXRpb24ueSA9IC04NTtcclxuICAgIHBsYW5lLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDI7XHJcbiAgICBwbGFuZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuI3NjZW5lLmFkZChwbGFuZSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7aW1wb3J0KCcuL3NwYWNlLW9iamVjdC5qcycpLmRlZmF1bHR9IHNwYWNlT2JqZWN0XHJcbiAgICovXHJcbiAgYWRkT2JqZWN0KHNwYWNlT2JqZWN0KSB7XHJcbiAgICB0aGlzLiNzY2VuZS5hZGQoc3BhY2VPYmplY3QuZ2V0T2JqZWN0KCkpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7VEhSRUUuV2ViR0xSZW5kZXJlcn1cclxuICAgKi9cclxuICAjY3JlYXRlU3lzdGVtKCkge1xyXG4gICAgLy8gY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFscGhhOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgLy8gcmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNjbGlja0hhbmRsZXIuYmluZCh0aGlzKSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy4jc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIHRoaXMuI3NjZW5lLmJhY2tncm91bmQgPSBuZXcgVEhSRUUuQ29sb3IoMHhkY2RjZGMpO1xyXG5cclxuICAgIHRoaXMuI2NhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMDAwKTtcclxuICAgIHRoaXMuI2NhbWVyYS5wb3NpdGlvbi56ID0gNjAwO1xyXG4gICAgdGhpcy4jY2FtZXJhLnBvc2l0aW9uLnkgPSAtMTIwMDtcclxuICAgIHRoaXMuI2NhbWVyYS5wb3NpdGlvbi54ID0gMDtcclxuXHJcbiAgICB0aGlzLiNjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuI2NhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICB0aGlzLiNyYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xyXG4gIH1cclxuICAjY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgY29uc3QgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdGhpcy4jcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIHRoaXMuI2NhbWVyYSk7XHJcbiAgICBjb25zdCBpbnRlcnNlY3RzID0gdGhpcy4jcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy4jc2NlbmUuY2hpbGRyZW4sIHRydWUpO1xyXG4gICAgaWYgKGludGVyc2VjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGludGVyc2VjdHNbMF07XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT2JqZWN0KTtcclxuICAgIH1cclxuICB9XHJcbiAgI2FuaW1hdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy4jYW5pbWF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLiNjb250cm9scy51cGRhdGUoKTtcclxuICAgIHRoaXMuI3JlbmRlcmVyLnJlbmRlcih0aGlzLiNzY2VuZSwgdGhpcy4jY2FtZXJhKTtcclxuICB9XHJcbiAgI3RlbXBMaWdodCgpIHtcclxuICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZiwgMSwgNTAwKTtcclxuICAgIHBvaW50TGlnaHQucG9zaXRpb24uc2V0KDAsIDAsIDQwMCk7XHJcbiAgICBwb2ludExpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgcG9pbnRMaWdodC5pbnRlbnNpdHkgPSA3NTAwMDA7XHJcblxyXG4gICAgdGhpcy4jc2NlbmUuYWRkKHBvaW50TGlnaHQpO1xyXG5cclxuICAgIGNvbnN0IHNwaGVyZVNpemUgPSAzO1xyXG4gICAgY29uc3QgcG9pbnRMaWdodEhlbHBlciA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0SGVscGVyKHBvaW50TGlnaHQsIHNwaGVyZVNpemUpO1xyXG4gICAgdGhpcy4jc2NlbmUuYWRkKHBvaW50TGlnaHRIZWxwZXIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aHJlZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0aHJlZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY29tbW9uXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=