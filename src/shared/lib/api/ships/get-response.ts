import { BusinessType } from "../../../models/ship/business-type";
import { ServiceType } from "../../../models/ship/service-type";

export interface ShipResponse {
  id: string;
  prefecture: string;
  area: string;
  title: string;
  address: string;
  tel: string;
  representative: string;
  webSite: string | null;
  catches: string | null;
  facebook: string | null;
  line: string | null;
  instagram: string | null;
  location: {
    lat: number;
    lng: number;
  };
  businessType: BusinessType;
  serviceType: ServiceType[];
  fishingType: string[];
  priceTable: { label: string; price: number }[];
}

export type ShipGetResponse = ShipResponse[];
