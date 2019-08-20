import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByGooGl from './core/getMapUrlWithLatLngByGooGl';
import { LatLngArray } from './lib/types';

/**
 * Get [latitude, longtitude] by gool.gl url
 *
 * @param url gool.gl url
 * @returns Promise<[latitude, longitude]>
 */
function GetLatLngByGooGl(url: string): Promise<LatLngArray | []> {
  return getMapUrlWithLatLngByGooGl(url).then(getLatLngFromMapUrl);
}

export default GetLatLngByGooGl;
