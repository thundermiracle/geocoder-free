import removePostCode from '../lib/removePostCode';
import getLatLngByDecimalStr from '../lib/getLatLngByDecimalStr';
import getLatLngByDMSStr from '../lib/getLatLngByDMSStr';

import getAddressByGooGl from './getAddressByGooGl';
import getMapUrlWithLatLngByAddress from './getMapUrlWithLatLngByAddress';
import { LatLngArray } from '../lib/types';

/**
 * Get google map url with latitude&longitude by goo.gl/xxx
 *
 * If goo.gl contains geocoding, returns [latitude, longitude],
 *
 * If not, using address in goo.gl and get geocoding by address
 *
 * @param {*string} url
 */
function getMapUrlWithLatLngByGooGl(url: string) {
  return getAddressByGooGl(url).then(
    (addressOrLatlng: string): Promise<string | LatLngArray> => {
      // try get as if it is decimal
      let result = getLatLngByDecimalStr(addressOrLatlng);

      if (result == null) {
        // addressOrLatlng is not decimal, try dms
        result = getLatLngByDMSStr(addressOrLatlng);
      }

      if (result == null) {
        // is address string
        return getMapUrlWithLatLngByAddress(removePostCode(addressOrLatlng));
      }

      return Promise.resolve(result);
    },
  );
}

export default getMapUrlWithLatLngByGooGl;
