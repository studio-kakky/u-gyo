import Head from 'next/head';
import styles from './layout.module.css';

interface Props {
  children: JSX.Element;
}

export const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>U魚</title>
        <meta name="description" content="U魚" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{props.children}</main>
      </div>
    </>
  );
};
