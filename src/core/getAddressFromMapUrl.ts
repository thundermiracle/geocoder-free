const GOOGL_START_PLACE = 'https://www.google.com/maps/place/';
const GOOGL_START_Q = 'https://www.google.com/maps?q=';

function GetAddressFromUrlPlace(url: string): string {
  const startAddressUrl = url.replace(GOOGL_START_PLACE, '');

  return startAddressUrl.substr(0, startAddressUrl.indexOf('/@'));
}

function GetAddressFromUrlQ(url: string): string {
  const startAddressUrl = url.replace(GOOGL_START_Q, '');

  return startAddressUrl.substr(0, startAddressUrl.indexOf('&'));
}

/**
 * Retrieve address from google map url string(without decoding)
 *
 * eg1: https://www.google.com/maps/place/1-2-3shinjyuku,tokyo/@xxxxx
 *     returns
 *     1-2-3shinjyuku,tokyo
 *
 * eg2: https://www.google.com/maps?q=1-2-3shinjyuku,tokyo&xxxxx
 *     returns
 *     1-2-3shinjyuku,tokyo
 *
 * @param {*string} url
 */
function getAddressFromMapUrl(url: string): string {
  if (url.startsWith(GOOGL_START_PLACE)) {
    return GetAddressFromUrlPlace(url);
  }

  if (url.startsWith(GOOGL_START_Q)) {
    return GetAddressFromUrlQ(url);
  }

  return '';
}

export default getAddressFromMapUrl;
