import { BaseHttpParams } from "./base-http-params";

export interface GetHttpParams extends BaseHttpParams {
  searchParams?: URLSearchParams;
}
