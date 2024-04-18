//Оператор «in» проверяет наличие свойства не только в самом объекте,
//но и в его прототипах, а метод hasOwnProperty — только в объекте.

const users = {
	Andrii: {
		age: 37,
		online: true,
		},
	Oxi:	{
		age: 25,
		online: false,
		}
}
 

console.log(users);  // { Andrii: { age: 37, online: true }, Oxi: { age: 25, online: false } }

console.log(users.Oxi.online); 				// false
console.log('online' in users.Oxi);  			// true
console.log(users['Oxi'].hasOwnProperty('online')); 	// true

