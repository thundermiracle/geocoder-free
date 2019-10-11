import fetchNode, { RequestInit } from 'node-fetch';
import fetchJSON from 'fetch-jsonp';

function createHeader(): Promise<object> {
  return Promise.resolve({
    Accept: 'application/json',
  });
}

function getFetchFunc(
  forceNodeFetch: boolean,
): typeof fetchNode | typeof fetchJSON {
  if (forceNodeFetch) {
    return fetchNode;
  }

  if (typeof window === 'undefined') {
    return fetchNode;
  }

  return fetchJSON;
}

async function Post(
  url: string,
  data: object,
  forceNodeFetch = false,
): Promise<string> {
  const headers = await createHeader();

  const fetch = getFetchFunc(forceNodeFetch);
  const res = await fetch(url, {
    credentials: 'same-origin',
    headers,
    method: 'POST',
    body: data,
  } as RequestInit);

  const result = await res.json();

  return result;
}

async function Get(
  url: string,
  returnType = 'json',
  forceNodeFetch = false,
): Promise<string | object> {
  const headers = await createHeader();

  let result;
  if (returnType === 'json') {
    // type=json returns fetch-jsonp
    const fetch = getFetchFunc(forceNodeFetch);
    const res = await fetch(url, {
      headers,
      method: 'GET',
    } as RequestInit);

    result = res.json();
  } else {
    const res = await fetchNode(url, {
      headers,
      method: 'GET',
    } as RequestInit);

    result = await res.text();
  }

  return result;
}

async function GetUrl(url: string): Promise<string> {
  const headers = await createHeader();

  const res = await fetchNode(url, {
    headers,
    method: 'GET',
  } as RequestInit);

  return res.url;
}

export { Post, Get, GetUrl };
