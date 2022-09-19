import { BaseHttpParams } from "../../models/http/base-http-params";

export const makeUrl = (
  endpointUrl: string,
  params: BaseHttpParams
): string => {
  return Object.entries(params.pathParams).reduce((output, [key, value]) => {
    const pattern = `:${key}`;
    return output.replace(pattern, value.toString());
  }, endpointUrl);
};
