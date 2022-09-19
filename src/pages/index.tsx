import type { NextPage } from 'next';
import Head from 'next/head';
import { ShipsList } from '../components/pages/index/ships-list';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>U魚</title>
      </Head>
      <ShipsList />
    </>
  );
};

export default Home;
