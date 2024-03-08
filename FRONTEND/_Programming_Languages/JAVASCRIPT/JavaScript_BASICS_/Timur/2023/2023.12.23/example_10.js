'use strict';

// Example 10
// const auto = {
//     brand: 'Tesla',
//     drive: function() {
//         return `Завёдем нашу ${this.brand}`
//     }
// }

// Example 10 version 2

const auto = {
  brand: 'BMW',
  drive() {
    const to_drive = `Завёдем нашу ${this.brand}`;
    console.dir(to_drive);
    return `Завёдем наш ${this.brand}`;
  }
};
// 10-2
console.log('auto.drive(): ');
auto.drive();

// 10-3
const autoDrive = auto.drive.bind(auto);
console.log('\nautoDrive(): ');
console.log(autoDrive());

// 10-4
const motorBike = {
  brand: 'Suzuki'
};

const motorDriveBike = auto.drive.bind(motorBike);
console.log('\nmotorDriveBike(): ');
motorDriveBike();

// 10-5
const motorDrivePlan = auto.drive.bind({ brand: 'Midway' });
console.log('\nmotorDrivePlan(): ');
motorDrivePlan();

// 10-6
const bill = {
  tip: 0.1,
  calculate(total) {
    console.log(this);
    return total + total * this.tip;
  }
};

// 10-7
const pay = bill.calculate(1000);
console.log('\npay: ');
console.log(pay);

const payCount = bill.calculate.bind(bill);
console.log('\npayCount(1500): ');
console.log(payCount(1500));

const payCountNew = bill.calculate.bind({ tip: 0.2 });
console.log('\npaycountNew(1500): ');
console.log(payCountNew(1500));

const payCountNew2 = bill.calculate.bind({ tip: 0.2 }, 1500);
console.log('\n({ tip: 0.2}, 1500): ');
console.log(payCountNew2());

// 10-8
const payCountCall = bill.calculate.call(bill, 1000);
console.log('\nbill.calculate.call(bill, 1000): ');
console.log(payCountCall);

// 10-9
const payCountApply = bill.calculate.apply(bill, [1000]);
console.log('\nbill.calculate.apply(bill, 1000');
console.log(payCountApply);

// 10-10
const billNew = {
  tip: 0.1,
  calculate(total) {
    return total + total * this.tip;
  },
  detail(dish1, dish2, sum) {
    return `Ваш обед (${dish1}, ${dish2}) стоит ${this.calculate(sum)}`;
  }
};

const payNew = billNew.detail('pizza', 'salad', 1000);
const payCountCallSpread = billNew.detail.call(bill, ...['pizza', 'salad', 1000]);
console.log(payNew);
console.log(payCountCallSpread);










