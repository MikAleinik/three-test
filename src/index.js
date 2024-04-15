/* eslint-disable no-unused-vars */
import Planet from './planet.js';
import Solar from './solar.js';
import PlanetSystem from './system.js';

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

const system = new PlanetSystem(document.body, 'Солнечная система');

const solarParams = {
  units,
  object: {
    description: {
      name: 'Солнце',
      description: 'Описание',
    },
    radius: 100,
    rotationSpeed: 5,
    rotationDirection: 1,
    // color: 0xffff00,
    texture: './img/sun2.jpg',
  },
  power: 100000 * 50,
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
    texture: './img/mercury.jpg',
    textureBump: './img/mercury-bump.jpg',
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
    texture: './img/venus.jpg',
    textureBump: './img/venus-bump.jpg',
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
    rotationSpeed: 50,
    rotationDirection: 1,
    texture: './img/earth.jpg',
    textureBump: './img/earth-bump.jpg',
    textureSpec: './img/earth-spec.jpg',
    textureCloud: './img/earth-cloud.jpg',
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
        texture: './img/moon.jpg',
        textureBump: './img/moon-bump.jpg',
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
    texture: './img/mars.jpg',
    textureBump: './img/mars-bump.jpg',
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
        texture: './img/phobos.jpg',
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
        texture: './img/deimos.jpg',
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

const solar = new Solar(solarParams);
system.addSolar(solar);

system.addPlanet(new Planet(mercuryParams));
system.addPlanet(new Planet(venusParams));
system.addPlanet(new Planet(earthParams));
system.addPlanet(new Planet(marsParams));

setTimeout(() => {
  system.toggleOrbit();
}, 100);
