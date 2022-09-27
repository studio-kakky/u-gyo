import Head from 'next/head';
import { useState } from 'react';

import { ShipsList } from './ships-list';
import { SearchBox } from '../../shared/search-box';
import styles from './index.module.scss';
import { ShipMap } from '../../shared/map/map';

export const HomePage = (): JSX.Element => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [mapIsOpened, setMapIsOpened] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>U魚</title>
      </Head>
      <div className={styles.Layout_util}>
        <SearchBox setSearchWords={setSearchWords} />
        <button
          className={`${styles.MapButton} ${mapIsOpened ? styles['--opened'] : ''}`}
          onClick={() => setMapIsOpened(!mapIsOpened)}
        >
          <span className="material-symbols-outlined">public</span>
        </button>
      </div>
      <div className={`${styles.Layout_content} ${mapIsOpened ? styles['--mapIsOpened'] : ''}`}>
        {mapIsOpened && (
          <div className={styles.Layout_content_map}>
            <ShipMap />
          </div>
        )}
        <div className={styles.Layout_content_shipList}>
          <ShipsList searchWords={searchWords} />
        </div>
      </div>
    </>
  );
};
