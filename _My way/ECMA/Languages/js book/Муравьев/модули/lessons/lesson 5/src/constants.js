"use strict";
import axios from "axios";

export const citiesUrl =
  "https://gist.githubusercontent.com/VasilyMur/8b679b5482499a97c08cca9b6dffef03/raw/4dfd59daa4ac0a6ebd7d2f144b860d62054b4576/uscities.json";

export const mapCities = (cities) => {
  return cities.map((response) => {
    const { city, population } = response;
    return { city, population };
  });
};

const getCities = () => {
  return axios.get(citiesUrl).then((res) => {
    return res.data;
  });
};

export default getCities;
