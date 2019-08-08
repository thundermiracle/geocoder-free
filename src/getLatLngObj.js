/**
 * split latlng(35.123, 149.123) and transform it to object { lat: 35.123, lng: 149.123 }
 */
export default function getLatLngObj(latlng) {
  if (
    latlng == null ||
    typeof latlng !== 'string' ||
    latlng === '' ||
    latlng.indexOf(',') < 0
  ) {
    return {};
  }

  const [latitude, longitude] = latlng.split(',').map(s => s.trim());

  const lat = +latitude;
  const lng = +longitude;

  if (isNaN(lat) || isNaN(lng)) {
    return {};
  }

  return {
    lat,
    lng,
  };
}
