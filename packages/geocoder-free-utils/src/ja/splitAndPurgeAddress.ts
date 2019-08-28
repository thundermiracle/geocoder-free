import { splitAddressTransformer } from './rules';

export default function splitAndPurgeAddress(address: string): string {
  return (
    address
      .split(' ')
      // remove extra spaces
      .filter(ad => ad !== '')
      .map(splitAddressTransformer)
      .join(' ')
  );
}
