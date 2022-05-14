import { useState } from 'react';
import Image from 'next/image';
import ImageListItem from '@mui/material/ImageListItem';

import Card from 'core/domain/values/Card';

type props = {
  card: Card;
};

const BACK_IMAGE_SRC = '/cards/back.png';

const CardItem = (props: props) => {
  const [src, setSrc] = useState<string>(BACK_IMAGE_SRC);

  const reverse = (card: Card) => {
    return card.isFornt ? faseDown(card) : faceUp(card);
  };

  const faceUp = (card: Card) => {
    card.faceUp();
    setSrc(`/cards/${props.card.type}/${props.card.number}.png`);
  };

  const faseDown = (card: Card) => {
    card.faceDown();
    setSrc(BACK_IMAGE_SRC);
  };

  return (
    <ImageListItem key={`${props.card.type}${props.card.number}`}>
      <Image
        onClick={() => reverse(props.card)}
        src={src}
        alt="Card"
        layout="fill"
      />
    </ImageListItem>
  );
};

export default CardItem;
