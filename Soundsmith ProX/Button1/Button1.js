/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button1", "./Button1/costumes/button1.svg", {
        x: 42.625,
        y: 43.367999999999995,
      }),
    ];

    this.sounds = [new Sound("pop", "./Button1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    /* TODO: Implement music_playNoteForBeats */ null;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement music_setInstrument */ null;
  }
}
