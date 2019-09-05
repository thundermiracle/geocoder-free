export default function getLocaleString(dateStr: string | null): string {
  if (dateStr == null || dateStr.trim() === '') {
    return '';
  }

  const result = new Date(dateStr).toLocaleString();
  if (result === 'Invalid Date') {
    return '';
  }

  return result;
}
