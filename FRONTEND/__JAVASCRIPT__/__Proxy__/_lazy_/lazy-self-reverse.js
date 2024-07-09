'use strict'

const ops = {
  max: Math.max,
  sum: (...nums) => nums.reduce((a, b) => a + b),
  avg: (...nums) => ops.sum(...nums) / nums.length,
}

const lazy = (data, self) => new Proxy(data, {
  get: (data, key) => {
      return (self[key] ? self[key](...data) : undefined );
  }
})

const data = lazy([1,2,5, 44, 40], ops);


console.dir({
  max: data.max,
  sum: data.sum,
  avg: data.avg,
});