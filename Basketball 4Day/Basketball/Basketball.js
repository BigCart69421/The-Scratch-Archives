/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Basketball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("basketball", "./Basketball/costumes/basketball.svg", {
        x: 23,
        y: 23,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Basketball/sounds/pop.wav"),
      new Sound(
        "basketball bounce",
        "./Basketball/sounds/basketball bounce.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-1, -129);
    this.moveAhead();
    while (true) {
      if (this.toString(this.stage.vars.shoot) === "False") {
        yield* this.glide(0.5, 75, -129);
        yield* this.glide(0.5, -71, -129);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toString(this.stage.vars.shoot) === "True") {
        yield* this.glide(1, this.x, 124);
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.goals = 0;
    while (true) {
      if (this.touching(this.sprites["Goalhit"].andClones())) {
        this.stage.vars.goals++;
        yield* this.wait(0.2);
        this.goto(-1, -129);
        this.stage.vars.shoot = "False";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.goals = 0;
    while (true) {
      if (this.touching(this.sprites["Goalnothit"].andClones())) {
        this.goto(-1, -129);
        this.stage.vars.shoot = "False";
      }
      yield;
    }
  }
}
