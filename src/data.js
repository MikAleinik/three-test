const speedCoeff = 10000;
const dimensionCoeff = 10000;

const units = {
  speedCoeff,
  dimensionCoeff,
};
const solarParams = {
  units,
  object: {
    description: {
      name: 'Солнце',
      description: 'Описание',
    },
    radius: 696340,
    rotationSpeed: 2,
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
    radius: 2439.7,
    rotationSpeed: 0.003025555556,
    rotationDirection: 1,
  },
  orbit: {
    radius: 46001009,
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
    radius: 6051.8,
    rotationSpeed: 0.001811111111,
    rotationDirection: 1,
  },
  orbit: {
    radius: 107476259,
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
    radius: 63780.1,
    rotationSpeed: 0.465111111111,
    rotationDirection: 1,
  },
  orbit: {
    radius: 147098290,
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
        radius: 17380.14,
        rotationSpeed: 0.010277777778,
        rotationDirection: 1,
      },
      orbit: {
        radius: 363104,
        rotationSpeed: 1.023,
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
    radius: 3389.5,
    rotationSpeed: 0.241172222222,
    rotationDirection: 1,
  },
  orbit: {
    radius: 2.06655 * 10 ** 8,
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
        radius: 11.1,
        rotationSpeed: 2.14, // не верное значение
        rotationDirection: 1,
      },
      orbit: {
        radius: 9377.2,
        rotationSpeed: 2.14, // приблизительно
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
        radius: 16,
        rotationSpeed: 3.94, // не верное значение
        rotationDirection: 1,
      },
      orbit: {
        radius: 23458,
        rotationSpeed: 3.94, // не верное значение
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
// const venusParams = {
//   units,
//   object: {
//     description: {
//       name: 'Венера',
//       description: 'Описание Венера',
//     },
//     radius: ,
//     rotationSpeed: ,
//     rotationDirection: 1,
//   },
//   orbit: {
//     radius: {
//       perigely: ,
//       afely: ,
//     },
//     rotationSpeed: ,
//     rotationDirection: 1,
//     angle: {
//       x: 0,
//       y: 0,
//     },
//   },
//   sputnik: [],
// };
