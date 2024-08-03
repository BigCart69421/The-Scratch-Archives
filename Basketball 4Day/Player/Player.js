/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("download (5)", "./Player/costumes/download (5).svg", {
        x: 73.49734456729823,
        y: 104.45809248554863,
      }),
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
