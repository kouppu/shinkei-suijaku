import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';

import Card from 'core/values/Card';

type props = {
  card: Card;
  handleCardItemClick: (card: Card) => void;
};

const BACK_IMAGE_SRC = '/cards/back.png';

const CardItem = (props: props) => {
  return (
    <ImageListItem key={`${props.card.type}${props.card.number}`}>
      <Image
        onClick={() => props.handleCardItemClick(props.card)}
        src={
          props.card.isFornt
            ? `/cards/${props.card.type}/${props.card.number}.png`
            : BACK_IMAGE_SRC
        }
        alt="Card"
        layout="fill"
      />
    </ImageListItem>
  );
};

export default CardItem;
