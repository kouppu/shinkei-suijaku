import { useState } from 'react';
import CardItem from 'components/models/card/CardItem';
import ImageList from '@mui/material/ImageList';

import { Board } from 'core/domain/models/Board';

const CardList = () => {
  const [board, setBoard] = useState<Board>(new Board());

  return (
    <ImageList sx={{ width: 1200, height: 500 }} cols={13}>
      {board.cardList.cards.map((card) => (
        <CardItem card={card} key={`${card.type}-${card.number}`} />
      ))}
    </ImageList>
  );
};

export default CardList;
