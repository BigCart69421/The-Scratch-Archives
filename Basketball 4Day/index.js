import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Basketball from "./Basketball/Basketball.js";
import Indicator from "./Indicator/Indicator.js";
import Shoot from "./Shoot/Shoot.js";
import Goalhit from "./Goalhit/Goalhit.js";
import Goalnothit from "./Goalnothit/Goalnothit.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Player: new Player({
    x: -184,
    y: 80,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: true,
    layerOrder: 3,
  }),
  Basketball: new Basketball({
    x: -21.067999999999998,
    y: -129,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6,
  }),
  Indicator: new Indicator({
    x: 1,
    y: -138,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Shoot: new Shoot({
    x: -173,
    y: -146,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Goalhit: new Goalhit({
    x: -3,
    y: 122,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Goalnothit: new Goalnothit({
    x: -10,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
