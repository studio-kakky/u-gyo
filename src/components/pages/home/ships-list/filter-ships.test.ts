import { BusinessType } from '../../../../shared/models/ship/business-type';
import { ServiceType } from '../../../../shared/models/ship/service-type';
import { filterShips } from './filter-ships';
import { makeViewModel } from './view-model';

const dummyShips = [
  {
    id: 'dummy1',
    prefecture: '神奈川県',
    area: 'アジア',
    title: 'タイトルシップ',
    address: '横浜市アドレス',
    tel: '123',
    representative: '代表者',
    webSite: null,
    catches: null,
    facebook: null,
    line: null,
    instagram: null,
    location: {
      lat: 1,
      lng: 1,
    },
    businessType: BusinessType.GuideService,
    serviceType: [ServiceType.Shared],
    fishingType: ['タイ', 'わらさ'],
    priceTable: [
      {
        label: 'プライス１',
        price: 1,
      },
    ],
  },
  {
    id: 'dummy2',
    prefecture: '神奈川県',
    area: '大西洋',
    title: '遊魚太郎',
    address: '川崎市ハーバード',
    tel: '123',
    representative: '代表者',
    webSite: null,
    catches: null,
    facebook: null,
    line: null,
    instagram: null,
    location: {
      lat: 1,
      lng: 1,
    },
    businessType: BusinessType.Standard,
    serviceType: [ServiceType.Shared],
    fishingType: ['タイ', '鱈'],
    priceTable: [
      {
        label: 'プライス１',
        price: 1,
      },
    ],
  },

  {
    id: 'dummy3',
    prefecture: '神奈川県',
    area: '大西洋',
    title: '遊魚太郎',
    address: '川崎市えいどりあん',
    tel: '123',
    representative: '代表者',
    webSite: null,
    catches: null,
    facebook: null,
    line: null,
    instagram: null,
    location: {
      lat: 1,
      lng: 1,
    },
    businessType: BusinessType.Standard,
    serviceType: [ServiceType.Shared],
    fishingType: ['アジ', '鱈'],
    priceTable: [
      {
        label: 'プライス１',
        price: 1,
      },
    ],
  },
  {
    id: 'dummy4',
    prefecture: '東京都',
    area: '大西洋',
    title: 'ガイドイチロー',
    address: '大田区ハーバード',
    tel: '123',
    representative: '代表者',
    webSite: null,
    catches: null,
    facebook: null,
    line: null,
    instagram: null,
    location: {
      lat: 1,
      lng: 1,
    },
    businessType: BusinessType.Standard,
    serviceType: [ServiceType.Shared],
    fishingType: ['アジ', 'ブリ'],
    priceTable: [
      {
        label: 'プライス１',
        price: 1,
      },
    ],
  },
].map((v) => makeViewModel(v));

describe('filterShips', () => {
  describe('単一単語の検索が正しくできる', () => {
    test('県からの部分一致', () => {
      const filtered = filterShips(dummyShips, ['奈川']).map((v) => v.id);
      expect(filtered).toEqual(['dummy1', 'dummy2', 'dummy3']);
    });
    test('県からの完全一致', () => {
      const filtered = filterShips(dummyShips, ['神奈川県']).map((v) => v.id);
      expect(filtered).toEqual(['dummy1', 'dummy2', 'dummy3']);
    });

    test('住所からの一致', () => {
      const filtered = filterShips(dummyShips, ['川崎']).map((v) => v.id);
      expect(filtered).toEqual(['dummy2', 'dummy3']);
    });

    test('釣種からの一致', () => {
      const filtered = filterShips(dummyShips, ['タイ']).map((v) => v.id);
      expect(filtered).toEqual(['dummy1', 'dummy2']);
    });
  });
  describe('複数単語でand検索', () => {
    test('住所フィールドで複数単語検索', () => {
      const filtered = filterShips(dummyShips, ['川崎', 'ハーバー']).map((v) => v.id);
      expect(filtered).toEqual(['dummy2']);
    });

    test('住所と釣種フィールドで複数単語検索', () => {
      const filtered = filterShips(dummyShips, ['川崎', 'アジ']).map((v) => v.id);
      expect(filtered).toEqual(['dummy3']);
    });
  });

  describe('カタカナ、ひらがなの区別なく検索できる', () => {
    test('ひらがなにカタカナがマッチする', () => {
      const filtered = filterShips(dummyShips, ['はーばーど']).map((v) => v.id);
      expect(filtered).toEqual(['dummy2', 'dummy4']);
    });
    test('カタカナにひらがながマッチする', () => {
      const filtered = filterShips(dummyShips, ['エイドリアン']).map((v) => v.id);
      expect(filtered).toEqual(['dummy3']);
    });
  });
});
