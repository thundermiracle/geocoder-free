export default function makeGoogleMapUrl(
  fullAddress: string,
  baseUrl = 'https://www.google.com/maps?q=',
): string {
  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
