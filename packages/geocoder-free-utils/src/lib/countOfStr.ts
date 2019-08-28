export default function countOfStr(str: string, findStr: string): number {
  return (new RegExp(`${findStr}`, 'g').exec(str) || []).length;
}
