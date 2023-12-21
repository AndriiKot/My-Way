import { random, uniq } from "lodash";
import axios from "axios";
import { key, citiesUrl, mapCities, month, number } from "./src/constants.js";


axios.get(citiesUrl).then((data) => {
  const cities = data.data;
  const citiesMapped = mapCities(cities);
  console.log(citiesMapped);
});

console.log(number, month)
