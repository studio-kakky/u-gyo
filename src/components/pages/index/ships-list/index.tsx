import useSWR from 'swr';
import { createShipsFetcher } from '../../../../shared/interactors/ships';
import styles from './index.module.scss';

export const ShipsList = (): JSX.Element => {
  const { fetcher, cacheKey } = createShipsFetcher();
  const { data: ships } = useSWR(cacheKey, fetcher);

  return (
    <>
      {ships && (
        <ul className={styles.List}>
          {ships.map((ship) => (
            <li className={styles.Item} key={ship.id}>
              <div className={styles.Item_place}>
                <p className={styles.Item_prefecture}>{ship.prefecture}</p>
                <p className={styles.Item_area}>{ship.area}</p>
              </div>
              <h3 className={styles.Item_h}>{ship.title}</h3>
              <p className={styles.Item_fishingType}>{ship.fishingType.join(' , ')}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
