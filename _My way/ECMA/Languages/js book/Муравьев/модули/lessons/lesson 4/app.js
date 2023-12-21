import { random, uniq } from "lodash";
import axios from "axios";
import { key, citiesUrl as url, mapCities, month, num } from "./src/constants.js";


axios.get(url).then((data) => {
  const cities = data.data;
  const citiesMapped = mapCities(cities);
  console.log(citiesMapped);
});

console.log(num, month);
