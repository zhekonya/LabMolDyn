const DEBUG = false;

function customLog(message) {
  if (DEBUG) {
    console.log(message);
  }
}

let distance = new Array();
let distance11 = new Array();
let distance12 = new Array();
let distance13 = new Array();
let distance21 = new Array();
let distance23 = new Array();
let distance31 = new Array();
let distance32 = new Array();
let distance33 = new Array();

let xdistance = new Array();
let xdistance11 = new Array();
let xdistance12 = new Array();
let xdistance13 = new Array();
let xdistance21 = new Array();
let xdistance23 = new Array();
let xdistance31 = new Array();
let xdistance32 = new Array();
let xdistance33 = new Array();

let ydistance = new Array();
let ydistance11 = new Array();
let ydistance12 = new Array();
let ydistance13 = new Array();
let ydistance21 = new Array();
let ydistance23 = new Array();
let ydistance31 = new Array();
let ydistance32 = new Array();
let ydistance33 = new Array();

let xphi = new Array();
let xphi11 = new Array();
let xphi12 = new Array();
let xphi13 = new Array();
let xphi21 = new Array();
let xphi23 = new Array();
let xphi31 = new Array();
let xphi32 = new Array();
let xphi33 = new Array();

let yphi = new Array();
let yphi11 = new Array();
let yphi12 = new Array();
let yphi13 = new Array();
let yphi21 = new Array();
let yphi23 = new Array();
let yphi31 = new Array();
let yphi32 = new Array();
let yphi33 = new Array();

let xacceleration = new Array();
let xacceleration11 = new Array();
let xacceleration12 = new Array();
let xacceleration13 = new Array();
let xacceleration21 = new Array();
let xacceleration23 = new Array();
let xacceleration31 = new Array();
let xacceleration32 = new Array();
let xacceleration33 = new Array();

let yacceleration = new Array();
let yacceleration11 = new Array();
let yacceleration12 = new Array();
let yacceleration13 = new Array();
let yacceleration21 = new Array();
let yacceleration23 = new Array();
let yacceleration31 = new Array();
let yacceleration32 = new Array();
let yacceleration33 = new Array();


let xaccelerationsum = new Array();
let xaccelerationsum11 = new Array();
let xaccelerationsum12 = new Array();
let xaccelerationsum13 = new Array();
let xaccelerationsum21 = new Array();
let xaccelerationsum23 = new Array();
let xaccelerationsum31 = new Array();
let xaccelerationsum32 = new Array();
let xaccelerationsum33 = new Array();

let yaccelerationsum = new Array();
let yaccelerationsum11 = new Array();
let yaccelerationsum12 = new Array();
let yaccelerationsum13 = new Array();
let yaccelerationsum21 = new Array();
let yaccelerationsum23 = new Array();
let yaccelerationsum31 = new Array();
let yaccelerationsum32 = new Array();
let yaccelerationsum33 = new Array();

let force = new Array();
let force11 = new Array();
let force12 = new Array();
let force13 = new Array();
let force21 = new Array();
let force23 = new Array();
let force31 = new Array();
let force32 = new Array();
let force33 = new Array();

let sum_force = new Array();
let sum_force11 = new Array();
let sum_force12 = new Array();
let sum_force13 = new Array();
let sum_force21 = new Array();
let sum_force23 = new Array();
let sum_force31 = new Array();
let sum_force32 = new Array();
let sum_force33 = new Array();

let potential = new Array();
let potential11 = new Array();
let potential12 = new Array();
let potential13 = new Array();
let potential21 = new Array();
let potential23 = new Array();
let potential31 = new Array();
let potential32 = new Array();
let potential33 = new Array();

