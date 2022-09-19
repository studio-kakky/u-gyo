import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import styles from "../styles/Home.module.css";
import { createShipsFetcher } from "../shared/interactors/ships";

const Home: NextPage = () => {
  const { fetcher, cacheKey } = createShipsFetcher();
  const { data: ships } = useSWR(cacheKey, fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>U魚</title>
        <meta name="description" content="U魚" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(ships)}</pre>
      <main className={styles.main}>
        <h1 className={styles.title}>U魚</h1>
      </main>
    </div>
  );
};

export default Home;
