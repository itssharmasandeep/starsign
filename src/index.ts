/**
 * To get star sign using a date as epoch time
 * @param epoch time in epoch timestamp as number
 * @param utc `true` when specified time is in UTC (default - `false`)
 * @returns star sign
 */
export const getStarSign = (epoch: number, utc: boolean = false): StarSign => {
  const dateObj = new Date(epoch);

  const date = utc ? dateObj.getUTCDate() : dateObj.getDate();
  const month = utc ? dateObj.getUTCMonth() : dateObj.getMonth();

  if ((date >= 21 && month === 3) || (date <= 19 && month === 4)) {
    return StarSign.Aries;
  } else if ((date >= 20 && month === 4) || (date <= 20 && month === 5)) {
    return StarSign.Taurus;
  } else if ((date >= 21 && month === 5) || (date <= 20 && month === 6)) {
    return StarSign.Gemini;
  } else if ((date >= 21 && month === 6) || (date <= 22 && month === 7)) {
    return StarSign.Cancer;
  } else if ((date >= 23 && month === 7) || (date <= 22 && month === 8)) {
    return StarSign.Leo;
  } else if ((date >= 23 && month === 8) || (date <= 22 && month === 9)) {
    return StarSign.Virgo;
  } else if ((date >= 23 && month === 9) || (date <= 22 && month === 10)) {
    return StarSign.Libra;
  } else if ((date >= 23 && month === 10) || (date <= 21 && month === 11)) {
    return StarSign.Scorpio;
  } else if ((date >= 22 && month === 11) || (date <= 21 && month === 12)) {
    return StarSign.Sagittarius;
  } else if ((date >= 22 && month === 12) || (date <= 19 && month === 1)) {
    return StarSign.Capricorn;
  } else if ((date >= 20 && month === 1) || (date <= 18 && month === 2)) {
    return StarSign.Aquarius;
  } else if ((date >= 19 && month === 2) || (date <= 20 && month === 3)) {
    return StarSign.Pisces;
  }

  throw new Error("Unknow/Invalid Date");
};

/**
 * Aries star sign dates: March 21 – April 19
 * Taurus star sign dates: April 20 – May 20
 * Gemini star sign dates: May 21 – June 20
 * Cancer star sign dates: June 21 – July 22
 * Leo star sign dates: July 23 – August 22
 * Virgo star sign dates: August 23 – September 22
 * Libra star sign dates: September 23 – October 22
 * Scorpio star sign dates: October 23 – November 21
 * Sagittarius star sign dates: November 22 – December 21
 * Capricorn star sign dates: December 22 – January 19
 * Aquarius star sign dates: January 20 – February 18
 * Pisces star sign dates: February 19 – March 20
 */
export const enum StarSign {
  Aries = "Aries",
  Taurus = "Taurus",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Leo = "Leo",
  Virgo = "Virgo",
  Libra = "Libra",
  Scorpio = "Scorpio",
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Pisces = "Pisces",
}
