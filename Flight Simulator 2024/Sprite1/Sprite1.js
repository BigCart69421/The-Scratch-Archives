/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 430.06579022286996,
        y: 218.19298245614044,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("Crowd Laugh", "./Sprite1/sounds/Crowd Laugh.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    while (true) {
      this.x -= 5;
      if (this.compare(this.x, -460) < 0) {
        this.goto(460, 2);
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("might as well jump");
  }

  *whenthisspriteclicked2() {
    this.broadcast("might as well jump");
  }
}
