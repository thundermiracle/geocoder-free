function parseGoogleMapUrl(url) {
  if (Array.isArray(url)) {
    return url;
  }

  const strPos = url.indexOf('/@');
  if (strPos === -1) {
    return [];
  }

  const endPos = url.indexOf('/', strPos + 1);
  const geoInfo = url.slice(strPos + 2, endPos + 1);

  const [latitude, longitude] = geoInfo.split(',');

  return [+latitude, +longitude];
}

module.exports = parseGoogleMapUrl;
