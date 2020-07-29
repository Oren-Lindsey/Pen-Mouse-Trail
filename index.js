import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pen from "./Pen/Pen.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pen: new Pen({
    x: 154,
    y: 6,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
