import getLatLngFromMapUrl from './core/getLatLngFromMapUrl';
import getMapUrlWithLatLngByGooGl from './core/getMapUrlWithLatLngByGooGl';

function GetLatLngByGooGl(url) {
  return getMapUrlWithLatLngByGooGl(url).then(getLatLngFromMapUrl);
}

export default GetLatLngByGooGl;
