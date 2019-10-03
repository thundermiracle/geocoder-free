import getGeoInfoByYOLP from './core/getGeoInfoByYOLP';
import getLatLngFromYOLPGeoInfo from './core/getLatLngFromYOLPGeoInfo';
import { LatLngArray } from './lib/types';

/**
 * Get [latitude, longtitude] by address with YOLP
 *
 * @param appid
 * @param address
 * @returns Promise<[latitude, longitude]>
 */
function GetLatLngByAPI(
  appid: string,
  address: string,
): Promise<LatLngArray | []> {
  return getGeoInfoByYOLP(appid, address).then(getLatLngFromYOLPGeoInfo);
}

export default GetLatLngByAPI;
