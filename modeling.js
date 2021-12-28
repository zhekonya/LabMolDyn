const DEBUG = true;

function customLog(message) {
  if (DEBUG) {
    console.log(message);
  }
}

let distance = new Array();
let xdistance = new Array();
let ydistance = new Array();
let xphi = new Array();
let yphi = new Array();
let xacceleration = new Array();
let yacceleration = new Array();
let xaccelerationsum = new Array();
let yaccelerationsum = new Array();
let force = new Array();
let sum_force = new Array();
let potential = new Array();
let t;
const dt = 0.016;
let i, j;
let epsilon, sigma, nu, mass, distance_cut, lenght;
let temperature;
let energy;
const NA = 6.02214076 * 10 ** 23;
const Kb = 1.380649 * 10 ** -23;
const J = 1.6 * 10 ** -19;

let coordinates = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let speed = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

const Ne = {
  mass: 20.18,
  epsilon: 0.0031,
  sigma: 2.74,
};

const Ar = {
  mass: 39.95,
  epsilon: 0.0104,
  sigma: 3.4,
};

const Kr = {
  mass: 83.8,
  epsilon: 0.014,
  sigma: 3.65,
};

const Xe = {
  mass: 131.29,
  epsilon: 0.02,
  sigma: 3.98,
};

const substance = {
  Ne: Ne,
  Ar: Ar,
  Kr: Kr,
  Xe: Xe,
};

function initializeSettings() {
  const substance = document.querySelector("#substance").value;
  const amount = Number(document.querySelector("#amount").value);
  const grind_size = Number(document.querySelector("#grind_size").value);

  // TODO считать остальные параметры и заполнить константы
  const settings = {
    substance: substance,
    amount: amount,
    grind_size: grind_size,
  };
  customLog(settings);
  return settings;
}

const settings = initializeSettings();

const substanceName = document.querySelector("#substance").value;

const substanceParam = substance[substanceName];

customLog(settings.grind_size);
const scale = settings.grind_size / 1000;
/*var stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // add canvas element
  var layer = new Konva.Layer();
  stage.add(layer);


  // create shape
  var box = new Konva.Rect({
    x: 50,
    y: 50,
    width: 100,
    height: 50,
    fill: '#00D2FF',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
  layer.add(box);


  var amplitude = 100;
  var period = 2000;
  // in ms
  var centerX = stage.width() / 2;

  var anim = new Konva.Animation(function (frame) {
    box.x(
      amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
    );
  }, layer);

  anim.start();


// first we need to create a stage
var stage = new Konva.Stage({
    container: 'container',   // id of container <div>
    width: 1000,
    height: 1000,
  });
  
  // then create layer
  var layer = new Konva.Layer();
  
  // create our shape
  var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 1000/scale,
    fill: 'blue',
  });
  
  // add the shape to the layer
  layer.add(circle);
  
  // add the layer to the stage
  stage.add(layer);
  
  // draw the image
  layer.draw();
*/

nu = settings.amount / NA;

let min = 0;
let max = settings.grind_size;

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

for (i = 0; i < settings.amount; i++) {
  coordinates.x_new[i] = getRandomFloat(min, max);
  coordinates.y_new[i] = getRandomFloat(min, max);
  speed.x_new[i] = 0;
  speed.y_new[i] = 0;
}

customLog("x = ", coordinates.x_new);
customLog("y = ", coordinates.y_new);
customLog("Vx = ", speed.x_new);
customLog("Vy = ", speed.y_new);

