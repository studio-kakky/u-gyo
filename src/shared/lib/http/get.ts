import { GetHttpParams } from "../../models/http/get-http-params";
import { makeUrl } from "./make-url";

export const httpGet = <T>(
  endpointUrl: string,
  params: GetHttpParams
): Promise<T> => {
  const search = params.searchParams
    ? `?${params.searchParams.toString()}`
    : "";
  const url = `${makeUrl(endpointUrl, params)}${search}`;
  return fetch(url, {
    headers: params.headers,
  }).then((res) => {
    return res.json();
  });
};
