import type { NextPage } from 'next';
import Head from 'next/head';
import { ShipsList } from '../components/pages/index/ships-list';
import styles from '../styles/index.module.scss';
import { Header } from '../components/header';
import { useState } from 'react';

const Home: NextPage = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);

  return (
    <>
      <Head>
        <title>U魚</title>
      </Head>
      <div className={styles.fixedHeader}>
        <Header setSearchWords={setSearchWords} />
      </div>
      <ShipsList searchWords={searchWords} />
    </>
  );
};

export default Home;
