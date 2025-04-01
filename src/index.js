/* eslint-disable no-unused-vars */
import './css/main.css';
import Planet from './space-object/planet.js';
import Solar from './space-object/solar.js';
import PlanetSystem from './space-object/system.js';
import { solarSystem } from './space-object/planet-data.js';
import AsteroidBelt from './space-object/asteroid-belt.js';

const solarElement = document.createElement('div');
solarElement.classList.add('solar-system');

const system = new PlanetSystem(solarElement, 'Солнечная система');
const solar = new Solar(solarSystem.star);
system.addSolar(solar);
solarSystem.planet.forEach((planet) => system.addPlanet(new Planet(planet)));
const asteroidBelt = new AsteroidBelt(solarSystem.asteroidBelt);
system.addAsteroidBelt(asteroidBelt);

const mainElement = document.getElementById('main');
mainElement.append(solarElement);

const orbitCheckbox = document.getElementById('orbitCheckbox');
orbitCheckbox.addEventListener('change', () => {
  system.toggleOrbit();
});

const gridCheckbox = document.getElementById('gridCheckbox');
gridCheckbox.addEventListener('change', () => {
  system.toggleGrid();
});

const axisCheckbox = document.getElementById('axisCheckbox');
axisCheckbox.addEventListener('change', () => {
  system.toggleAxis();
});

const preloader = document.getElementById('preloader');
preloader.style.display = 'none';
