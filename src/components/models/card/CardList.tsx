import CardItem from 'components/models/card/CardItem';
import ImageList from '@mui/material/ImageList';

import Card from 'core/values/Card';
import Deck from 'core/values/Deck';

type props = {
  deck: Deck;
  handleCardItemClick: (card: Card) => void;
};

const CardList = (props: props) => {
  return (
    <ImageList cols={13}>
      {props.deck.cards.map((card) => (
        <CardItem
          card={card}
          key={`${card.type}-${card.number}`}
          handleCardItemClick={props.handleCardItemClick}
        />
      ))}
    </ImageList>
  );
};

export default CardList;
