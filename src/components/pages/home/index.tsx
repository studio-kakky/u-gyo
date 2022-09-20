import Head from 'next/head';
import { useState } from 'react';

import { ShipsList } from './ships-list';
import { SearchBox } from '../../search-box';
import styles from './index.module.scss';

export const HomePage = (): JSX.Element => {
  const [searchWords, setSearchWords] = useState<string[]>([]);

  return (
    <>
      <Head>
        <title>U魚</title>
      </Head>
      <div className={styles.Layout_util}>
        <SearchBox setSearchWords={setSearchWords} />
      </div>
      <div className={styles.Layout_shipList}>
        <ShipsList searchWords={searchWords} />
      </div>
    </>
  );
};
