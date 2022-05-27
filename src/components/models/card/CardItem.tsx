import ImageListItem from '@mui/material/ImageListItem';

import Card from 'core/values/Card';
import { url } from 'utils/config';

type props = {
  card: Card;
  handleCardItemClick: (card: Card) => void;
};

const BACK_IMAGE_SRC = '/cards/back.png';

const CardItem = (props: props): JSX.Element => {
  /* eslint-disable @next/next/no-img-element */
  // next export では next/image が使えないのでimgタグを使用する
  return (
    <ImageListItem key={`${props.card.type}${props.card.number}`}>
      <img
        onClick={() => props.handleCardItemClick(props.card)}
        src={
          props.card.isFront
            ? url(`/cards/${props.card.type}/${props.card.number}.png`)
            : url(BACK_IMAGE_SRC)
        }
        alt="Card"
        loading="lazy"
      />
    </ImageListItem>
  );
};

export default CardItem;
