import { LatLngArray } from './types';

function rad2degr(rad: number): number {
  return (rad * 180) / Math.PI;
}
function degr2rad(degr: number): number {
  return (degr * Math.PI) / 180;
}

/**
 * @param latLngInDeg array of arrays with latitude and longtitude
 *   pairs in degrees. e.g. [[latitude1, longtitude1], [latitude2
 *   [longtitude2] ...]
 *
 * @return array with the center latitude longtitude pairs in
 *   degrees.
 */
function getLatLngCentroid(latLngInDegr: Array<LatLngArray>): LatLngArray | [] {
  if (latLngInDegr.length === 0) {
    return [];
  }

  if (latLngInDegr.length === 1) {
    return latLngInDegr[0];
  }

  let sumX = 0;
  let sumY = 0;
  let sumZ = 0;

  for (let i = 0; i < latLngInDegr.length; i += 1) {
    const [latDegr, lngDegr] = latLngInDegr[i];
    const lat = degr2rad(latDegr);
    const lng = degr2rad(lngDegr);
    // sum of cartesian coordinates
    sumX += Math.cos(lat) * Math.cos(lng);
    sumY += Math.cos(lat) * Math.sin(lng);
    sumZ += Math.sin(lat);
  }

  const avgX = sumX / latLngInDegr.length;
  const avgY = sumY / latLngInDegr.length;
  const avgZ = sumZ / latLngInDegr.length;

  // convert average x, y, z coordinate to latitude and longtitude
  const lng = Math.atan2(avgY, avgX);
  const hyp = Math.sqrt(avgX * avgX + avgY * avgY);
  const lat = Math.atan2(avgZ, hyp);

  return [+rad2degr(lat).toFixed(6), +rad2degr(lng).toFixed(6)];
}

export default getLatLngCentroid;
