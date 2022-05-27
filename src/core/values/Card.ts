import { CARD_TYPE } from 'core/types/CardType';

export default class Card {
  static readonly MIN_NUMBER: number = 1;
  static readonly MAX_NUMBER: number = 13;

  readonly type: CARD_TYPE;
  readonly number: number;
  public isFront: boolean;

  constructor(type: CARD_TYPE, number: number, isFront: boolean = true) {
    if (Card.MIN_NUMBER > number || Card.MAX_NUMBER < number) {
      throw 'Number is invalid.';
    }

    this.type = type;
    this.number = number;
    this.isFront = isFront;
  }

  public equal(other: Card): boolean {
    return this.number == other.number && this.type == other.type;
  }

  public equalNumber(other: Card): boolean {
    return this.number == other.number;
  }

  public faceUp(): Card {
    return new Card(this.type, this.number, true);
  }

  public faceDown(): Card {
    return new Card(this.type, this.number, false);
  }
}
