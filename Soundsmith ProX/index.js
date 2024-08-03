import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Button1 from "./Button1/Button1.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import Button5 from "./Button5/Button5.js";
import Button4 from "./Button4/Button4.js";
import Button6 from "./Button6/Button6.js";
import Button7 from "./Button7/Button7.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Button1: new Button1({
    x: -180.83404541015625,
    y: 122.2381591796875,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Button2: new Button2({
    x: -62.278718094085576,
    y: 123.99950975090181,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Button3: new Button3({
    x: -122.13591183133644,
    y: 42.9101044714981,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Button5: new Button5({
    x: 179.72646066472726,
    y: 121.44097030783921,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Button4: new Button4({
    x: 51.4004258361944,
    y: 115.9928772252238,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Button6: new Button6({
    x: 10.675580991501903,
    y: 46.316135750933284,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  Button7: new Button7({
    x: 115.54263082758504,
    y: 38.77472822743674,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
