import { LatLngArray } from '../lib/types';

/**
 * Parse google url string, return GPS array
 *
 * eg: https://google.com/maps/xxxxx/@35.123,136.123,17z/xxxxxxx
 *    returns
 *    [35.123, 136.123]
 *
 * @param {*string/array} url
 *
 * @returns array
 */
export default function getLatLngFromMapUrl(
  url: string | LatLngArray,
): LatLngArray | [] {
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
