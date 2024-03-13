import * as countries from '@/assets/countries.json'

let cache = {};

let codes = Object.keys(countries);

function decreaseTimeout() {
  Object.entries(cache).forEach(([key, value]) => {
    if (value - 1 == 0) {
      delete cache[key];
    } else {
      cache[key]--;
    }
  });
}

export function random() {
  decreaseTimeout();

  let code

  do {
    let index = (codes.length * Math.random()) << 0;
    code = codes[index];
  } while (cache[code] !== undefined);

  cache[code] = 15;

  return {
    code: code.toLowerCase(),
    names: countries[code].map(n => n.toLowerCase()),
  };
}
