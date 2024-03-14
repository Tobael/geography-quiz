import countriesJson from '@/assets/countries.json'

const countries: { [key: string]: string[] } = countriesJson

let cache: { [key: string]: number } = {}

let codes = Object.keys(countries)

function decreaseTimeout(): void {
  Object.entries(cache).forEach(([key, value]) => {
    if (value - 1 <= 0) {
      delete cache[key]
    } else {
      cache[key]--
    }
  })
}

export class CountryService {
  static random(): { code: string, names: string[] } {
    decreaseTimeout()

    let code: string

    do {
      let index = (codes.length * Math.random()) << 0
      code = codes[index]
    } while (cache[code] !== undefined)

    cache[code] = 15

    return {
      code: code.toLowerCase(),
      names: countries[code].map(n => n.toLowerCase()),
    }
  }

  static validate(input: string, names: string[]): boolean {
    return names.includes(input.toLowerCase())
  }
}
