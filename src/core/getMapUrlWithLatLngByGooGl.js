import removePostCode from '../lib/removePostCode';
import getLatLngByDecimalStr from '../lib/getLatLngByDecimalStr';
import getLatLngByDMSStr from '../lib/getLatLngByDMSStr';

import getAddressByGooGl from './getAddressByGooGl';
import getMapUrlWithLatLngByAddress from './getMapUrlWithLatLngByAddress';

/**
 * Get google map url with latitude&longitude by goo.gl/xxx
 *
 * If goo.gl contains geocoding, returns directly,
 *
 * If not, using address in goo.gl and get geocoding by address
 *
 * @param {*string} url
 */
function getMapUrlWithLatLngByGooGl(url) {
  return getAddressByGooGl(url).then(addressOrLatlng => {
    // try get as if it is decimal
    let result = getLatLngByDecimalStr(addressOrLatlng);

    if (result == null) {
      // addressOrLatlng is not decimal, try dms
      result = getLatLngByDMSStr(addressOrLatlng);
    }

    if (result == null) {
      // is address string
      result = getMapUrlWithLatLngByAddress(removePostCode(addressOrLatlng));
    }

    return result instanceof Promise ? result : Promise.resolve(result);
  });
}

export default getMapUrlWithLatLngByGooGl;
