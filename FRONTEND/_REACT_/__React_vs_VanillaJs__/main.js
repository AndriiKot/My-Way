"use strict";

const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");

// VanillaJS
const buttonVanillaJs = document.createElement("button");
buttonVanillaJs.textContent = "Vanilla JS"; 
// or buttonVanillaJs.innerText = "Vanilla JS";

container1.append(buttonVanillaJs);
// or container1.appendChild(buttonVanillaJs);


// React
const root = ReactDOM.createRoot(container2);
const buttonReact = React.createElement("button", {}, "React");

// TESTING
container2.append(buttonReact);
root.render(buttonReact);


console.log(buttonVanillaJs, buttonReact);