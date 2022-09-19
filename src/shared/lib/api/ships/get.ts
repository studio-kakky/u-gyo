import { GetHttpParams } from "../../../models/http/get-http-params";
import { ShipGetResponse } from "./get-response";
import { httpGet } from "../../http/get";

export const shipsEndpointUrl = "/api/ships";
export const shipsGet = (): Promise<ShipGetResponse> => {
  const params: GetHttpParams = {
    headers: {},
    pathParams: {},
  };

  return httpGet<ShipGetResponse>(shipsEndpointUrl, params);
};
