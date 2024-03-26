"use strict";

const http = require("node:http");

// Create a server object with a 'request' event handler
// Book version
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World! Book Version.\n");
  })
  .listen(8124);

// browser port http://127.0.0.1:8125 res Hello World Book Version
console.log("Server running at http://127.0.0.1:8124/");

// Create a server object with a 'request' event handler
// Docs version
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World" }));
  // res.end(JSON.stringify({ data: 'Hello World!\nDocs Version\n' })); alias
});
console.log("Server running at http://127.0.0.1:8125/");

server.listen(8125); // browser port http://127.0.0.1:8125 res {"message":"Hello World"}
