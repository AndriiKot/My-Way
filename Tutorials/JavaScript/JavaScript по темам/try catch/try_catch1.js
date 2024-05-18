
function my_fn1(number) {
  let result = number / 10
  if (typeof(number) === 'number') {
    console.log(result);
  } else {
    throw { message: 'Ввели не число!'}
  }
}

my_fn1(2);
my_fn1('fa')

