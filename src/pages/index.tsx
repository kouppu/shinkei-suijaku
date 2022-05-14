import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import CardList from 'components/models/card/CardList';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Container>
          <CardList />
        </Container>
      </main>
    </>
  );
};

export default Home;