let rc;
let Urc;
let t;
const dt = 0.1;
let lambda;
let epsilon, sigma, nu, mass, distance_cut, lenght, x1, y1, Time;
let vmid = 0, xmid = 0, Sx= 0, ymid = 0, Sy;
let PotE, FullE;
let temperature;
let energy;
const NA = 6.02214076 * 10 ** 23;
const Kb = 1.380649 * 10 ** -23;
const J = 1.6 * 10 ** -19;
//const temp0;
let coordinates = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};
let coordinates11 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates12 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates13 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates21 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates23 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates31 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates32 = {
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let coordinates33 = {
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

let acceleration11 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration12 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration13 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration21 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration23 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration31 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration32 = {
  tot: new Array(),
  x_old: new Array(),
  x_new: new Array(),
  y_old: new Array(),
  y_new: new Array(),
};

let acceleration33 = {
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
  const temp0 = Number(document.querySelector("#temperature").value);
  const temptime = Number(document.querySelector("#temptime").value);

  // TODO считать остальные параметры и заполнить константы
  const settings = {
    substance: substance,
    amount: amount,
    grind_size: grind_size,
    temp0: temp0,
    temptime: temptime
  };
  customLog(settings);
  return settings;
}

const settings = initializeSettings();

const substanceName = document.querySelector("#substance").value;

const substanceParam = substance[substanceName];

customLog(settings.grind_size);
const scale = settings.grind_size / 1000;

nu = settings.amount / NA;

let min = settings.grind_size;
let max = 2*settings.grind_size;
rc = 2.5*substanceParam.sigma;
Urc= 4 * substanceParam.epsilon *
      J *((substanceParam.sigma / rc) ** 12 -
        (substanceParam.sigma / rc) ** 6);
let Frc =
(24 / substanceParam.sigma) *
substanceParam.epsilon *
J *
((substanceParam.sigma / rc) ** 13 -
  (substanceParam.sigma / rc) ** 7);

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
for (let i = 0; i < settings.amount; i++) {
  coordinates.x_new[i] = getRandomFloat(min, max);
  coordinates.y_new[i] = getRandomFloat(min, max);
  speed.x_new[i] = getRandomFloat(0, 20);
  speed.y_new[i] = getRandomFloat(0, 20);
}

for (let i = 0; i < settings.amount; i++) {
  coordinates11.x_new[i] = coordinates.x_new[i]-settings.grind_size;
  coordinates11.y_new[i] = coordinates.y_new[i]-settings.grind_size;

  coordinates12.x_new[i] = coordinates.x_new[i];
  coordinates12.y_new[i] = coordinates.y_new[i]-settings.grind_size;

  coordinates13.x_new[i] = coordinates.x_new[i]+settings.grind_size;
  coordinates13.y_new[i] = coordinates.y_new[i]-settings.grind_size;

  coordinates21.x_new[i] = coordinates.x_new[i]-settings.grind_size;
  coordinates21.y_new[i] = coordinates.y_new[i];

  coordinates23.x_new[i] = coordinates.x_new[i]+settings.grind_size;
  coordinates23.y_new[i] = coordinates.y_new[i];

  coordinates31.x_new[i] = coordinates.x_new[i]-settings.grind_size;
  coordinates31.y_new[i] = coordinates.y_new[i]+settings.grind_size;

  coordinates32.x_new[i] = coordinates.x_new[i];
  coordinates32.y_new[i] = coordinates.y_new[i]+settings.grind_size;

  coordinates33.x_new[i] = coordinates.x_new[i]+settings.grind_size;
  coordinates33.y_new[i] = coordinates.y_new[i]+settings.grind_size;
}

function Midle(x){
  let S = 0, mid = 0, SS = 0, midd = 0;
  for (let i = 0; i < settings.amount; i++) {
    mid+=x[i];
  }
  midd = mid/settings.amount;
  for (let i = 0; i < settings.amount; i++) {
    S += (x[i]-mid)**2;
  }
  SS = Math.sqrt(S)/(settings.amount - 1);
  return SS
}

Sx = Midle(coordinates.x_new);
Sy = Midle(coordinates.y_new);
console.log("Sx = ", Sx);
console.log("Sy = ", Sy);

console.log("x_new = ", coordinates.x_new);
console.log("y_new = ", coordinates.y_new);

initStage();
paintCoordinates(coordinates);

console.log("Vx = ", speed.x_new);
console.log("Vy = ", speed.y_new);

//функция расчета расстояния
function DistCulc(x, y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = Math.sqrt((x[i] - x[j]) ** 2 + (y[i] - y[j]) ** 2);
    }
  }

  return z;
}
function DistCulcXY(x, y, x1, y1) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = Math.sqrt((x[i] - x1[j]) ** 2 + (y[i] - y1[j]) ** 2);
    }
  }

  return z;
}
//функция расчета потенциала
function PotCulc(x) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] =
        4 *
        substanceParam.epsilon *
        J *
        ((substanceParam.sigma / x[i][j]) ** 12 -
          (substanceParam.sigma / x[i][j]) ** 6)-Urc;
      if (i == j || x[i][j]>rc) {
        z[i][j] = 0;
      }
    }
  }

  return z;
}

