/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Goalnothit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Goalnothit/costumes/costume1.svg", {
        x: 262.25,
        y: 2.75,
      }),
    ];

    this.sounds = [new Sound("pop", "./Goalnothit/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.effects.ghost = 100;
    this.goto(-10, 132);
  }
}
