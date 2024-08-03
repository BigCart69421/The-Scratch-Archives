/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Vector extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("vector", "./Vector/costumes/vector.png", { x: 46, y: 69 }),
      new Costume("costume1", "./Vector/costumes/costume1.svg", {
        x: 56.49999999999997,
        y: 23.25000000000003,
      }),
    ];

    this.sounds = [
      new Sound("Despicable Me", "./Vector/sounds/Despicable Me.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Despicable Me");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "vector";
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.toNumber(this.stage.vars.score) === 100) {
        this.costume = "costume1";
        yield* this.wait(1);
        this.costume = "vector";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.score = 0;
    while (true) {
      this.goto(this.random(-240, 240), this.random(-180, 180));
      yield* this.wait(0.5);
      if (this.touching(this.sprites["Gru"].andClones())) {
        this.stage.vars.score++;
      }
      yield;
    }
  }
}
