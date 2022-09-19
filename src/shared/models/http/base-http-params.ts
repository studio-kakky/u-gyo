export interface BaseHttpParams {
  headers: Record<string, string>;
  pathParams: Record<string, string | number>;
}
