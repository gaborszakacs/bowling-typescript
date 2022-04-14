export class BowlingGame {
  rolls: number[];

  constructor() {
    this.rolls = [];
  }

  roll(pinCount: number) {
    this.rolls.push(pinCount);
  }

  score() {
    return this.rolls.reduce((sum, roll) => sum + roll, 0);
  }
}