//функция расчета силы
function ForceCulc(x) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] =
        (24 / substanceParam.sigma) *
        substanceParam.epsilon *
        J *
        ((substanceParam.sigma / x[i][j]) ** 13 -
          (substanceParam.sigma / x[i][j]) ** 7)-Frc;
      if (i == j || x[i][j]>rc) {
        z[i][j] = 0;
      }
    }
  }

  return z;
}

//функция расчета ускорения
function AccCulc(x) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = x[i][j] / (substanceParam.mass * nu);
    }
  }

  return z;
}
//ydistance
function yDistCulc(y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = y[i] - y[j];
    }
  }

  return z;
}

function yDistCulcXY(y, y1) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = y[i] - y1[j];
    }
  }

  return z;
}

function xDistCulc(x) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = x[i] - x[j];
    }
  }

  return z;
}

function xDistCulcXY(x, x1) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = x[i] - x1[j];
    }
  }

  return z;
}

//функция расчета угла x-distance, y - ydistance
function yAnglCulc(x, y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      if (i == j) {
        z[i][j] = 0;
      } else {
        z[i][j] = Math.acos(y[i][j] / x[i][j]);
      }
    }
  }

  return z;
}

function xAnglCulc(x, y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      if (i == j) {
        z[i][j] = 0;
      } else {
        z[i][j] = Math.acos(y[i][j] / x[i][j]);
      }
    }
  }

  return z;
}

function xAccCulc(x, y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = Math.cos(x[i][j]) * y[i][j];
    }
  }

  return z;
}

function yAccCulc(x, y) {
  let z = new Array();
  for (let i = 0; i < settings.amount; i++) {
    z[i] = new Array();
    for (let j = 0; j < settings.amount; j++) {
      z[i][j] = Math.cos(x[i][j]) * y[i][j];
    }
  }

  return z;
}

function xAccCulcSum(x) {
  let z = new Array();
  let sum;
  for (let i = 0; i < settings.amount; i++) {
    sum = 0;
    for (let j = 0; j < settings.amount; j++) {
      sum += x[i][j];
    }
    z[i] = sum;
  }

  return z;
}

function xAccCulcSum(x, x11, x12, x13, x21, x23, x31, x32, x33) {
  let z = new Array();
  let sum;
  for (let i = 0; i < settings.amount; i++) {
    sum = 0;
    for (let j = 0; j < settings.amount; j++) {
      sum += x[i][j]+x11[i][j]+x12[i][j]+x13[i][j]+x21[i][j]+x23[i][j]+x31[i][j]+x32[i][j]+x33[i][j];
    }
    z[i] = sum;
  }

  return z;
}

function yAccCulcSum(y, y11, y12, y13, y21, y23, y31, y32, y33) {
  let z = new Array();
  let sum;
  for (let i = 0; i < settings.amount; i++) {
    sum = 0;
    for (let j = 0; j < settings.amount; j++) {
      sum += y[i][j]+y11[i][j]+y12[i][j]+y13[i][j]+y21[i][j]+y23[i][j]+y31[i][j]+y32[i][j]+y33[i][j];
    }
    z[i] = sum;
  }

  return z;
}

function Energy(x, y) {
  z = 0;
  for (let i = 0; i < settings.amount; i++) {
    z +=
      (substanceParam.mass * nu * (x[i] ** 2 + y[i] ** 2) * 10 ** -20) / 2;
  }
  return z;
}
function PotEnergy(x, x11, x12, x13, x21, x23, x31, x32, x33) {
  z = 0;
  for (let i = 0; i < settings.amount; i++) {
    for (let j = 0; j < settings.amount; j++) {
    z += x[i][j]+x[i][j]+x11[i][j]+x12[i][j]+x13[i][j]+x21[i][j]+x23[i][j]+x31[i][j]+x32[i][j]+x33[i][j];
    }
  }
  return z;
}

