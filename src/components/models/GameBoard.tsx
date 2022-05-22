import { useEffect, useState } from 'react';
import MuiCard from '@mui/material/Card';
import { CardContent as MuiCardContent } from '@mui/material';

import Card from 'core/values/Card';
import Deck from 'core/values/Deck';
import Turn from 'core/values/Turn';
import { CARD_TYPE_VALUES } from 'core/types/CardType';
import CardList from './card/CardList';
import { green } from '@mui/material/colors';

const GameBoard = () => {
  const [turn, setTurn] = useState<Turn>(new Turn('first'));
  const [deck, setDeck] = useState<Deck>(new Deck([]));
  const [firstSelectedCard, setFirstSelectedCard] = useState<Card>();
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  useEffect(() => {
    setDeck(createShuffledDeck());
  }, []);

  const selectCard = (card: Card) => {
    if (isWaiting) return;

    switch (turn.move) {
      case 'first':
        firstSelect(card);
        break;
      case 'second':
        secondSelect(card);
        break;
      default:
        throw 'Undefined move';
    }
  };

  const firstSelect = (card: Card) => {
    if (isWaiting) return;
    if (!turn.isCurrentMove('first')) return;
    if (card.isFront) return;

    setFirstSelectedCard(card);
    faceUpCard(card);
    setTurn(turn.next());
  };

  const secondSelect = (card: Card) => {
    if (isWaiting) return;
    if (!turn.isCurrentMove('second')) return;
    if (card.isFront) return;
    if (!firstSelectedCard) return;
    // 同じカードを選択した場合
    if (firstSelectedCard.equal(card)) return;

    faceUpCard(card);
    setIsWaiting(true);
    setTimeout(() => {
      if (!firstSelectedCard.equalNumber(card)) {
        // 1枚目と2枚目に選択したカードの番号が同じなら
        faceDownCard(firstSelectedCard);
        faceDownCard(card);
      }
      setTurn(turn.next());
      setIsWaiting(false);
    }, 1000);
  };

  const faceUpCard = (card: Card) => {
    setDeck(deck.faceUpCard(card));
  };

  const faceDownCard = (card: Card) => {
    setDeck(deck.faceDownCard(card));
  };

  const createShuffledDeck = () => {
    let deck: Deck = new Deck([]);

    for (const cardTypeValue of CARD_TYPE_VALUES) {
      for (let number = 1; number <= Card.MAX_NUMBER; number++) {
        const card = new Card(cardTypeValue, number, false);
        deck = deck.add(card);
      }
    }

    return deck.shuffle();
  };

  return (
    <MuiCard sx={{ background: green[900], mt: 5 }}>
      <MuiCardContent>
        <CardList deck={deck} handleCardItemClick={selectCard} />
      </MuiCardContent>
    </MuiCard>
  );
};

export default GameBoard;
