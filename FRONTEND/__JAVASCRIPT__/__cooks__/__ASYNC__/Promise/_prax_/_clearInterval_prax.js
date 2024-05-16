let count = 0;
const interval1 = setInterval(
  () => (
    console.log(`Hi! ${new Date()}`, count),
    count++,
    count == 3 ? clearInterval(interval1) : null
  ),
  3000
);
