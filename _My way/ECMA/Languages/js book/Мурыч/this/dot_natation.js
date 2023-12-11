'use strict';

function doLogThis() {
  console.log(this)
}

const theObj = {
  name: 'Andrii'
}

theObj.doLogThis = doLogThis;
theObj.doLogThis(); // { name: 'Andrii', doLogThis: [ function: doLogThis ]}
