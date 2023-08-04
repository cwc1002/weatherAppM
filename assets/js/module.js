/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일"
];

export const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월"
];

/**
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${monthName} ${date.getUTCDate()}일, ${weekDayName}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formate: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formate: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
}

/**
 * @param {number} mps Metter per seconds
 * @returns {number} kilometer per hours
 */
export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

export const aqiText = {
  1: {
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
  },
  3: {
    level: "Moderate",
    message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
  },
  4: {
    level: "Poor",
    message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
  }
}