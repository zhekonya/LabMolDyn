let stage;
let layer;

function initStage() {
  // first we need to create a stage
  stage = new Konva.Stage({
    container: "container", // id of container <div>
    width: settings.grind_size*3,
    height: settings.grind_size*3,
  });
  // then create layer
  layer = new Konva.Layer();
  stage.add(layer);
  // draw the image
  layer.draw();

}

/**
 * @param coordinates { x_new: number[]; y_new: number[] }
 */
function paintCoordinates(coordinates) {
  layer.clear()
  //console.table(coordinates);
  coordinates.x_new.forEach((x, index) => {
    let y = coordinates.y_new[index];

    let circle = new Konva.Circle({
      x: x,
      y: y,
      radius: substanceParam.sigma,
      fill: index === 0 ? "red": "blue",
    });

    layer.add(circle);
  });

  layer.draw();
}
