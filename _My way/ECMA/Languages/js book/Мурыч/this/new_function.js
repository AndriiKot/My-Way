'use strict';


function doLogThis() {
  console.dir(this);
}


new doLogThis(); // {}
new doLogThis; // {}







