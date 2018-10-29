import Marker from './Marker'


const _secret = Symbol('_secret')

export const generateSecret = options => {
  const opt = options.slice()

  return [...Array(4)].map(() => 
    opt.splice(Math.floor(Math.random() * opt.length), 1).pop()
  ).join('')
}

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

