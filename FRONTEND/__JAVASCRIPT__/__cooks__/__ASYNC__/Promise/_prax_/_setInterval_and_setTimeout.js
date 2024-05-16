const interval1 = setInterval(() => {
  console.log("Interval 1");
  clearInterval(interval1);
}, 0);

setTimeout(() => console.log("Timeout 1"), 0);


