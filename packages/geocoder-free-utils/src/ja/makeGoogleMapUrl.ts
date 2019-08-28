export default function makeGoogleMapUrl(
  fullAddress: string,
  baseUrl = 'https://www.google.com/maps?q=',
) {
  return `${baseUrl}${encodeURIComponent(fullAddress)}`;
}
