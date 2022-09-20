import { ShipViewModel } from './view-model';
import { replaceHiraganaToKatakana } from '../../../../shared/lib/replace-hiragana-to-katakana';

const match = (ship: ShipViewModel, words: string[]) => {
  return words.every((word) => ship.searchField.includes(word.toLowerCase()));
};

export const filterShips = (ships: ShipViewModel[], words?: string[]) => {
  if (!words || words.length === 0) {
    return ships;
  }

  const adaptedWords = words.map((v) => replaceHiraganaToKatakana(v));

  return ships.filter((v) => match(v, adaptedWords));
};
