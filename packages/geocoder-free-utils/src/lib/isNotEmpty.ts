/* eslint-disable @typescript-eslint/no-explicit-any */
export default function isNotEmpty(
  strOrArray: string | Array<any> | null,
): boolean {
  if (strOrArray == null || strOrArray.length === 0) {
    return false;
  }

  return true;
}
