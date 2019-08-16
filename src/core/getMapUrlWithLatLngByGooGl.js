import isLatLng from '../lib/isLatLng';
import removePostCode from '../lib/removePostCode';

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
    if (isLatLng(addressOrLatlng)) {
      // Geocoding info in url
      const [latitude, longitude] = addressOrLatlng.split(',');
      return Promise.resolve([+latitude, +longitude]);
    }

    return getMapUrlWithLatLngByAddress(removePostCode(addressOrLatlng));
  });
}

export default getMapUrlWithLatLngByGooGl;
