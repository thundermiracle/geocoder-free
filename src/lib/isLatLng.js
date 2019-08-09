/**
 * check if input is latlng. -> (35.123, 149.123)
 * @param {*string} str
 */
export default function isLatLng(str) {
  const [lat, lng] = str.split(',');

  if (lat == null || lng == null || Number.isNaN(+lat) || Number.isNaN(+lng)) {
    return false;
  }

  return true;
}
