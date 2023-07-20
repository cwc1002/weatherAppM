/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat=37.6144546&lon=127.1091525"; // Guri-si

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(res => {
    const { latitude, longitude } = res.coords;

    updateWeather(`lat=${latitude}`, `lon=${longitude}`);
  }, err => {
    window.location.hash = defaultLocation;
  });
}

/**
 * @param {string} query Searched query
 */
const searchedLocation = query => updateWeather(...query.split("&"));
// updateWeather("lat=37.6144546", "lon=127.1091525")


const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation]
]);
// 02:05:10
const checkHash = function () {
  const requestURL = window.location.hash.slice(1);  // 문자열 1번(두번째)부터 잘라서 반환

  const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];

  routes.get(route) ? routes.get(route)(query) : error404();
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});