function FullEnergy(x, y) {
  z = 0;
  z = x + y;
  return z;
}

function Temperature(x){
  let z = (2 * x) / (3 * Kb * settings.amount);
  return z; 
}

function Termostat (x) {
    let z = Math.sqrt(1+(dt/settings.temptime)*((settings.temp0/x)-1));
    return z;
}

energy = Energy(speed.x_new, speed.y_new);
temperature = Temperature(energy);
console.log("Temperature = ", temperature);
lambda = Termostat(temperature);
console.log("Lambda", lambda);

for (let i = 0; i < settings.amount; i++) {
  speed.x_new[i] = speed.x_new[i]*lambda;
  speed.y_new[i] = speed.y_new[i]*lambda;
}
console.log("vx = ", speed.x_new);
console.log("vy = ", speed.y_new);
distance = DistCulc(coordinates.x_new, coordinates.y_new);
console.log("Distance = ", distance);

distance11 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates11.x_new, coordinates11.y_new);
distance12 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates12.x_new, coordinates12.y_new);
distance13 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates13.x_new, coordinates13.y_new);
distance21 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates21.x_new, coordinates21.y_new);
distance23 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates23.x_new, coordinates23.y_new);
distance31 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates31.x_new, coordinates31.y_new);
distance32 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates32.x_new, coordinates32.y_new);
distance33 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates33.x_new, coordinates33.y_new);

console.log("Distance11 = ", distance11);
console.log("Distance12 = ", distance12);
console.log("Distance13 = ", distance13);

xdistance = xDistCulc(coordinates.x_new);
xdistance11 = xDistCulcXY(coordinates.x_new, coordinates11.x_new);
xdistance12 = xDistCulcXY(coordinates.x_new, coordinates12.x_new);
xdistance13 = xDistCulcXY(coordinates.x_new, coordinates13.x_new);
xdistance21 = xDistCulcXY(coordinates.x_new, coordinates21.x_new);
xdistance23 = xDistCulcXY(coordinates.x_new, coordinates23.x_new);
xdistance31 = xDistCulcXY(coordinates.x_new, coordinates31.x_new);
xdistance32 = xDistCulcXY(coordinates.x_new, coordinates32.x_new);
xdistance33 = xDistCulcXY(coordinates.x_new, coordinates33.x_new);

customLog("xDistance = ", xdistance);
ydistance = yDistCulc(coordinates.y_new);
ydistance11 = yDistCulcXY(coordinates.y_new, coordinates11.y_new);
ydistance12 = yDistCulcXY(coordinates.y_new, coordinates12.y_new);
ydistance13 = yDistCulcXY(coordinates.y_new, coordinates13.y_new);
ydistance21 = yDistCulcXY(coordinates.y_new, coordinates21.y_new);
ydistance23 = yDistCulcXY(coordinates.y_new, coordinates23.y_new);
ydistance31 = yDistCulcXY(coordinates.y_new, coordinates31.y_new);
ydistance32 = yDistCulcXY(coordinates.y_new, coordinates32.y_new);
ydistance33 = yDistCulcXY(coordinates.y_new, coordinates33.y_new);


customLog("yDistance = ", ydistance);

potential = PotCulc(distance);
potential11 = PotCulc(distance11);
potential12 = PotCulc(distance12);
potential13 = PotCulc(distance13);
potential21 = PotCulc(distance21);
potential23 = PotCulc(distance23);
potential31 = PotCulc(distance31);
potential32 = PotCulc(distance32);
potential33 = PotCulc(distance33);

console.log("Potential = ", potential);

force = ForceCulc(distance);
force11 = ForceCulc(distance11);
force12 = ForceCulc(distance12);
force13 = ForceCulc(distance13);
force21 = ForceCulc(distance21);
force23 = ForceCulc(distance23);
force31 = ForceCulc(distance31);
force32 = ForceCulc(distance32);
force33 = ForceCulc(distance33);

console.log("Force = ", force);

