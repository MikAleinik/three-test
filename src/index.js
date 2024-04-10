/* eslint-disable no-unused-vars */
import Planet from './planet.js';
import Solar from './solar.js';
import PlanetSystem from './system.js';

const system = new PlanetSystem(document.body, 'Солнечная система');
system.showGrid();

const solarParams = {
  object: {
    description: {
      name: 'Солнце',
      description: 'Описание',
    },
    radius: 20,
    rotationSpeed: 5,
    rotationDirectionOnClock: true,
  },
  color: 0xffff00,
  power: 100000,
};
const solar = new Solar(solarParams);
system.addObject(solar);

const earthParams = {
  object: {
    description: {
      name: 'Земля',
      description: 'Описание земля',
    },
    radius: 5,
    rotationSpeed: 5,
    rotationDirection: 1,
  },
  orbit: {
    radius: 50,
    rotationSpeed: 0.01,
    rotationDirection: 1,
    angle: [0, 0, 0],
  },
  sputnik: [
    {
      object: {
        description: {
          name: 'Луна',
          description: 'Описание луна',
        },
        radius: 2,
        rotationSpeed: 5,
        rotationDirection: -1,
      },
      orbit: {
        radius: 10,
        rotationSpeed: 1,
        rotationDirection: -1,
      },
    },
  ],
};
const earth = new Planet(earthParams);
system.addObject(earth);
