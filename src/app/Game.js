import Marker from './Marker'


export default class Game {
  constructor(options) {
    this._options = options
  }

  _generateSecret() {
    const opt = this._options.slice()

    return [...Array(4)].map(() => 
      opt.splice(Math.floor(Math.random() * opt.length), 1).pop()
    ).join('')
  }

  start() {
    this._secret = this._generateSecret()
  }

  guess(guess) {
    const marker = new Marker(this._secret, guess)
    const bulls = [...Array(marker.exactMatchCount())].map(() => '+').join('')
    const cows = [...Array(marker.numberMatchCount())].map(() => '-').join('')

    return bulls + cows
  }
}

