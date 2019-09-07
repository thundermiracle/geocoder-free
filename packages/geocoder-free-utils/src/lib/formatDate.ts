function formatStrDate(
  date: Date | string | null,
  format = 'yyyy/MM/dd HH:mm:ss',
): string {
  if (date == null || date === '') {
    return '';
  }

  let dtDate;
  if (typeof date === 'string') {
    dtDate = new Date(date);
  } else {
    dtDate = date;
  }

  let formatStr = format;

  formatStr = formatStr.replace(/yyyy/g, dtDate.getFullYear().toString());
  formatStr = formatStr.replace(/MM/g, `0${dtDate.getMonth() + 1}`.slice(-2));
  formatStr = formatStr.replace(/dd/g, `0${dtDate.getDate()}`.slice(-2));
  formatStr = formatStr.replace(/HH/g, `0${dtDate.getHours()}`.slice(-2));
  formatStr = formatStr.replace(/mm/g, `0${dtDate.getMinutes()}`.slice(-2));
  formatStr = formatStr.replace(/ss/g, `0${dtDate.getSeconds()}`.slice(-2));

  formatStr = formatStr.replace(
    /yy/g,
    dtDate
      .getFullYear()
      .toString()
      .slice(-2),
  );
  formatStr = formatStr.replace(
    /M/g,
    (dtDate.getMonth() + 1).toString().slice(-2),
  );
  formatStr = formatStr.replace(
    /d/g,
    dtDate
      .getDate()
      .toString()
      .slice(-2),
  );
  formatStr = formatStr.replace(
    /H/g,
    dtDate
      .getHours()
      .toString()
      .slice(-2),
  );
  formatStr = formatStr.replace(
    /m/g,
    dtDate
      .getMinutes()
      .toString()
      .slice(-2),
  );
  formatStr = formatStr.replace(
    /s/g,
    dtDate
      .getSeconds()
      .toString()
      .slice(-2),
  );

  formatStr = formatStr.replace(
    /SSS/g,
    `00${dtDate.getMilliseconds()}`.slice(-3),
  );

  return formatStr;
}

export default formatStrDate;
