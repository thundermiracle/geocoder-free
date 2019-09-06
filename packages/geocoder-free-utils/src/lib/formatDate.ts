function formatDate(
  date: Date | string | null,
  format: string = 'yyyy/MM/dd HH:mm:ss',
) {
  if (date == null || date === '') {
    return '';
  }

  let dtDate;
  if (typeof date === 'string') {
    dtDate = new Date(date);
  } else {
    dtDate = date;
  }

  format = format.replace(/yyyy/g, '' + dtDate.getFullYear());
  format = format.replace(/MM/g, ('0' + (dtDate.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ('0' + dtDate.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + dtDate.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + dtDate.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + dtDate.getSeconds()).slice(-2));

  format = format.replace(/yy/g, ('' + dtDate.getFullYear()).slice(-2));
  format = format.replace(/M/g, ('' + (dtDate.getMonth() + 1)).slice(-2));
  format = format.replace(/d/g, ('' + dtDate.getDate()).slice(-2));
  format = format.replace(/H/g, ('' + dtDate.getHours()).slice(-2));
  format = format.replace(/m/g, ('' + dtDate.getMinutes()).slice(-2));
  format = format.replace(/s/g, ('' + dtDate.getSeconds()).slice(-2));

  format = format.replace(/SSS/g, ('00' + dtDate.getMilliseconds()).slice(-3));

  return format;
}

export default formatDate;
