import { Get } from '../lib/HttpClient';
import { GeoInfo } from '../lib/types';

const GET_GEO_BASE_URL = `https://map.yahooapis.jp/geocode/V1/geoCoder?output=json&recursive=true&appid={appid}&query={query}`;

/**
 * Get google map url with latitude&longitude from address
 *
 * !! SIDE EFFECT !!
 *
 * @param {*string} address
 */
function getGeoInfoByYOLP(appid: string, query: string): Promise<GeoInfo> {
  const url = GET_GEO_BASE_URL.replace('{appid}', appid).replace(
    '{query}',
    encodeURIComponent(query),
  );

  return Get(url, 'json').then(obj => obj as GeoInfo);
}

export default getGeoInfoByYOLP;
