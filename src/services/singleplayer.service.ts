import { CountryService } from '@/services/country.service'

export class SinglePlayer {
  public score: number
  public current: { code: string, names: string[] }

  constructor() {
    this.score = 0
    this.current = CountryService.random()
  }

  public skip(): void {
    this.current = CountryService.random()
  }

  public validate(input: string): boolean {
    if (this.current.names.includes(input.toLowerCase())) {
      this.score++
      this.current = CountryService.random()

      return true
    }

    return false
  }
}
