import { shipsEndpointUrl, shipsGet } from "../../lib/api/ships/get";
import { CreateFetcher, Fetcher } from "../fetcher";
import { Ship } from "../../models/ship/ship";

export const createShipsFetcher: CreateFetcher<Ship[]> = (): {
  fetcher: Fetcher<Ship[]>;
  cacheKey: string;
} => {
  const fetcher = () => {
    return shipsGet();
  };

  return {
    fetcher,
    cacheKey: shipsEndpointUrl,
  };
};
