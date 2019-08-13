import { GetUrl } from '../lib/HttpClient';

import getAddressFromMapUrl from './getAddressFromMapUrl';

/**
 * Get address from goo.gl/xxxx
 *
 * !! SIDE EFFECT !!
 *
 * @param {*string} googlShortenUrl
 */
function getAddressByGooGl(googlShortenUrl) {
  return GetUrl(googlShortenUrl)
    .then(getAddressFromMapUrl)
    .then(decodeURIComponent);
}

export default getAddressByGooGl;
