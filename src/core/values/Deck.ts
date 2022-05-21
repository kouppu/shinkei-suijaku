import Card from 'core/values/Card';

export default class Deck {
  // ジョーカーは使用しないので52枚
  readonly MAX_CARD_LENGTH = 52;
  readonly cards: Card[];

  constructor(cards: Card[]) {
    if (this.MAX_CARD_LENGTH < cards.length) {
      throw 'The max number of cards has been exceeded.';
    }

    this.cards = cards;
  }

  public add(card: Card) {
    const addedCards = this.cards.concat(card);

    return new Deck(addedCards);
  }

  public remove(card: Card) {
    const removeIndex = this.cards.indexOf(card);
    if (removeIndex == -1) {
      return false;
    }

    const removedCards = this.cards.filter((_, index) => {
      return index != removeIndex;
    });

    return new Deck(removedCards);
  }

  public shuffle() {
    const shuffledCard = this.shuffleArray(this.cards);

    return new Deck(shuffledCard);
  }

  public faceUpCard(card: Card) {
    const targetIndex = this.findIndexOfCard(card);
    if (targetIndex == -1) {
      throw 'Not find card in cards';
    }
    this.cards[targetIndex] = card.faceUp();

    return new Deck(this.cards);
  }

  public faceDownCard(card: Card) {
    const targetIndex = this.findIndexOfCard(card);
    if (targetIndex == -1) {
      throw 'Not find card in cards';
    }
    this.cards[targetIndex] = card.faceDown();

    return new Deck(this.cards);
  }

  private findIndexOfCard(card: Card) {
    let foundIndex = -1;
    this.cards.forEach((value, index) => {
      if (!value.equal(card)) return;
      foundIndex = index;
    });

    return foundIndex;
  }

  private shuffleArray(arr: Card[]): Card[] {
    const arrLength = arr.length;
    // Fisher-Yates shuffle algorithm
    for (let i = arrLength - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }

    return arr;
  }
}
