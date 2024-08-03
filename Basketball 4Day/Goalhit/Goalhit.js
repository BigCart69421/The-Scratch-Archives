/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Goalhit extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Goalhit/costumes/costume1.svg", {
        x: 24.749999999999744,
        y: 5.643749999999812,
      }),
    ];

    this.sounds = [new Sound("pop", "./Goalhit/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-3, 122);
    this.effects.ghost = 100;
  }
}
