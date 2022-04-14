import { BowlingGame } from '../src/index';

describe('BowlingGame', () => {
  test('simple game', () => {
    const game = new BowlingGame();

    game.roll(3);
    game.roll(5);

    game.roll(1);
    game.roll(2);

    game.roll(3);
    game.roll(2);

    expect(game.score()).toEqual(16);
  });

  test('spare game', () => {
    const game = new BowlingGame();

    game.roll(3);
    game.roll(5);

    game.roll(2);
    game.roll(8);

    game.roll(3);
    game.roll(2);

    expect(game.score()).toEqual(26);
  });
});
