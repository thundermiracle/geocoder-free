/**
 * remove unecessary post code info
 *
 * @param {*string} addressWithPostCode
 */
export default function removePostCode(addressWithPostCode: string): string {
  return addressWithPostCode.replace(/〒.*?\+/, '');
}
