import { getLatLngByDecimalStr } from '@geocoder-free/utils';
import { GeoInfo, LatLngArray } from '../lib/types';

function getLatLngFromYOLPGeoInfo(geoInfo: GeoInfo): [] | LatLngArray {
  if (Object.keys(geoInfo).length === 0) {
    return [];
  }

  if (geoInfo.ResultInfo.Count === 0 || geoInfo.Feature == null) {
    return [];
  }

  const [firstFeature] = geoInfo.Feature;
  const result = getLatLngByDecimalStr(firstFeature.Geometry.Coordinates);
  if (result == null) {
    return [];
  }

  const [lng, lat] = result;

  return [lat, lng];
}

export default getLatLngFromYOLPGeoInfo;
