import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByGooGl from './core/getMapUrlWithLatLngByGooGl';

/**
 * Get [latitude, longtitude] by gool.gl url
 *
 * @param url gool.gl url
 * @returns Promise<[latitude, longitude]>
 */
function GetLatLngByGooGl(url: string) {
  return getMapUrlWithLatLngByGooGl(url).then(getLatLngFromMapUrl);
}

export default GetLatLngByGooGl;
