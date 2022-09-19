import useSWR from 'swr';
import { createShipsFetcher } from '../../../../shared/interactors/ships';
import styles from './index.module.scss';
import { BusinessType } from '../../../../shared/models/ship/business-type';
import { filterShips } from '../../../../shared/models/ship/filter-ships';

interface Props {
  searchWords?: string[];
}

export const ShipsList = ({ searchWords }: Props): JSX.Element => {
  const { fetcher, cacheKey } = createShipsFetcher();
  const { data: ships } = useSWR(cacheKey, fetcher);

  const filtered = ships ? filterShips(ships, searchWords) : [];

  return (
    <>
      {filtered && (
        <ul className={styles.List}>
          {filtered.map((ship) => (
            <li className={styles.Item} key={ship.id}>
              <div className={styles.Item_place}>
                <p className={styles.Item_prefecture}>{ship.prefecture}</p>
                <p className={styles.Item_area}>{ship.area}</p>
              </div>
              <h3 className={styles.Item_h}>{ship.title}</h3>
              <p className={styles.Item_businessType}>
                {ship.businessType === BusinessType.GuideService ? (
                  <>
                    <span className={`material-symbols-outlined ${styles.Item_businessType_icon}`}>sailing</span>
                    <span className={styles.Item_businessType_text}>ガイド船</span>
                  </>
                ) : (
                  <>
                    <span className={`material-symbols-outlined ${styles.Item_businessType_icon}`}>
                      directions_boat
                    </span>
                    <span className={styles.Item_businessType_text}>遊漁船</span>
                  </>
                )}
              </p>

              <p className={styles.Item_fishingType}>{ship.fishingType.join(' , ')}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
