"use strict";

export const key = "name export 123";


export const citiesUrl =
  "https://gist.githubusercontent.com/VasilyMur/8b679b5482499a97c08cca9b6dffef03/raw/4dfd59daa4ac0a6ebd7d2f144b860d62054b4576/uscities.json";

export const mapCities = (cities) => {
  return cities.map((response) => {
    const { city, population } = response;
    return { city, population };
  });
};

const month = 'October';
const number = 10;

export { month, number as num}
