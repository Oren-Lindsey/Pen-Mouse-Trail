/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pen", "./Pen/costumes/Pen.svg", {
        x: 0.26666666666667993,
        y: 0.26666666666667993
      })
    ];

    this.sounds = [new Sound("pop", "./Pen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "setup" }, this.whenIReceiveSetup),
      new Trigger(Trigger.BROADCAST, { name: "draw" }, this.whenIReceiveDraw)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.broadcastAndWait("setup");
    while (true) {
      yield* this.broadcastAndWait("draw");
      yield* this.fps();
      yield;
    }
  }

  *whenIReceiveSetup() {
    this.goto(this.mouse.x, this.mouse.y);
    this.clearPen();
    this.stage.vars.length = 30;
    this.penColor = Color.rgb(198, 38, 38);
    this.stage.vars.penSize = 30;
    this.stage.vars.xpos = [];
    this.stage.vars.ypos = [];
    this.stage.vars.xpos.push(this.mouse.x);
    this.stage.vars.ypos.push(this.mouse.y);
    this.penDown = false;
    yield* this.lists(1000);
    this.restartTimer();
  }

  *fps() {
    if (this.timer > 1) {
      this.restartTimer();
      this.stage.vars.fps = this.stage.vars.frames;
      this.stage.vars.frames = 0;
    }
    this.stage.vars.frames += 1;
  }

  *whenIReceiveDraw() {
    yield* this.lists(1000);
    yield* this.draw(this.stage.vars.length, this.stage.vars.penSize);
  }

  *lists(max) {
    this.stage.vars.xpos.splice(1 - 1, 0, this.mouse.x);
    this.stage.vars.ypos.splice(1 - 1, 0, this.mouse.y);
    while (!(this.stage.vars.xpos.length < max + 1)) {
      this.stage.vars.xpos.splice(this.stage.vars.xpos.length - 1, 1);
    }
    while (!(this.stage.vars.ypos.length < max + 1)) {
      this.stage.vars.ypos.splice(this.stage.vars.ypos.length - 1, 1);
    }
  }

  *draw(length2, size) {
    this.clearPen();
    this.penSize = size;
    this.penColor.a = 1 - 0 / 100;
    this.stage.vars.n = 1;
    this.penDown = false;
    for (let i = 0; i < length2; i++) {
      this.goto(
        this.stage.vars.xpos[this.stage.vars.n - 1],
        this.stage.vars.ypos[this.stage.vars.n - 1]
      );
      this.penDown = true;
      this.penSize += (size / length2) * -1;
      this.penColor.h += (size / length2) * -1 * 0.01;
      this.penColor.a -= size / length2 / 100;
      this.stage.vars.n += 1;
    }
  }
}
