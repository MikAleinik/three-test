// Скорость вращения по орбите в км/с
// Скорость вращения по оси в км/с
// Радиус орбиты в км
// Радиус объектов в км

/**
 * @type {import('./space-object').CoeffParam}
 */
const solarUnits = {
  objectSpeedCoeff: 250,
  objectDimensionCoeff: 2500,
  orbitSpeedCoeff: 1,
  orbitDimensionCoeff: 1,
};
/**
 * @type {import('./solar').StarParams}
 */
const solarParams = {
  units: solarUnits,
  object: {
    description: {
      name: 'Солнце',
      description: 'Описание',
    },
    radius: 1392000 / 2,
    rotationSpeed: 0.1,
    rotationDirection: 1,
    texture: './img/sun2.jpg',
  },
  power: 100000 * 5000,
};

/**
 * @type {import('./space-object').CoeffParam}
 */
const planetUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 1500,
  orbitSpeedCoeff: 100000,
  orbitDimensionCoeff: 100000,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const miniPlanetUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 500,
  orbitSpeedCoeff: 100000,
  orbitDimensionCoeff: 100000,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const earthSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 1500,
  orbitSpeedCoeff: 100,
  orbitDimensionCoeff: 10000,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const marsSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 50,
  orbitSpeedCoeff: 100,
  orbitDimensionCoeff: 1000,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const upiterSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 250,
  orbitSpeedCoeff: 1000,
  orbitDimensionCoeff: 700,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const saturnSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 250,
  orbitSpeedCoeff: 1000,
  orbitDimensionCoeff: 700,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const uranusSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 250,
  orbitSpeedCoeff: 1000,
  orbitDimensionCoeff: 700,
};
/**
 * @type {import('./space-object').CoeffParam}
 */
