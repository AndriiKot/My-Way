function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

let int_1 = 10;

if (int_1 < 11) {
  // Выполнить это действие, если int_1 меньше 11
  // Другие условия не будут проверятся если int_1 меньше 11
} else if (int_1 < 10) {
  console.log("Less than 10");
} else {
  console.log("Greater than or equal to 10");
}