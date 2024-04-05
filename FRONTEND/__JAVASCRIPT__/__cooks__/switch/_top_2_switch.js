let a = '11';
let b = 10;

switch (+a) {
  case b + 1:
    // Выполнится так как а будет ссылаться на integer 11
    break;
  default:
    alert("Это не выполнится");
}
