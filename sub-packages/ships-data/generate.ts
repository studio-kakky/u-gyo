import { SourceData } from "./source-data";
import type { Ship } from "../../src/shared/models/ship/ship";
import { BusinessType } from "../../src/shared/models/ship/business-type";
import { ServiceType } from "../../src/shared/models/ship/service-type";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join, basename } from "path";

const adapt = (source: SourceData, id: string): Ship => {
  return {
    id,
    prefecture: source.県,
    area: source.エリア,
    title: source.名前,
    address: source.住所,
    tel: source.電話番号,
    representative: source.代表,
    webSite: source.ホームページ || null,
    catches: source.釣果 || null,
    facebook: source.Facebook || null,
    line: source.Line || null,
    instagram: source.instagram || null,
    location: {
      lat: source.座標[0],
      lng: source.座標[1],
    },
    businessType:
      source.遊魚種別 === "ガイド船"
        ? BusinessType.GuideService
        : BusinessType.Standard,
    serviceType: source.予約種別.map((v) => {
      return v === "仕立て" ? ServiceType.PrivateCharter : ServiceType.Shared;
    }),
    fishingType: source.釣りもの,
    priceTable: source.料金,
  };
};

const getFileList = (dir: string): string[] => {
  return readdirSync(dir, { withFileTypes: true }).flatMap((v) => {
    return v.isFile() ? [join(dir, v.name)] : getFileList(join(dir, v.name));
  });
};

const getDirName = (path: string): string => {
  const split = path.split("/");
  return split[split.length - 2];
};

(async () => {
  const filePaths = getFileList(`${__dirname}/sources`);
  const ships = filePaths.map((path) => {
    const rawData = JSON.parse(readFileSync(path, "utf8"));
    const id = `${getDirName(path)}-${basename(path)}`.replace(
      /\.[a-zA-Z]*/,
      ""
    );
    return adapt(rawData, id);
  });

  const dir = `${__dirname}/../../src/generated/`;
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  writeFileSync(`${dir}ships.json`, JSON.stringify(ships));
})();
