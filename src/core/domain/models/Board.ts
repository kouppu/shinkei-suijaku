import Card from 'core/domain/values/Card';
import CardList from 'core/domain/values/CardList';
import { CARD_TYPE_VALUES } from 'core/types/CardType';

export class Board {
  readonly cardList: CardList;

  constructor() {
    this.cardList = this.createShuffledCardList();
  }

  private createShuffledCardList() {
    let cardList = new CardList([]);

    for (const cardTypeValue of CARD_TYPE_VALUES) {
      for (let number = 1; number <= Card.MAX_NUMBER; number++) {
        const card = new Card(cardTypeValue, number);
        cardList = cardList.add(card);
      }
    }

    return cardList.shuffle();
  }
}
