import { GetUrl } from '@geocoder-free/utils/HttpClient';

import getAddressFromMapUrl from './getAddressFromMapUrl';

/**
 * Get address from goo.gl/xxxx
 *
 * !! SIDE EFFECT !!
 *
 * @param {*string} googlShortenUrl
 */
function getAddressByGooGl(googlShortenUrl: string): Promise<string> {
  return GetUrl(googlShortenUrl)
    .then(getAddressFromMapUrl)
    .then(decodeURIComponent);
}

export default getAddressByGooGl;
