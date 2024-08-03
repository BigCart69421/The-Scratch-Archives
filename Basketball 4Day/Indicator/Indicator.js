/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Indicator extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Indicator/costumes/costume1.svg", {
        x: 95,
        y: 8,
      }),
    ];

    this.sounds = [new Sound("pop", "./Indicator/sounds/pop.wav")];

    this.triggers = [];
  }
}
