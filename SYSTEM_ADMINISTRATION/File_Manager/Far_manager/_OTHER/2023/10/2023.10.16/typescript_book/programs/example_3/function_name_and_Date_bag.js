function greet(name, date) {
    console.log("Hello ".concat(name, ", today is ").concat(date.toDateString()));
}
greet('Andrii', Date()); // Argument of type 'string' is not assignable to parameter of type 'Date'
