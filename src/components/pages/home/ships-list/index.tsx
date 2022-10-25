import styles from './index.module.scss';
import { BusinessType } from '../../../../shared/models/ship/business-type';
import { Ship } from '../../../../shared/models/ship/ship';

interface Props {
  ships: Ship[];
  selectedShip?: Ship;
  onSelectShip: (ship: Ship) => void;
}

const isSame = (v1: Ship | undefined, v2: Ship | undefined): boolean => {
  if (!v1 || !v2) {
    return false;
  }

  return v1.id === v2.id;
};

export const ShipsList = ({ ships, selectedShip, onSelectShip }: Props): JSX.Element => {
  return (
    <>
      {ships && (
        <ul className={styles.List}>
          {ships.map((ship) => (
            <li
              className={`${styles.Item} ${isSame(ship, selectedShip) ? styles['--selected'] : ''}`}
              key={ship.id}
              onClick={() => onSelectShip(ship)}
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
