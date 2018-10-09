export default class Marker {
  constructor(secret, guess) {
    this._secret = secret
    this._guess = guess
  }

  exactMatchCount() {
    return this._secret.split('')
      .reduce((count, n, index) => 
        count + (this._isExactMatch(index) ? 1 : 0), 0)
  } 

  numberMatchCount() {
    return this._totalMatchCount() - this.exactMatchCount()
  }

  _isExactMatch(index) {
    return this._guess[index] === this._secret[index]
  }

  _totalMatchCount() {
    const secret = this._secret.split('')

    return this._guess.split('').reduce((count, n) =>
      count + (this._deleteFirst(secret, n) ? 1 : 0)
    , 0)
  }

  _deleteFirst(secret, n) {
    const index = secret.indexOf(n)

    return index >= 0 ? secret.splice(index, 1) : null
  }
}

