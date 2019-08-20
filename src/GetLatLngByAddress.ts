import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByAddress from './core/getMapUrlWithLatLngByAddress';
import { LatLngArray } from './lib/types';

/**
 * Get [latitude, longtitude] by address
 *
 * @param address
 * @returns Promise<[latitude, longitude]>
 */
function GetLatLngByAddress(address: string): Promise<LatLngArray | []> {
  return getMapUrlWithLatLngByAddress(address).then(getLatLngFromMapUrl);
}

export default GetLatLngByAddress;
