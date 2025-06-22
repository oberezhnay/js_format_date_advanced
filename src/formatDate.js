'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  // write code here
  const separator = toFormat[toFormat.length - 1];
  const dateArr = date.split(fromFormat[fromFormat.length - 1]);
  const result = [];
  let index = -1;

  if (fromFormat.indexOf('YY') >= 0) {
    index = fromFormat.indexOf('YY');
  } else {
    index = fromFormat.indexOf('YYYY');
  }

  let year = dateArr[index];

  const month = dateArr[fromFormat.indexOf('MM')];
  const day = dateArr[fromFormat.indexOf('DD')];

  if (fromFormat.includes('YYYY') && toFormat.includes('YY')) {
    year = year.slice(2);
  } else if (fromFormat.includes('YY') && toFormat.includes('YYYY')) {
    year = year >= 30 ? '19' + year : '20' + year;
  }

  if (toFormat[0] === 'YYYY' || toFormat[0] === 'YY') {
    result.push(year, month, day);
  }

  if (toFormat[0] === 'DD') {
    result.push(day, month, year);
  }

  if (toFormat[0] === 'MM' && toFormat[1] === 'DD') {
    result.push(month, day, year);
  }

  return result.join(separator);
}

module.exports = formatDate;
