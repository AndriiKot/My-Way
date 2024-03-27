function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
console.log(getRandomNumber(1, 10)); // Вернет целое рандомное число от 1 до 10