//функция расчета расстояния
function DistCulc(x, y) {
  for (i = 0; i < settings.amount; i++) {
    distance[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      distance[i][j] = Math.sqrt((x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2);
    }
  }

  return distance;
}

//функция расчета потенциала
function PotCulc(x) {
  for (i = 0; i < settings.amount; i++) {
    potential[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      potential[i][j] =
        4 *
        substanceParam.epsilon *
        J *
        ((substanceParam.sigma / x[i][j]) ** 12 -
          (substanceParam.sigma / x[i][j]) ** 6);
      if (i == j) {
        potential[i][j] = 0;
      }
    }
  }

  return potential;
}

//функция расчета силы
function ForceCulc(x) {
  for (i = 0; i < settings.amount; i++) {
    force[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      force[i][j] =
        (24 / substanceParam.sigma) *
        substanceParam.epsilon *
        J *
        ((substanceParam.sigma / x[i][j]) ** 13 -
          (substanceParam.sigma / x[i][j]) ** 7);
      if (i == j) {
        force[i][j] = 0;
      }
    }
  }

  return force;
}

//функция расчета ускорения
function AccCulc(x) {
  for (i = 0; i < settings.amount; i++) {
    acceleration.tot[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      acceleration.tot[i][j] = x[i][j] / (substanceParam.mass * nu);
    }
  }

  return acceleration.tot;
}
//ydistance
function yDistCulc(y) {
  for (i = 0; i < settings.amount; i++) {
    ydistance[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      ydistance[i][j] = y[i] - y[j];
    }
  }

  return ydistance;
}

function xDistCulc(x) {
  for (i = 0; i < settings.amount; i++) {
    xdistance[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      xdistance[i][j] = x[i] - x[j];
    }
  }

  return xdistance;
}

//функция расчета угла x-distance, y - ydistance
function yAnglCulc(x, y) {
  for (i = 0; i < settings.amount; i++) {
    yphi[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      if (i == j) {
        yphi[i][j] = 0;
      } else {
        yphi[i][j] = Math.acos(y[i][j] / x[i][j]);
      }
    }
  }

  return yphi;
}

function xAnglCulc(x, y) {
  for (i = 0; i < settings.amount; i++) {
    xphi[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      if (i == j) {
        xphi[i][j] = 0;
      } else {
        xphi[i][j] = Math.acos(y[i][j] / x[i][j]);
      }
    }
  }

  return xphi;
}

function xAccCulc(x, y) {
  for (i = 0; i < settings.amount; i++) {
    xacceleration[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      xacceleration[i][j] = Math.cos(x[i][j]) * y[i][j];
    }
  }

  return xacceleration;
}

function yAccCulc(x, y) {
  for (i = 0; i < settings.amount; i++) {
    yacceleration[i] = new Array();
    for (j = 0; j < settings.amount; j++) {
      yacceleration[i][j] = Math.cos(x[i][j]) * y[i][j];
    }
  }

  return yacceleration;
}

function xAccCulcSum(x) {
  let sum;
  for (i = 0; i < settings.amount; i++) {
    sum = 0;
    for (j = 0; j < settings.amount; j++) {
      sum += x[i][j];
    }
    acceleration.x_new[i] = sum;
  }

  return acceleration.x_new;
}

function yAccCulcSum(y) {
  let sum;
  for (i = 0; i < settings.amount; i++) {
    sum = 0;
    for (j = 0; j < settings.amount; j++) {
      sum += y[i][j];
    }
    acceleration.y_new[i] = sum;
  }

  return acceleration.y_new;
}

function Temperature(x, y) {
  energy = 0;
  for (i = 0; i < settings.amount; i++) {
    energy +=
      (substanceParam.mass * nu * (x[i] ** 2 + y[i] ** 2) * 10 ** -20) / 2;
  }

  temperature = (2 * energy) / (3 * Kb * settings.amount);
  return temperature;
}

temperature = Temperature(speed.x_new, speed.y_new);
customLog("Temperature = ", temperature);
distance = DistCulc(coordinates.x_new, coordinates.y_new);
customLog("Distance = ", distance);

xdistance = xDistCulc(coordinates.x_new);
customLog("xDistance = ", xdistance);
ydistance = yDistCulc(coordinates.y_new);
customLog("yDistance = ", ydistance);

potential = PotCulc(distance);
customLog("Potential = ", potential);
force = ForceCulc(distance);
customLog("Force = ", force);

yphi = yAnglCulc(distance, ydistance);
customLog("yPhi = ", yphi);
xphi = xAnglCulc(distance, xdistance);
customLog("xPhi = ", xphi);

acceleration.tot = AccCulc(force);
customLog("Acceleration = ", acceleration.tot);
xacceleration = xAccCulc(xphi, acceleration.tot);
customLog("xAcceleration = ", xacceleration);
yacceleration = yAccCulc(yphi, acceleration.tot);
customLog("yAcceleration = ", yacceleration);

acceleration.x_new = xAccCulcSum(xacceleration);
customLog("xAccelerationsum = ", acceleration.x_new);
acceleration.y_new = yAccCulcSum(yacceleration);
customLog("yAccelerationsum = ", acceleration.y_new);

//цикл основного расчета

//for (i=0; i<10; i++) {
coordinates.x_old = coordinates.x_new;
coordinates.y_old = coordinates.y_new;
speed.x_old = speed.x_new;
speed.y_old = speed.y_new;
acceleration.x_old = acceleration.x_new;
acceleration.y_old = acceleration.y_new;

for (i = 0; i < settings.amount; i++) {
  coordinates.x_new[i] =
    coordinates.x_old[i] +
    speed.x_old[i] * dt +
    acceleration.x_old[i] * dt ** 2;
  coordinates.y_new[i] =
    coordinates.y_old[i] +
    speed.y_old[i] * dt +
    acceleration.y_old[i] * dt ** 2;

  if (coordinates.x_new[i] > settings.grind_size) {
    coordinates.x_new[i] = coordinates.x_new[i] - settings.grind_size;
  }
  if (coordinates.x_new[i] < settings.grind_size) {
    coordinates.x_new[i] = coordinates.x_new[i] + settings.grind_size;
  }
  if (coordinates.y_new[i] > settings.grind_size) {
    coordinates.y_new[i] = coordinates.y_new[i] - settings.grind_size;
  }
  if (coordinates.y_new[i] < settings.grind_size) {
    coordinates.y_new[i] = coordinates.y_new[i] + settings.grind_size;
  }
}
distance = DistCulc(coordinates.x_new, coordinates.y_new);
customLog("Distance = ", distance);

xdistance = xDistCulc(coordinates.x_new);
customLog("xDistance = ", xdistance);
ydistance = yDistCulc(coordinates.y_new);
customLog("yDistance = ", ydistance);

potential = PotCulc(distance);
customLog("Potential = ", potential);
force = ForceCulc(distance);
customLog("Force = ", force);

yphi = yAnglCulc(distance, ydistance);
customLog("yPhi = ", yphi);
xphi = xAnglCulc(distance, xdistance);
customLog("xPhi = ", xphi);

acceleration.tot = AccCulc(force);
customLog("Acceleration = ", acceleration.tot);
xacceleration = xAccCulc(xphi, acceleration.tot);
customLog("xAcceleration = ", xacceleration);
yacceleration = yAccCulc(yphi, acceleration.tot);
customLog("yAcceleration = ", yacceleration);

acceleration.x_new = xAccCulcSum(xacceleration);
customLog("xAccelerationsum = ", acceleration.x_new);
acceleration.y_new = yAccCulcSum(yacceleration);
customLog("yAccelerationsum = ", acceleration.y_new);

for (i = 0; i < settings.amount; i++) {
  speed.x_new[i] =
    speed.x_old[i] + ((acceleration.x_old[i] + acceleration.x_new[i]) / 2) * dt;
  speed.y_new[i] =
    speed.y_old[i] + ((acceleration.y_old[i] + acceleration.y_new[i]) / 2) * dt;
}
customLog("Vx = ", speed.x_new);
customLog("Vy = ", speed.y_new);
temperature = Temperature(speed.x_new, speed.y_new);
customLog("Temperature = ", temperature);
//};
