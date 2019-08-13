import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByAddress from './core/getMapUrlWithLatLngByAddress';

function GetLatLngByAddress(address) {
  return getMapUrlWithLatLngByAddress(address).then(getLatLngFromMapUrl);
}

export default GetLatLngByAddress;
