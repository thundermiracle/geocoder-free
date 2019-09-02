import { LatLngArray } from './types';

/**
 * Check if latlng is correct,
 *
 * return false when [NaN, NaN], [NaN, 139], [35, NaN]
 *
 * @param latLng
 */
function isCorrectLatLng(latLng: LatLngArray | []): boolean {
  if (latLng.length === 0) {
    return false;
  }

  const wrongInd = latLng.findIndex(d => Number.isNaN(d));

  return wrongInd < 0;
}

export default isCorrectLatLng;
