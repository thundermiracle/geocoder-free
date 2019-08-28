/**
 * 新宿区 2-3-1 新宿ビル305　→　新宿区 2-3-1
 * 新宿区2-3-1 新宿ビル305　→　新宿区2-3-1
 */
export default function cutToBlockNumber(address: string): string {
  const result = [];
  const splittedAddresses = address.split(' ');

  for (let index = 0; index < splittedAddresses.length; index += 1) {
    const onePart = splittedAddresses[index];
    const lastChar = onePart.slice(-1);

    if (Number.isInteger(+lastChar)) {
      // push until find first number-end string
      result.push(onePart);
      break;
    }

    result.push(onePart);
  }

  return result.join(' ');
}
