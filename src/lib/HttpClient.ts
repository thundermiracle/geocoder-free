import fetch, { RequestInit } from 'node-fetch';

async function createHeader() {
  return {
    Accept: 'application/json',
  };
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

async function Get(url: string, returnType = 'json'): Promise<string> {
  const headers = await createHeader();
  const res = await fetch(url, {
    headers,
    method: 'GET',
  });

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
  });

  return res.url;
}

export { Post, Get, GetUrl };
