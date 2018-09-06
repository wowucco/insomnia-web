/**
 * Created by wowucco on 06.09.18.
 */
import fetch from 'cross-fetch';
import buildUrl from 'build-url';

const HOST = 'http://localhost:8080';
const baseOptions = {
  path: '',
  params: {},
  dispatch: ''
};

export function request(options) {
  options = {...baseOptions, ...options};
  let url = buildUrl(options.host || HOST, {
    path: options.path,
    queryParams: options.params
  });
  return fetch(url);
}
