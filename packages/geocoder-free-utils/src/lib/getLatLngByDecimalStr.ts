import { LatLngArray } from './types';

/**
 * get latitude&longtitude array from decimal latlng string
 *
 * '35.123, 149.123' -> [35.123, 149.123]
 *
 * returns null if no matches found
 *
 * @param {*string} deciamlStr
 */
export default function getLatLngByDecimalStr(
  deciamlStr: string,
): LatLngArray | null {
  if (!deciamlStr) {
    return null;
  }

  const [lat, lng] = deciamlStr.split(',');

  if (lat == null || lng == null || Number.isNaN(+lat) || Number.isNaN(+lng)) {
    return null;
  }

  return [+lat, +lng];
}
