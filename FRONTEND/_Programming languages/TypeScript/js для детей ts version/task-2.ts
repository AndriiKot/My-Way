﻿var перваяЧастьПриветствия: string = "Привет,"; // => undefined
let втораяЧастьПриветствия: string = "Мир";     // => undefined
let одиночныйПробел: string = " ";              // => undefined
let полноеПриветствие: string = перваяЧастьПриветствия + одиночныйПробел + втораяЧастьПриветствия; // => undefined
полноеПриветствие = полноеПриветствие + "!!"; // => 'Привет, Мир!!'
полноеПриветствие // => 'Привет, Мир!!'

console.log(полноеПриветствие);


