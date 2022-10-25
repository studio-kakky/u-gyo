import styles from './index.module.scss';
import { BusinessType } from '../../../../shared/models/ship/business-type';
import { Ship } from '../../../../shared/models/ship/ship';
import { useEffect, useRef } from 'react';
import { ShipViewModel } from './view-model';

interface Props {
  ships: ShipViewModel[];
  selectedShip?: Ship;
  onSelectShip: (ship: Ship) => void;
}

export const ShipsList = ({ ships, onSelectShip }: Props): JSX.Element => {
  const selectedShipRef = useRef<HTMLLIElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!selectedShipRef.current || !listRef.current) {
      return;
    }

    window.scroll({ top: selectedShipRef.current.offsetTop - listRef.current.offsetTop });
  }, [ships]);

  return (
    <>
      {ships && (
        <ul className={styles.List} ref={listRef}>
          {ships.map((ship) => (
            <li
              className={`${styles.Item} ${ship.isSelected ? styles['--selected'] : ''}`}
              key={ship.id}
              onClick={() => onSelectShip(ship)}
              ref={ship.isSelected ? selectedShipRef : null}
            >
              <div className={styles.Item_place}>
                <p className={styles.Item_prefecture}>{ship.prefecture}</p>
                <p className={styles.Item_area}>{ship.area}</p>
              </div>
              <div className={styles.Item_header}>
                <h3 className={styles.Item_header_h}>{ship.title}</h3>
                <p className={styles.Item_header_businessType}>
                  {ship.businessType === BusinessType.GuideService ? (
                    <>
                      <span className={`material-symbols-outlined ${styles.Item_header_businessType_icon}`}>
                        sailing
                      </span>
                      <span className={styles.Item_header_businessType_text}>ガイド船</span>
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
              </div>

              <p className={styles.Item_fishingType}>{ship.fishingType.join(' , ')}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
