import { CARD_TYPE } from 'core/types/CardType';

export default class Card {
  static readonly MIN_NUMBER: number = 1;
  static readonly MAX_NUMBER: number = 13;

  readonly type: CARD_TYPE;
  readonly number: number;
  public isFornt: boolean = false;

  constructor(type: CARD_TYPE, number: number) {
    if (Card.MIN_NUMBER > number || Card.MAX_NUMBER < number) {
      throw 'Number is invalid.';
    }

    this.type = type;
    this.number = number;
  }

  public equalNumber(other: Card) {
    return this.number == other.number;
  }

  public faceUp() {
    this.isFornt = true;

    return this.isFornt;
  }

  public faceDown() {
    this.isFornt = false;

    return this.isFornt;
  }
}
