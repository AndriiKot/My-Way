const fs = require("node:fs");
const path = require("node:path");

const fileLocation =  path.join(process.cwd())

fs.watchFile(
   fileLocation,
   (currentState,prevState) => {
    console.log(`Changed at ${currentState.mtime}`)
   }
)