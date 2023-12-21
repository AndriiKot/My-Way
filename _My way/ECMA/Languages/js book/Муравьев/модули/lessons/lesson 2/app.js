import { random, uniq } from "lodash";
import axios from "axios";

const number = [111, 111, 222, 3, 333, 111, 324, 123, 232];
console.log(uniq(number));

const name = 'Andrii';

for(const letter of name) {
  console.log('letter > ', letter)
}
