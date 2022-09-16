export interface SourceData {
  名前: string;
  県: string;
  エリア: string;
  住所: string;
  電話番号: string;
  代表: string;
  ホームページ: string;
  釣果: string;
  Facebook: string;
  Line: string;
  instagram: string;
  座標: [number, number];
  遊魚種別: "ガイド船" | "遊漁船";
  予約種別: ("仕立て" | "乗合")[];
  釣りもの: string[];
  料金: {
    label: string;
    price: number;
  }[];
}