yphi = yAnglCulc(distance, ydistance);
yphi11 = yAnglCulc(distance11, ydistance11);
yphi12 = yAnglCulc(distance12, ydistance12);
yphi13 = yAnglCulc(distance13, ydistance13);
yphi21 = yAnglCulc(distance21, ydistance21);
yphi23 = yAnglCulc(distance23, ydistance23);
yphi31 = yAnglCulc(distance31, ydistance31);
yphi32 = yAnglCulc(distance32, ydistance32);
yphi33 = yAnglCulc(distance33, ydistance33);

customLog("yPhi = ", yphi);
xphi = xAnglCulc(distance, xdistance);
xphi11 = xAnglCulc(distance11, xdistance11);
xphi12 = xAnglCulc(distance12, xdistance12);
xphi13 = xAnglCulc(distance13, xdistance13);
xphi21 = xAnglCulc(distance21, xdistance21);
xphi23 = xAnglCulc(distance23, xdistance23);
xphi31 = xAnglCulc(distance31, xdistance31);
xphi32 = xAnglCulc(distance32, xdistance32);
xphi33 = xAnglCulc(distance33, xdistance33);

customLog("xPhi = ", xphi);

acceleration.tot = AccCulc(force);
acceleration11.tot = AccCulc(force11);
acceleration12.tot = AccCulc(force12);
acceleration13.tot = AccCulc(force13);
acceleration21.tot = AccCulc(force21);
acceleration23.tot = AccCulc(force23);
acceleration31.tot = AccCulc(force31);
acceleration32.tot = AccCulc(force32);
acceleration33.tot = AccCulc(force33);

console.log("Acceleration = ", acceleration.tot);
xacceleration = xAccCulc(xphi, acceleration.tot);
xacceleration11 = xAccCulc(xphi11, acceleration11.tot);
xacceleration12 = xAccCulc(xphi12, acceleration12.tot);
xacceleration13 = xAccCulc(xphi13, acceleration13.tot);
xacceleration21 = xAccCulc(xphi21, acceleration21.tot);
xacceleration23 = xAccCulc(xphi23, acceleration23.tot);
xacceleration31 = xAccCulc(xphi31, acceleration31.tot);
xacceleration32 = xAccCulc(xphi32, acceleration32.tot);
xacceleration33 = xAccCulc(xphi33, acceleration33.tot);

console.log("xAcceleration = ", xacceleration);
console.log("xAcceleration11 = ", xacceleration11);
yacceleration = yAccCulc(yphi, acceleration.tot);
yacceleration11 = yAccCulc(yphi11, acceleration11.tot);
yacceleration12 = yAccCulc(yphi12, acceleration12.tot);
yacceleration13 = yAccCulc(yphi13, acceleration13.tot);
yacceleration21 = yAccCulc(yphi21, acceleration21.tot);
yacceleration23 = yAccCulc(yphi23, acceleration23.tot);
yacceleration31 = yAccCulc(yphi31, acceleration31.tot);
yacceleration32 = yAccCulc(yphi32, acceleration32.tot);
yacceleration33 = yAccCulc(yphi33, acceleration33.tot);

console.log("yAcceleration = ", yacceleration);
console.log("yAcceleration11 = ", yacceleration11);

acceleration.x_new = xAccCulcSum(xacceleration, xacceleration11, xacceleration12, xacceleration13, xacceleration21, xacceleration23, xacceleration31, xacceleration32, xacceleration33);
console.log("xAccelerationsum = ", acceleration.x_new);
acceleration.y_new = yAccCulcSum(yacceleration, yacceleration11, yacceleration12, yacceleration13, yacceleration21, yacceleration23, yacceleration31, yacceleration32, yacceleration33);
console.log("yAccelerationsum = ", acceleration.y_new);
PotE = PotEnergy(potential,potential11,potential12,potential13,potential21,potential23,potential31,potential32,potential33);
console.log("PotE = ", PotE);
FullE = FullEnergy(PotE, energy);
console.log("KinEnergy = ", energy);
console.log("FullEnergy = ", FullE);
Time = 0;
paintGraph(FullE, Time);

//цикл основного расчета

