/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download", "./Download/costumes/download.svg", {
        x: 134.77281341326028,
        y: 38.94376147455955,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.y = this.mouse.y;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.shpeed = -5;
  }
}
