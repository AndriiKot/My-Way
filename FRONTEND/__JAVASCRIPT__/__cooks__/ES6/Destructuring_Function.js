// Destructuring
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const weather = ({ yesterday, today, tomorrow }) => {
  console.log(`Yesterday: ${yesterday}`); // Yesterday 75, today 77, tomorrow 80 (yesterday);
  console.log(`Today: ${today}`);
  console.log(`Tomorrow: ${tomorrow}`);
};

weather(HIGH_TEMPERATURES);



const weatherAlternative = (weatherObject) => {
  const { yesterday, today, tomorrow } = weatherObject;
  console.log(`Yesterday: ${yesterday}`); // Yesterday 75, today 77, tomorrow 80 (yesterday);
  console.log(`Today: ${today}`);
  console.log(`Tomorrow: ${tomorrow}`);
};

weatherAlternative(HIGH_TEMPERATURES);
