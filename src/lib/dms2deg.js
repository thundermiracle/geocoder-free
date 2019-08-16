/**
 * convert latitude or longitude from dms to decimal
 *
 * @param {*string} dms
 */
export default function dms2deg(dms) {
  const [degrees, minutes, seconds, direction] = dms.split(/[^\d\w.]+/);

  let deg = (
    Number(degrees) +
    Number(minutes) / 60 +
    Number(seconds) / 3600
  ).toFixed(6);

  if (direction === 'S' || direction === 'W') {
    // Don't do anything for N or E
    deg *= -1;
  }

  return +deg;
}
