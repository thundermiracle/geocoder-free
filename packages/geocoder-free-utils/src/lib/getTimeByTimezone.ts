/**
 * getTime with timezone
 *
 * eg: '2019-09-01 11:00:00' is a JST dateString(+9)
 *
 * will returns
 *
 * 1567303200000 instead of 1567335600000 even if the system's timezone is UTC
 */
function getTimeByTimezone(dateStr: string, timezone: number): number {
  const dtBfFormat = new Date(dateStr);

  const tzOffset = dtBfFormat.getTimezoneOffset();
  const nowTZ = -tzOffset / 60;
  const timespan = (nowTZ - timezone) * 3600 * 1000;

  return dtBfFormat.getTime() + timespan;
}

export default getTimeByTimezone;
