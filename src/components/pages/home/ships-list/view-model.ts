import { Ship } from '../../../../shared/models/ship/ship';
import { BusinessType } from '../../../../shared/models/ship/business-type';
import { replaceHiraganaToKatakana } from '../../../../shared/lib/replace-hiragana-to-katakana';

export interface ShipViewModel extends Ship {
  searchField: string;
  isSelected: boolean;
}

export const makeViewModel = (ship: Ship, selectedShip?: Ship): ShipViewModel => {
  const businessType = ship.businessType === BusinessType.GuideService ? 'ガイド' : '遊魚';
  const searchField = [ship.title, ship.address, businessType, ship.prefecture, ship.area, ship.fishingType.join('')]
    .join('')
    .toLowerCase();

  return {
    ...ship,
    searchField: replaceHiraganaToKatakana(searchField),
    isSelected: !selectedShip ? false : ship.id === selectedShip.id,
  };
};
