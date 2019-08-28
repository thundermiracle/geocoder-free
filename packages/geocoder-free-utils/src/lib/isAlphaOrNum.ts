// -1 return false
export default function isAlphaOrNum(str: string): boolean {
  const restChars = str.toString().replace(/[a-zA-z0-9]/g, '');

  return restChars.length === 0;
}
