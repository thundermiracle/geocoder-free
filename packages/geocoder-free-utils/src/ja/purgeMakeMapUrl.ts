import removeSpace from '../lib/removeSpace';
import purgeAddress from './purgeAddress';
import cutToBlockNumber from './cutToBlockNumber';

export default function purgeMakeMapUrl(
  address: string,
  prefix: string,
  mapBaseUrl: string,
  fDelSpace = false,
): string {
  const addressAft = purgeAddress(address);
  let addressForMap = `${prefix || ''}${cutToBlockNumber(addressAft)}`;
  if (fDelSpace) {
    addressForMap = removeSpace(addressForMap);
  }
  const result = `${mapBaseUrl}${encodeURIComponent(addressForMap)}`;

  return result;
}
