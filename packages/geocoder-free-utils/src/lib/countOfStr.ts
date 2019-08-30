export default function countOfStr(str: string, findStr: string): number {
  // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
  return (str.match(new RegExp(`${findStr}`, 'g')) || []).length;
}
