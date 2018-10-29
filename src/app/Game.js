import Marker from './Marker'


const _secret = Symbol('_secret')

export default class Game {
  constructor(secret) {
    this[_secret] = secret
  }

  guess(guess) {
    const marker = new Marker(this[_secret], guess)
    const bulls = [...Array(marker.exactMatchCount())].map(() => '+').join('')
    const cows = [...Array(marker.numberMatchCount())].map(() => '-').join('')

    return bulls + cows
  }
}

