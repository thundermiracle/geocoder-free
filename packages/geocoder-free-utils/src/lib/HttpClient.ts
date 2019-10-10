import fetch, { RequestInit } from 'node-fetch';

function createHeader(): Promise<object> {
  return Promise.resolve({
    Accept: 'application/json',
  });
}

async function Post(url: string, data: object): Promise<string> {
  const headers = await createHeader();

  const res = await fetch(url, {
    credentials: 'same-origin',
    headers,
    method: 'POST',
    body: data,
  } as RequestInit);

  const result = await res.json();

  return result;
}

async function Get(url: string, returnType = 'json'): Promise<string | object> {
  const headers = await createHeader();
  const res = await fetch(url, {
    headers,
    method: 'GET',
  } as RequestInit);

  let result;
  if (returnType === 'json') {
    result = await res.json();
  } else {
    result = await res.text();
  }

  return result;
}

async function GetUrl(url: string): Promise<string> {
  const headers = await createHeader();
  const res = await fetch(url, {
    headers,
    method: 'GET',
  } as RequestInit);

  return res.url;
}

export { Post, Get, GetUrl };
