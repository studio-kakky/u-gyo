import { makeUrl } from './make-url';
import { BaseHttpParams } from '../../models/http/base-http-params';

describe('makeUrl', () => {
  const paramsList = [
    {
      endpointUrl: '/dummy/path/:key1/to',
      getParams: {
        headers: {},
        pathParams: { key1: 123 },
      } as BaseHttpParams,
      expected: '/dummy/path/123/to',
    },
    {
      endpointUrl: '/dummy/path/:key2/to',
      getParams: {
        headers: {},
        pathParams: { key2: 'value' },
      } as BaseHttpParams,
      expected: '/dummy/path/value/to',
    },
    {
      endpointUrl: '/dummy/path/:key3_1/to/:key3_2',
      getParams: {
        headers: {},
        pathParams: { key3_1: 'value1', key3_2: 'value2' },
      } as BaseHttpParams,
      expected: '/dummy/path/value1/to/value2',
    },
  ];

  paramsList.forEach((v) => {
    test(`${v.endpointUrl}をパラメーターで適切に置換できる`, () => {
      expect(makeUrl(v.endpointUrl, v.getParams)).toEqual(v.expected);
    });
  });
});
