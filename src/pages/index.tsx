import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ShipsList } from '../components/pages/index/ships-list';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>U魚</title>
        <meta name="description" content="U魚" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>U魚</h1>
        <ShipsList />
      </main>
    </div>
  );
};

export default Home;
