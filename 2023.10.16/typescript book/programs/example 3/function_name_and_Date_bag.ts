function greet(name: string, date: Date) {
    console.log(`Hello ${name}, today is ${date.toDateString()!}`);
}

greet('Andrii',Date());  // Argument of type 'string' is not assignable to parameter of type 'Date'