import type { BusinessType } from './business-type';
import type { ServiceType } from './service-type';
import { LatLng } from '../lat-lng/lat-lng';

export interface Ship {
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
  location: LatLng;
  businessType: BusinessType;
  serviceType: ServiceType[];
  fishingType: string[];
  priceTable: { label: string; price: number }[];
}
