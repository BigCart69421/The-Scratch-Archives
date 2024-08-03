/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shoot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Shoot/costumes/costume1.svg", {
        x: 685.5,
        y: 214,
      }),
    ];

    this.sounds = [new Sound("pop", "./Shoot/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.shoot = "False";
  }

  *whenthisspriteclicked() {
    this.stage.vars.shoot = "True";
  }
}
