const API_URL = __myapp.env.isProd
  ? __myapp.env.API_URL
  : 'https://my-json-server.typicode.com/vikbert/jsonfaker/books';

export function httpGet(path) {
  return request(path, 'GET');
}

export function httpPut(path, data) {
  return request(path, 'PUT', data);
}

export function httpPost(path, data) {
  return request(path, 'POST', data);
}

async function request(path, method, data) {
  const res = await fetch(API_URL + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  });

  const json = await res.json();

  return {
    ok: res.ok,
    data: json,
  };
}
