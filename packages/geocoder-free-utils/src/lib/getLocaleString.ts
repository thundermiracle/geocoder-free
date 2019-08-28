export default function getLocaleString(dateStr: string | null): string {
  if (dateStr == null || dateStr.trim() === '') {
    return '';
  }

  return new Date(dateStr).toLocaleString();
}
