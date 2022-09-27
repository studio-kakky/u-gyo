import Head from 'next/head';
import { useState } from 'react';

import { ShipsList } from './ships-list';
import { SearchBox } from '../../shared/search-box';
import styles from './index.module.scss';
import { AppMap } from '../../shared/map/map';

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
      <div className={styles.Layout_content}>
        <div className={styles.Layout_map}>
          <AppMap />
        </div>
        <div className={styles.Layout_shipList}>
          <ShipsList searchWords={searchWords} />
        </div>
      </div>
    </>
  );
};
