const fs = require("fs");

const path = require("path");

const fileLocation =  path.join(process.cwd())

fs.watchFile(
   fileLocation,
   (currentState,prevState) => {
    console.log(`Changed at ${currentState.mtime}`)
   }
)