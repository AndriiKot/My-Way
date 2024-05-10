function getIndexToIns(arr, num) {
  const newArray = arr.reduce((accumulator, currentValue) => {
    accumulator.push(currentValue);

    if (currentValue <= num) {
      accumulator.push(num);
    }
    
    return accumulator;
  }, []);
  return newArray;
}

getIndexToIns([40, 60], 50);

console.log(getIndexToIns([40, 60], 50));
