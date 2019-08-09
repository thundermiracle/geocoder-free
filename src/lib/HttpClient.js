const fetch = require('node-fetch');

async function createHeader() {
  return {
    Accept: 'application/json',
  };
}

async function Post(url, data) {
  const headers = await createHeader();
  const res = await fetch(url, {
    credentials: 'same-origin',
    headers,
    method: 'POST',
    body: data,
  });

  const result = await res.json();

  return result;
}

async function Get(url, returnType = 'json') {
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

async function GetUrl(url) {
  const headers = await createHeader();
  const res = await fetch(url, {
    headers,
    method: 'GET',
  });

  return res.url;
}

module.exports = { Post, Get, GetUrl };
