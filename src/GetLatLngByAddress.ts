import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByAddress from './core/getMapUrlWithLatLngByAddress';

/**
 * Get [latitude, longtitude] by address
 *
 * @param address
 * @returns Promise<[latitude, longitude]>
 */
function GetLatLngByAddress(address: string) {
  return getMapUrlWithLatLngByAddress(address).then(getLatLngFromMapUrl);
}

export default GetLatLngByAddress;
