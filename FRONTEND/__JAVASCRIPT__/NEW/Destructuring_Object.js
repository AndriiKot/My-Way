// Destructuring
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

// Old styles:
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// ES6 version 1:
const { today, tomorrow } = HIGH_TEMPERATURES;

// ES6 version 2:
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


console.log(highToday, highTomorrow);
console.log(today, tomorrow);

// Example 2
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
const { johnDoe: { age: userAge, email: userEmail }} = user;

console.log(userAge, userEmail);
console.log(age, email);