function calculate() {
  //console.log("Coordinates2 = ", coordinates);
  //console.log("Coordinates3 = ", coordinates);
  for (let i = 0; i < settings.amount; i++) {
  speed.x_old[i] = speed.x_new[i];
  speed.y_old[i] = speed.y_new[i];
  }
  console.log("vxold = ", speed.x_old);
  console.log("vy = ", speed.y_old);
  for (let i = 0; i < settings.amount; i++) {
  acceleration.x_old[i] = acceleration.x_new[i];
  acceleration.y_old[i] = acceleration.y_new[i];
  }
    let deltaX = new Array();
    let deltaY = new Array();
  for (let i = 0; i < settings.amount; i++) {
    coordinates.x_old[i] = coordinates.x_new[i]; 
    coordinates.y_old[i] = coordinates.y_new[i];
    coordinates.x_new[i] =
      coordinates.x_old[i] +
      speed.x_old[i] * dt +
      acceleration.x_old[i] * dt ** 2;
      deltaX[i] = speed.x_old[i] * dt +
      acceleration.x_old[i] * dt ** 2;
    coordinates.y_new[i] =
      coordinates.y_old[i] +
      speed.y_old[i] * dt +
      acceleration.y_old[i] * dt ** 2;
      deltaY[i] = speed.y_old[i] * dt +
      acceleration.y_old[i] * dt ** 2;

    if (coordinates.x_new[i] > 2*settings.grind_size) {
        while (coordinates.x_new[i] > 2*settings.grind_size) {
      coordinates.x_new[i] = coordinates.x_new[i] - settings.grind_size;
        }
    }
    if (coordinates.x_new[i] < settings.grind_size) {
        while (coordinates.x_new[i] < settings.grind_size) {
      coordinates.x_new[i] = coordinates.x_new[i] + settings.grind_size;
        }
    }
    if (coordinates.y_new[i] > 2*settings.grind_size) {
        while (coordinates.y_new[i] > 2*settings.grind_size) {
      coordinates.y_new[i] = coordinates.y_new[i] - settings.grind_size;
        }
    }
    if (coordinates.y_new[i] < settings.grind_size) {
        while (coordinates.y_new[i] < settings.grind_size) {
      coordinates.y_new[i] = coordinates.y_new[i] + settings.grind_size;
        }
    }
  }
console.log("x_new111 = ", coordinates.x_new);
console.log("y_new111 = ", coordinates.y_new);

  for (let i = 0; i < settings.amount; i++) {
    coordinates11.x_new[i] = coordinates.x_new[i]-settings.grind_size;
    coordinates11.y_new[i] = coordinates.y_new[i]-settings.grind_size;
  
    coordinates12.x_new[i] = coordinates.x_new[i];
    coordinates12.y_new[i] = coordinates.y_new[i]-settings.grind_size;
  
    coordinates13.x_new[i] = coordinates.x_new[i]+settings.grind_size;
    coordinates13.y_new[i] = coordinates.y_new[i]-settings.grind_size;
  
    coordinates21.x_new[i] = coordinates.x_new[i]-settings.grind_size;
    coordinates21.y_new[i] = coordinates.y_new[i];
  
    coordinates23.x_new[i] = coordinates.x_new[i]+settings.grind_size;
    coordinates23.y_new[i] = coordinates.y_new[i];
  
    coordinates31.x_new[i] = coordinates.x_new[i]-settings.grind_size;
    coordinates31.y_new[i] = coordinates.y_new[i]+settings.grind_size;
  
    coordinates32.x_new[i] = coordinates.x_new[i];
    coordinates32.y_new[i] = coordinates.y_new[i]+settings.grind_size;
  
    coordinates33.x_new[i] = coordinates.x_new[i]+settings.grind_size;
    coordinates33.y_new[i] = coordinates.y_new[i]+settings.grind_size;
  }

 // console.log("DeltaX", deltaX);
 // console.log("DeltaY", deltaY);
 // console.log("acceleration", acceleration);
  //   setTimeout(() => {
  
  paintCoordinates(coordinates);
  //   }, 0);
  Time = Time+dt;
  console.log("Coordinates 4= ", coordinates);
  distance = DistCulc(coordinates.x_new, coordinates.y_new);
  distance11 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates11.x_new, coordinates11.y_new);
  distance12 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates12.x_new, coordinates12.y_new);
  distance13 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates13.x_new, coordinates13.y_new);
  distance21 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates21.x_new, coordinates21.y_new);
  distance23 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates23.x_new, coordinates23.y_new);
  distance31 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates31.x_new, coordinates31.y_new);
  distance32 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates32.x_new, coordinates32.y_new);
  distance33 = DistCulcXY(coordinates.x_new, coordinates.y_new, coordinates33.x_new, coordinates33.y_new);

  customLog("Distance = ", distance);

  xdistance = xDistCulc(coordinates.x_new);
  xdistance11 = xDistCulcXY(coordinates.x_new, coordinates11.x_new);
  xdistance12 = xDistCulcXY(coordinates.x_new, coordinates12.x_new);
  xdistance13 = xDistCulcXY(coordinates.x_new, coordinates13.x_new);
  xdistance21 = xDistCulcXY(coordinates.x_new, coordinates21.x_new);
  xdistance23 = xDistCulcXY(coordinates.x_new, coordinates23.x_new);
  xdistance31 = xDistCulcXY(coordinates.x_new, coordinates31.x_new);
  xdistance32 = xDistCulcXY(coordinates.x_new, coordinates32.x_new);
  xdistance33 = xDistCulcXY(coordinates.x_new, coordinates33.x_new);

  customLog("xDistance = ", xdistance);
  ydistance = yDistCulc(coordinates.y_new);
  customLog("yDistance = ", ydistance);
  ydistance11 = yDistCulcXY(coordinates.y_new, coordinates11.y_new);
  ydistance12 = yDistCulcXY(coordinates.y_new, coordinates12.y_new);
  ydistance13 = yDistCulcXY(coordinates.y_new, coordinates13.y_new);
  ydistance21 = yDistCulcXY(coordinates.y_new, coordinates21.y_new);
  ydistance23 = yDistCulcXY(coordinates.y_new, coordinates23.y_new);
  ydistance31 = yDistCulcXY(coordinates.y_new, coordinates31.y_new);
  ydistance32 = yDistCulcXY(coordinates.y_new, coordinates32.y_new);
  ydistance33 = yDistCulcXY(coordinates.y_new, coordinates33.y_new);


  potential = PotCulc(distance);
  potential11 = PotCulc(distance11);
  potential12 = PotCulc(distance12);
  potential13 = PotCulc(distance13);
  potential21 = PotCulc(distance21);
  potential23 = PotCulc(distance23);
  potential31 = PotCulc(distance31);
  potential32 = PotCulc(distance32);
  potential33 = PotCulc(distance33);
  
  customLog("Potential = ", potential);
  force = ForceCulc(distance);
  force11 = ForceCulc(distance11);
  force12 = ForceCulc(distance12);
  force13 = ForceCulc(distance13);
  force21 = ForceCulc(distance21);
  force23 = ForceCulc(distance23);
  force31 = ForceCulc(distance31);
  force32 = ForceCulc(distance32);
  force33 = ForceCulc(distance33);
  customLog("Force = ", force);

  yphi = yAnglCulc(distance, ydistance);
  yphi11 = yAnglCulc(distance11, ydistance11);
  yphi12 = yAnglCulc(distance12, ydistance12);
  yphi13 = yAnglCulc(distance13, ydistance13);
  yphi21 = yAnglCulc(distance21, ydistance21);
  yphi23 = yAnglCulc(distance23, ydistance23);
  yphi31 = yAnglCulc(distance31, ydistance31);
  yphi32 = yAnglCulc(distance32, ydistance32);
  yphi33 = yAnglCulc(distance33, ydistance33);
  customLog("yPhi = ", yphi);

  xphi = xAnglCulc(distance, xdistance);
  xphi11 = xAnglCulc(distance11, xdistance11);
  xphi12 = xAnglCulc(distance12, xdistance12);
  xphi13 = xAnglCulc(distance13, xdistance13);
  xphi21 = xAnglCulc(distance21, xdistance21);
  xphi23 = xAnglCulc(distance23, xdistance23);
  xphi31 = xAnglCulc(distance31, xdistance31);
  xphi32 = xAnglCulc(distance32, xdistance32);
  xphi33 = xAnglCulc(distance33, xdistance33);


  customLog("xPhi = ", xphi);

  acceleration.tot = AccCulc(force);
  acceleration11.tot = AccCulc(force11);
  acceleration12.tot = AccCulc(force12);
  acceleration13.tot = AccCulc(force13);
  acceleration21.tot = AccCulc(force21);
  acceleration23.tot = AccCulc(force23);
  acceleration31.tot = AccCulc(force31);
  acceleration32.tot = AccCulc(force32);
  acceleration33.tot = AccCulc(force33);

  customLog("Acceleration = ", acceleration.tot);
  xacceleration = xAccCulc(xphi, acceleration.tot);
  xacceleration11 = xAccCulc(xphi11, acceleration11.tot);
  xacceleration12 = xAccCulc(xphi12, acceleration12.tot);
  xacceleration13 = xAccCulc(xphi13, acceleration13.tot);
  xacceleration21 = xAccCulc(xphi21, acceleration21.tot);
  xacceleration23 = xAccCulc(xphi23, acceleration23.tot);
  xacceleration31 = xAccCulc(xphi31, acceleration31.tot);
  xacceleration32 = xAccCulc(xphi32, acceleration32.tot);
  xacceleration33 = xAccCulc(xphi33, acceleration33.tot);


  customLog("xAcceleration = ", xacceleration);
  yacceleration = yAccCulc(yphi, acceleration.tot);
  yacceleration11 = yAccCulc(yphi11, acceleration11.tot);
  yacceleration12 = yAccCulc(yphi12, acceleration12.tot);
  yacceleration13 = yAccCulc(yphi13, acceleration13.tot);
  yacceleration21 = yAccCulc(yphi21, acceleration21.tot);
  yacceleration23 = yAccCulc(yphi23, acceleration23.tot);
  yacceleration31 = yAccCulc(yphi31, acceleration31.tot);
  yacceleration32 = yAccCulc(yphi32, acceleration32.tot);
  yacceleration33 = yAccCulc(yphi33, acceleration33.tot);

  customLog("yAcceleration = ", yacceleration);

  acceleration.x_new = xAccCulcSum(xacceleration, xacceleration11, xacceleration12, xacceleration13, xacceleration21, xacceleration23, xacceleration31, xacceleration32, xacceleration33);
  customLog("xAccelerationsum = ", acceleration.x_new);
  acceleration.y_new = yAccCulcSum(yacceleration, yacceleration11, yacceleration12, yacceleration13, yacceleration21, yacceleration23, yacceleration31, yacceleration32, yacceleration33);
  customLog("yAccelerationsum = ", acceleration.y_new);

  for (let i = 0; i < settings.amount; i++) {
    speed.x_new[i] =
      speed.x_old[i] +
      ((acceleration.x_old[i] + acceleration.x_new[i]) / 2) * dt;
    speed.y_new[i] =
      speed.y_old[i] +
      ((acceleration.y_old[i] + acceleration.y_new[i]) / 2) * dt;
  }
  customLog("Vx = ", speed.x_new);
  customLog("Vy = ", speed.y_new);
  energy = Energy(speed.x_new, speed.y_new);
  temperature = Temperature(energy);
  console.log("Temperature = ", temperature);
  lambda = Termostat(temperature);
  console.log("Lambda", lambda);
  for (let i = 0; i < settings.amount; i++) {
    speed.x_new[i] = speed.x_new[i]*lambda;
    speed.y_new[i] = speed.y_new[i]*lambda;
  }

  for (let i = 0; i < settings.amount; i++) {

    vmid = (Math.sqrt(speed.x_old[i]**2 + speed.y_old[i]**2)-Math.sqrt(speed.x_new[i]**2 + speed.y_new[i]**2));

  }
   vmid = Math.sqrt((vmid/settings.amount)**2);
   console.log("vmid = ", vmid);

   Sx = Midle(coordinates.x_new);
   Sy = Midle(coordinates.y_new);
   console.log("Sx = ", Sx);
   console.log("Sy = ", Sy);
   PotE = PotEnergy(potential,potential11,potential12,potential13,potential21,potential23,potential31,potential32,potential33);
   console.log("PotE = ", PotE);
   FullE = FullEnergy(PotE, energy);
   console.log("KinEnergy = ", energy);
   console.log("FullEnergy = ", FullE);

paintGraph(FullE, Time);
  
}

 /*for (let k = 0; k < 6; k++) {
   calculate();
 }*/
