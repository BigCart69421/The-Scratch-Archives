/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download (1)", "./Download1/costumes/download (1).png", {
        x: 110,
        y: 74,
      }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
