import cutToBlockNumber from './cutToBlockNumber';

function getAddressForMap(orgAddress: string, prefix = ''): string {
  return `${prefix}${cutToBlockNumber(orgAddress)}`;
}

export default getAddressForMap;
