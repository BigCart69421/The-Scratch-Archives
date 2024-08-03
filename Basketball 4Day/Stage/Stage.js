/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("Basketball 1", "./Stage/costumes/Basketball 1.svg", {
        x: 249,
        y: 186,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenstageclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
    ];

    this.vars.shoot = "False";
    this.vars.goals = 2;

    this.watchers.shoot = new Watcher({
      label: "Shoot",
      style: "normal",
      visible: true,
      value: () => this.vars.shoot,
      x: 245,
      y: 175,
    });
    this.watchers.goals = new Watcher({
      label: "Goals",
      style: "normal",
      visible: true,
      value: () => this.vars.goals,
      x: 354,
      y: 176,
    });
  }

  *whenstageclicked() {
    this.vars.shoot = "True";
  }

  *whenKeySpacePressed() {
    this.vars.shoot = "True";
  }
}
