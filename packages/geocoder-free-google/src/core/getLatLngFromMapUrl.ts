import { isCorrectLatLng } from '@geocoder-free/utils';
import { LatLngArray } from '../lib/types';

/**
 *  eg: https://google.com/maps/xxxxx/@35.123,136.123,17z/xxxxxxx
 *    returns
 *    [35.123, 136.123]
 * @param url string
 */
function getLatLngByAtSign(url: string): LatLngArray | [] {
  const strPos = url.indexOf('/@');
  if (strPos === -1) {
    return [];
  }

  const endPos = url.indexOf('/', strPos + 1);
  const geoInfo = url.slice(strPos + 2, endPos + 1);

  const [latitude, longitude] = geoInfo.split(',');

  return [+latitude, +longitude];
}

/**
 * eg: https://www.google.com/maps/place/35%C2%B039%2731.3%22N+139%C2%B044%2740.3%22E/@35.6587023,139.742332,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d35.6586982!4d139.7445263?shorturl=1
 *
 * @param url string
 */
function getLatLngBy3d(url: string): LatLngArray | [] {
  const strPos = url.indexOf('!3d');
  if (strPos === -1) {
    return [];
  }

  const endPos = url.indexOf('?', strPos + 1);
  const geoInfo = url.slice(strPos + 3, endPos > -1 ? endPos : undefined);

  const [latitude, longitude] = geoInfo.split('!4d');

  return [+latitude, +longitude];
}

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

  let result = [];

  result = getLatLngBy3d(url);

  if (!isCorrectLatLng(result)) {
    result = getLatLngByAtSign(url);
  }

  return isCorrectLatLng(result) ? result : [];
}
