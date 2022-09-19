import Head from 'next/head';
import styles from './layout.module.css';
import { Header } from '../header';

interface Props {
  children: JSX.Element;
}

export const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>U魚</title>
        <meta name="description" content="U魚" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <div className={styles.fixedHeader}>
        <Header />
      </div>
      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
};
