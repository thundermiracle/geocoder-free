export default function isLatLng(str) {
  const [lat, lng] = str.split(',');

  if (lat == null || lng == null || Number.isNaN(+lat) || Number.isNaN(+lng)) {
    return false;
  }

  return true;
}
