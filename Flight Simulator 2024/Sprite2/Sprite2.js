/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 264.43811,
        y: 203.49998999999994,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(465, 0);
    while (true) {
      this.x += this.toNumber(this.stage.vars.shpeed);
      if (this.compare(this.x, -460) < 0) {
        this.goto(460, 2);
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("might as well jump");
  }

  *whenKeySpacePressed() {
    this.broadcast("might as well jump");
  }
}
