import { GetUrl } from '@geocoder-free/utils/HttpClient';

import getLatLngFromMapUrl from './getLatLngFromMapUrl';
import { LatLngArray } from '../lib/types';

/**
 * Get latitude&longitude from goo.gl/xxxx
 *
 * !! SIDE EFFECT !!
 *
 * @param {*string} googlShortenUrl
 */
function getLatLngFromGooGlUrl(
  googlShortenUrl: string,
): Promise<LatLngArray | []> {
  return GetUrl(googlShortenUrl).then(getLatLngFromMapUrl);
}

export default getLatLngFromGooGlUrl;
