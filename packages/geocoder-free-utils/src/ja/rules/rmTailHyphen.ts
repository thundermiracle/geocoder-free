export default function removeTailHyphen(str: string): string {
  return str.replace(/[-]*$/, '');
}
