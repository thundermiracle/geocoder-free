const START_STR = 'https://www.google.com/maps';

const REG_MAPURL = new RegExp(`"${START_STR}.*?"`, 'g');
const REG_URL_GPS = new RegExp('".*?/@[0-9].*?"');

/**
 * Get google map url from text which satisfy the following conditions:
 *
 * 1. starts with  https://www.google.com/maps
 * 2. contains /@latitude, longitude (eg: /@35.123)
 *
 * @param {*string} str
 */
export default function getMapUrlWithLatLng(str: string): string {
  const matchesMapUrls = str.match(REG_MAPURL);
  if (matchesMapUrls == null) {
    return '';
  }

  const mapUrlWithGPS = matchesMapUrls.filter(url => REG_URL_GPS.test(url));
  if (mapUrlWithGPS.length === 0) {
    return '';
  }

  // return first one
  const [firstMatch] = mapUrlWithGPS;

  const strPos = firstMatch.indexOf(START_STR);
  const endPos = firstMatch.indexOf('"', strPos);

  return firstMatch.slice(strPos, endPos);
}
