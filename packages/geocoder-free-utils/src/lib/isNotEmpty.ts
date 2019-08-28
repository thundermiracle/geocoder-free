export default function isNotEmpty(strOrArray: string | [] | null): boolean {
  if (strOrArray == null || strOrArray.length === 0) {
    return false;
  }

  return true;
}
