import { random, uniq } from "lodash"
import axios from "axios";

const number = [1,2,1,1,2,3,3,3,5,5,3,2,22,22,11,11,22,11,22,33,555,22,555];
const str = ['str1','str1','str2','str1','str3','str2','str3'];

console.log(uniq(number));
console.log(uniq(str));

const name = 'andrii';

for(const letter of name) {
  console.log('letter > ',letter);
}




