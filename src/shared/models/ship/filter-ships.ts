import { Ship } from './ship';
import { BusinessType } from './business-type';

const match = (ship: Ship, words: string[]) => {
  const businessType = ship.businessType === BusinessType.GuideService ? 'ガイド' : '遊魚';
  const source = [ship.title, ship.address, businessType, ship.prefecture, ship.area, ship.fishingType.join('')].join(
    '',
  );

  return words.every((word) => source.includes(word));
};

export const filterShips = (ships: Ship[], words?: string[]) => {
  if (!words || words.length === 0) {
    return ships;
  }

  return ships.filter((v) => match(v, words));
};
