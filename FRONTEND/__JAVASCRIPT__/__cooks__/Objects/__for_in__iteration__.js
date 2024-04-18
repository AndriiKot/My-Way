const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

console.log('Object: refrigerator\n');

for(const key in refrigerator) {
  console.log(`kye: ${key}`);
  console.log(`value: ${refrigerator[key]}`);
  console.log("");
}