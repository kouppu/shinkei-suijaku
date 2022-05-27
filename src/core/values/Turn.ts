import { MOVE, MOVE_VALUES } from 'core/types/Turn';

export default class Turn {
  readonly move: MOVE;

  constructor(move: MOVE) {
    this.move = move;
  }

  public next(): Turn {
    const index = MOVE_VALUES.indexOf(this.move);
    const nextMove = MOVE_VALUES[index + 1];
    if (nextMove == undefined) {
      return new Turn('first');
    }

    return new Turn(nextMove);
  }

  public isCurrentMove(move: MOVE): boolean {
    return this.move == move;
  }
}
