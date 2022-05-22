import type { NextPage } from 'next';
import Container from '@mui/material/Container';

import Header from 'components/Header';
import GameBoard from 'components/models/GameBoard';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <section>
            <GameBoard />
          </section>
        </Container>
      </main>
    </>
  );
};

export default Home;