const neptunSputnikUnits = {
  objectSpeedCoeff: 10,
  objectDimensionCoeff: 250,
  orbitSpeedCoeff: 1000,
  orbitDimensionCoeff: 700,
};
const mercuryParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Меркурий',
      description: 'Описание Меркурий',
    },
    radius: 2439.7,
    rotationSpeed: 0.003025555556,
    rotationDirection: 1,
    angle: {
      x: 2.11,
      y: 0,
    },
    texture: './img/mercury.jpg',
    textureBump: './img/mercury-bump.jpg',
  },
  orbit: {
    radius: 46001009,
    rotationSpeed: 47.36,
    rotationDirection: 1,
    angle: {
      x: 7.01,
      y: 0,
    },
  },
  sputnik: [],
};
const venusParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Венера',
      description: 'Описание Венера',
    },
    radius: 6051.8,
    rotationSpeed: 0.001811111111,
    rotationDirection: 1,
    angle: {
      x: 2.24,
      y: 0,
    },
    texture: './img/venus.jpg',
    textureBump: './img/venus-bump.jpg',
  },
  orbit: {
    radius: 107476259,
    rotationSpeed: 35.02,
    rotationDirection: 1,
    angle: {
      x: 3.39,
      y: 0,
    },
  },
  sputnik: [],
};
const earthParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Земля',
      description: 'Описание земля',
    },
    radius: 6378.1,
    rotationSpeed: 0.465111111111,
    rotationDirection: 1,
    angle: {
      x: 23.26,
      y: 0,
    },
    texture: './img/earth.jpg',
    textureBump: './img/earth-bump.jpg',
    textureSpec: './img/earth-spec.jpg',
    textureCloud: './img/earth-cloud.jpg',
  },
  orbit: {
    radius: 147098290,
    rotationSpeed: 29.783,
    rotationDirection: 1,
    angle: {
      x: 0.1,
      y: 0,
    },
  },
  sputnik: [
    {
      units: earthSputnikUnits,
      object: {
        description: {
          name: 'Луна',
          description: 'Описание луна',
        },
        radius: 1738.14,
        rotationSpeed: 0.010277777778,
        rotationDirection: 1,
        angle: {
          x: 6.05,
          y: 0,
        },
        texture: './img/moon.jpg',
        textureBump: './img/moon-bump.jpg',
      },
      orbit: {
        radius: 363104,
        rotationSpeed: 1.023,
        rotationDirection: 1,
        angle: {
          x: 0,
          y: 7,
        },
      },
      sputnik: [],
    },
  ],
};
const marsParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Марс',
      description: 'Описание Марс',
    },
    radius: 3389.5,
    rotationSpeed: 0.241172222222,
    rotationDirection: -1,
    angle: {
      x: 25.19,
      y: 0,
    },
    texture: './img/mars.jpg',
    textureBump: './img/mars-bump.jpg',
  },
  orbit: {
    radius: 2.06655 * 10 ** 8,
    rotationSpeed: 24.13,
    rotationDirection: 1,
    angle: {
      x: 1.85,
      y: 0,
    },
  },
  sputnik: [
    {
      units: marsSputnikUnits,
      object: {
        description: {
          name: 'Фобос',
          description: 'Описание Фобос',
        },
        radius: 11.1,
        rotationSpeed: 2.14, // не верное значение
        rotationDirection: 1,
        texture: './img/phobos.jpg',
      },
      orbit: {
        radius: 9377.2,
        rotationSpeed: 2.14, // приблизительно
        rotationDirection: 1,
        angle: {
          x: 25.19 + 1.09,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: marsSputnikUnits,
      object: {
        description: {
          name: 'Деймос',
          description: 'Описание Деймос',
        },
        radius: 16,
        rotationSpeed: 3.94, // не верное значение
        rotationDirection: 1,
        texture: './img/deimos.jpg',
      },
      orbit: {
        radius: 23458,
        rotationSpeed: 3.94, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 25.19 + 1.79,
          y: 0,
        },
      },
      sputnik: [],
    },
  ],
};
const cereraParams = {
  units: miniPlanetUnits,
  object: {
    description: {
      name: 'Церера',
      description: 'Описание Церера',
    },
    radius: 463.5,
    rotationSpeed: 0.001811111111,
    rotationDirection: 1,
    texture: './img/ceres.jpg',
  },
  orbit: {
    radius: 381028000,
    rotationSpeed: 17.882,
    rotationDirection: 1,
    angle: {
      x: 10.585,
      y: 0,
    },
  },
  sputnik: [],
};
const jupiterParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Юпитер',
      description: 'Описание Юпитер',
    },
    radius: 139822 / 2,
    rotationSpeed: 1.26,
    rotationDirection: -1,
    angle: {
      x: 3.13,
      y: 0,
    },
    texture: './img/jupiter.jpg',
  },
  orbit: {
    radius: 7.405736 * 10 ** 8,
    rotationSpeed: 13.07,
    rotationDirection: 1,
    angle: {
      x: 1.31,
      y: 0,
    },
  },
  sputnik: [
    {
      units: upiterSputnikUnits,
      object: {
        description: {
          name: 'Ио',
          description: 'Описание Ио',
        },
        radius: 3643 / 2,
        rotationSpeed: 0.0752778,
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 421700 / 2,
        rotationSpeed: 17.34,
        rotationDirection: 1,
        angle: {
          x: 3.13 + 2.21,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: upiterSputnikUnits,
      object: {
        description: {
          name: 'Европа',
          description: 'Описание Европа',
        },
        radius: 3122 / 2,
        rotationSpeed: 0.0352778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 671034 / 2,
        rotationSpeed: 13.74,
        rotationDirection: 1,
        angle: {
          x: 3.13 + 1.79,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: upiterSputnikUnits,
      object: {
        description: {
          name: 'Ганимед',
          description: 'Описание Ганимед',
        },
        radius: 5262 / 2,
        rotationSpeed: 0.0452778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 1070412 / 2,
        rotationSpeed: 10.88,
        rotationDirection: 1,
        angle: {
          x: 3.13 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: upiterSputnikUnits,
      object: {
        description: {
          name: 'Каллисто',
          description: 'Описание Каллисто',
        },
        radius: 4821 / 2,
        rotationSpeed: 0.0952778, // не верное значение
        rotationDirection: 1,
        texture: './img/kallisto.jpg',
      },
      orbit: {
        radius: 1882709 / 2,
        rotationSpeed: 8.24,
        rotationDirection: 1,
        angle: {
          x: 3.13 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
  ],
};
const saturnParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Сатурн',
      description: 'Описание Сатурн',
    },
    radius: 116464 / 2,
    rotationSpeed: 0.087,
    rotationDirection: 1,
    angle: {
      x: 26.73,
      y: 0,
    },
    texture: './img/saturn.jpg',
  },
  orbit: {
    radius: 1353572956,
    rotationSpeed: 9.69,
    rotationDirection: 1,
    angle: {
      x: 2.49,
      y: 0,
    },
  },
  ring: {
    radiusMin: 67000,
    radiusMax: 150000,
    width: 100,
    rotationSpeed: 10,
    rotationDirection: 1,
    angle: {
      x: 26.73 * 2,
      y: 0,
    },
    texture: './img/saturn-ring.jpg',
    // color: 0xff0000,
  },
  sputnik: [
    {
      units: saturnSputnikUnits,
      object: {
        description: {
          name: 'Тефия',
          description: 'Описание Тефия',
        },
        radius: 1060 / 2,
        rotationSpeed: 0.0752778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 294672,
        rotationSpeed: 8.34, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 26.73 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: saturnSputnikUnits,
      object: {
        description: {
          name: 'Диона',
          description: 'Описание Диона',
        },
        radius: 1118 / 2,
        rotationSpeed: 0.0652778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 377415,
        rotationSpeed: 6.34, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 26.73 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: saturnSputnikUnits,
      object: {
        description: {
          name: 'Рея',
          description: 'Описание Рея',
        },
        radius: 1528 / 2,
        rotationSpeed: 0.0552778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 527068,
        rotationSpeed: 5.34, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 26.73 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: saturnSputnikUnits,
      object: {
        description: {
          name: 'Титан',
          description: 'Описание Титан',
        },
        radius: 5150 / 2,
        rotationSpeed: 0.0452778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 1221865,
        rotationSpeed: 4.34, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 26.73 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
  ],
};
const uranusParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Уран',
      description: 'Описание Уран',
    },
    radius: 50724 / 2,
    rotationSpeed: 0.059,
    rotationDirection: 1,
    angle: {
      x: 7.77,
      y: 0,
    },
    texture: './img/uranus.jpg',
  },
  orbit: {
    radius: 2748938461,
    rotationSpeed: 5.4349,
    rotationDirection: 1,
    angle: {
      x: 0.77,
      y: 0,
    },
  },
  sputnik: [
    {
      units: uranusSputnikUnits,
      object: {
        description: {
          name: 'Миранда',
          description: 'Описание Миранда',
        },
        radius: 235,
        rotationSpeed: 0.0752778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 129900,
        rotationSpeed: 6.6852,
        rotationDirection: 1,
        angle: {
          x: 7.77 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: uranusSputnikUnits,
      object: {
        description: {
          name: 'Ариэль',
          description: 'Описание Ариэль',
        },
        radius: 578,
        rotationSpeed: 0.0652778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 191020,
        rotationSpeed: 5.51,
        rotationDirection: 1,
        angle: {
          x: 7.77 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: uranusSputnikUnits,
      object: {
        description: {
          name: 'Умбриэль',
          description: 'Описание Умбриэль',
        },
        radius: 584,
        rotationSpeed: 0.0652778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 266000,
        rotationSpeed: 3.51, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 7.77 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: uranusSputnikUnits,
      object: {
        description: {
          name: 'Титания',
          description: 'Описание Титания',
        },
        radius: 788,
        rotationSpeed: 0.0752778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 436300,
        rotationSpeed: 2.51, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 7.77 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
    {
      units: uranusSputnikUnits,
      object: {
        description: {
          name: 'Оберон',
          description: 'Описание Оберон',
        },
        radius: 761,
        rotationSpeed: 0.0952778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 583520,
        rotationSpeed: 3.51, // не верное значение
        rotationDirection: 1,
        angle: {
          x: 7.77 + 0,
          y: 0,
        },
      },
      sputnik: [],
    },
  ],
};
const neptunParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Нептун',
      description: 'Описание Нептун',
    },
    radius: 49244 / 2,
    rotationSpeed: 0.268,
    rotationDirection: -1,
    angle: {
      x: 28.32,
      y: 0,
    },
    texture: './img/neptune.jpg',
  },
  orbit: {
    radius: 4452940833,
    rotationSpeed: 5.4349,
    rotationDirection: 1,
    angle: {
      x: 1.77,
      y: 0,
    },
  },
  sputnik: [
    {
      units: neptunSputnikUnits,
      object: {
        description: {
          name: 'Тритон',
          description: 'Описание Тритон',
        },
        radius: 2707 / 2,
        rotationSpeed: 0.0452778, // не верное значение
        rotationDirection: 1,
        texture: './img/asteroid.jpg',
      },
      orbit: {
        radius: 354800,
        rotationSpeed: 10.51, // не верное значение
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
const plutoParams = {
  units: planetUnits,
  object: {
    description: {
      name: 'Плутон',
      description: 'Описание Плутон',
    },
    radius: 1188,
    rotationSpeed: 48.7,
    rotationDirection: 1,
    texture: './img/pluto.jpg',
  },
  orbit: {
    radius: 29.667 * 200000000,
    rotationSpeed: 4.6691,
    rotationDirection: 1,
    angle: {
      x: 0,
      y: 0,
    },
  },
  sputnik: [],
};

const solarSystem = {
  star: solarParams,
  planet: [
    mercuryParams,
    venusParams,
    earthParams,
    marsParams,
    cereraParams,
    jupiterParams,
    saturnParams,
    uranusParams,
    neptunParams,
    plutoParams,
  ],
  asteroidBelt: {
    minOrbit: (marsParams.orbit.radius / planetUnits.orbitDimensionCoeff) * 1.5,
    maxOrbit: cereraParams.orbit.radius / planetUnits.orbitDimensionCoeff,
    height: marsParams.orbit.radius / planetUnits.orbitDimensionCoeff / 8,
    countAsteroids: 360 * 20,
  },
  asteroid: [],
};

export { solarSystem, planetUnits, miniPlanetUnits, solarUnits, earthSputnikUnits, marsSputnikUnits };
