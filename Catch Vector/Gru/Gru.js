/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gru extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gru", "./Gru/costumes/gru.png", { x: 109, y: 88 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield;
    }
  }
}
