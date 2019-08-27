import { Get } from '../lib/HttpClient';

import getMapUrlWithLatLng from './getMapUrlWithLatLng';

const GET_GEO_BASE_URL = 'https://www.google.com/search?gl=jp&tbm=map&q=';

/**
 * Get google map url with latitude&longitude from address
 *
 * !! SIDE EFFECT !!
 *
 * @param {*string} address
 */
function getMapUrlWithLatLngByAddress(address: string): Promise<string> {
  return Get(`${GET_GEO_BASE_URL}${encodeURIComponent(address)}`, 'text')
    .then(data => data.replace(")]}'", ''))
    .then(getMapUrlWithLatLng);
}

export default getMapUrlWithLatLngByAddress;
