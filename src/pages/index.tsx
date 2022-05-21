import type { NextPage } from 'next';
import Container from '@mui/material/Container';

import CardList from 'components/models/card/CardList';
import Header from 'components/Header';

const Home: NextPage = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <CardList />
        </Container>
      </main>
    </>
  );
};

export default Home;
