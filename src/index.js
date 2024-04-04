/* eslint-disable no-unused-vars */
import Solar from './solar.js';
import PlanetSystem from './system.js';

const system = new PlanetSystem(document.body, 'Солнечная система');
system.showGrid();

const solarParams = {
  description: {
    name: 'Солнце',
    description: 'Описание',
  },
  radius: 20,
  rotationSpeed: 5,
  rotationDirectionOnClock: true,
  color: 0xffff00,
  power: 100000,
};
const solar = new Solar(solarParams);
system.addObject(solar.getObject());
system.addObject(solar.getLight());
