import Head from 'next/head';
import { useState } from 'react';

import { ShipsList } from './ships-list';
import { SearchBox } from '../../shared/search-box';
import styles from './index.module.scss';
import { ShipMap } from '../../shared/map/ship-map';
import { createShipsFetcher } from '../../../shared/interactors/ships';
import useSWR from 'swr';
import { makeViewModel } from './ships-list/view-model';
import { filterShips } from './ships-list/filter-ships';
import { Ship } from '../../../shared/models/ship/ship';

export const HomePage = (): JSX.Element => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const [mapIsOpened, setMapIsOpened] = useState<boolean>(true);
  const [selected, setSelected] = useState<Ship>();

  const { fetcher, cacheKey } = createShipsFetcher();
  const { data: ships } = useSWR(cacheKey, () => {
    return fetcher();
  });

  const viewModels = ships
    ? filterShips(
        ships.map((v) => makeViewModel(v, selected)),
        searchWords,
      )
    : [];

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
      {viewModels && (
        <div className={`${styles.Layout_content} ${mapIsOpened ? styles['--mapIsOpened'] : ''}`}>
          {mapIsOpened && (
            <div className={styles.Layout_content_map}>
              <ShipMap ships={viewModels} />
            </div>
          )}
          <div className={styles.Layout_content_shipList}>
            <ShipsList ships={viewModels} onSelectShip={(ship) => setSelected(ship)} />
          </div>
        </div>
      )}
    </>
  );
};
