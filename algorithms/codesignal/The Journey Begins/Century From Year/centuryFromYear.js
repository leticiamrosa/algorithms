/**
 * The First century spans from the year 1 up to and including the year 100
 * The Second century spans from the year 101 up to and including the year 200
 * Input - Year
 * Output - Century
 */

export const centuryFromYear = (year) => {
  const time = year - 1;
  return Math.floor(time / 100) + 1;
};

export default centuryFromYear;