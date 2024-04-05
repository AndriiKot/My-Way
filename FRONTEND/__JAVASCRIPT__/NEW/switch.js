// Exapmle 1
switch (a) {
  case 3:
    // some code
    break;
  case 4:
    // some code
    break;
  case 5:
    // some code
    break;
  default:
  // some code
}

// Example 2
// Если break нет, то выполнение
// пойдёт ниже по следующим case, при этом остальные проверки игнорируются

switch (a) {
  case 3:
    // some code
  case 4:
    // some code
  case 5:
    // some code
  default:
  // some code
}

// Example 3
switch (a) {
  case 3:
  case 4:
    // some code
    break;
  case 5:
    // some code
    break;  
  default:
  // some code
} 

// Example 4
let a = '11';
let b = 10;

switch (+a) {
  case b + 1:
    // Выполнится так как а будет ссылаться на integer 11
    break;
  default:
    alert("Это не выполнится");
}
