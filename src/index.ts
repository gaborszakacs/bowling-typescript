export class BowlingGame {
  rolls: number[];

  constructor() {
    this.rolls = [];
  }

  roll(pinCount: number) {
    this.rolls.push(pinCount);
  }

  score() {
    let score = 0;
    this.rolls.forEach((roll) => {
      score += roll;
    });

    return score;
  }
}
