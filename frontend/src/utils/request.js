import 'whatwg-fetch';
import { browserHistory } from 'react-router';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 403 || response.status === 401) {
    browserHistory.push('/login');
  }

  return response.json().then(json => Promise.reject(json));
}

function getUrl(urlSegment) {
  const rootUrl = process.env.API_URL;
  return `${rootUrl}/${urlSegment}`;
}

function patchThrough(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const initVal = { status: response.status };
  return response
    .json()
    .then(json => Promise.reject(Object.assign(json, initVal)));
}

export function requestJSON(
  urlSegment,
  payload,
  token,
  method,
  options,
  handleErrors,
) {
  const url = getUrl(urlSegment);

  let opts = options;
  if (!opts) {
    opts = {};
  }
  if (payload) {
    opts.body = JSON.stringify(payload);
  }

  opts.method = method;

  if (!opts.headers) {
    opts.headers = {
      'Content-Type': 'application/json',
    };
  }

  if (token) {
    opts.headers = Object.assign(
      { Authorization: `Bearer ${token}` },
      opts.headers,
    );
  }

  if (handleErrors) {
    return fetch(url, opts)
      .then(patchThrough)
      .then(parseJSON);
  }

  return fetch(url, opts)
    .then(checkStatus)
    .then(parseJSON);
}

export function requestMultipart(urlSegment, file, payload, token, options) {
  const url = getUrl(urlSegment);

  // const file = { uri: filepath, name: 'file', type: 'multipart/form-data' };
  const formdata = new FormData();

  formdata.append('file', file);
  for (const k in payload) {
    formdata.append(k, payload[k]);
  }

  let opts = options;
  if (!opts) {
    opts = { method: 'POST', 'Content-Type': 'multipart/form-data' };
  }
  if (token) {
    opts.headers = Object.assign(
      { Authorization: `Bearer ${token}` },
      opts.headers,
    );
  }

  opts.body = formdata;

  return fetch(url, opts)
    .then(checkStatus)
    .then(parseJSON);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => error);
}
