import { Get, GetUrl } from 'lib/HttpClient';
import GetLatLon from 'lib/parseGoogleMapUrl';
import isLatLng from 'lib/isLatLng';
import getMapUrlWithGPS from 'lib/getMapUrlWithGPS';

const GET_GEO_BASE_URL = 'https://www.google.com/search?gl=jp&tbm=map&q=';

const GOOGL_START_PLACE = 'https://www.google.com/maps/place/';
const GOOGL_START_Q = 'https://www.google.com/maps?q=';

function GetAddressUrlPlace(url) {
  const startAddressUrl = url.replace(GOOGL_START_PLACE, '');

  return startAddressUrl.substr(0, startAddressUrl.indexOf('/@'));
}

function GetAddressUrlQ(url) {
  const startAddressUrl = url.replace(GOOGL_START_Q, '');

  return startAddressUrl.substr(0, startAddressUrl.indexOf('&'));
}

function GetAddressUrl(url) {
  if (url.startsWith(GOOGL_START_PLACE)) {
    return GetAddressUrlPlace(url);
  }

  if (url.startsWith(GOOGL_START_Q)) {
    return GetAddressUrlQ(url);
  }

  return '';
}

// !! Side Effect
function GetAddressByGooGl(googlShortenUrl) {
  return GetUrl(googlShortenUrl)
    .then(GetAddressUrl)
    .then(decodeURIComponent);
}

// !! Side Effect
function GetUrlWithLatLonByAddress(address) {
  return Get(`${GET_GEO_BASE_URL}${encodeURIComponent(address)}`, 'text')
    .then(data => data.replace(")]}'", ''))
    .then(getMapUrlWithGPS);
}

function GetUrlWithLatLonByGooGl(url) {
  return GetAddressByGooGl(url).then(addressOrLatlng => {
    if (isLatLng(addressOrLatlng)) {
      // GPS info in url
      const [latitude, longitude] = addressOrLatlng.split(',');
      return Promise.resolve([+latitude, +longitude]);
    }

    return GetUrlWithLatLonByAddress(addressOrLatlng);
  });
}

function GetLatLonByAddress(address) {
  return GetUrlWithLatLonByAddress(address).then(GetLatLon);
}

function GetLatLonByGooGl(url) {
  return GetUrlWithLatLonByGooGl(url).then(GetLatLon);
}

export {
  GetAddressByGooGl,
  GetUrlWithLatLonByAddress,
  GetUrlWithLatLonByGooGl,
  GetLatLonByAddress,
  GetLatLonByGooGl,
};
