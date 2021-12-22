let coordinates=[], distance=[], speed=[], acceleration=[];
let epsilon, sigma, Kb, N, mass, distance_cut, lenght;

let Ne={
    mass: 20.18,
    epsilon: 0.0031,
    sigma: 2.74

};

let Ar = {
    mass: 39.95,
    epsilon: 0.0104,
    sigma: 3.4

};

let Kr = {
    mass: 83.8,
    epsilon: 0.0140,
    sigma: 3.65
};

let Xe = {
    mass: 131.29,
    epsilon: 0.02,
    sigma: 3.98
};


let min = 0;
let max = lenght;

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}


function initializeSettings() {
  const substance = document.querySelector("#substance").value;
  const amount = Number(document.querySelector("#amount").value);
  // TODO считать остальные параметры и заполнить константы
  const settings = {
      substance: substance,
      amount: amount,
  }
  console.log(settings);
  return settings;
}

const settings = initializeSettings();


var stage = new Konva.Stage({
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