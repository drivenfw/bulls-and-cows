import Storage from './Storage'
import VERSION from 'version'


const storage = new Storage

const storageKey = 'BULLS-AND-COWS-' + VERSION

global.localStorage = {
  _storage: {},

  getItem: function(key) {
    return this._storage[key]
  },

  setItem: function(key, value) {
    this._storage[key] = value.toString()
  },

  clear: function() {
    this._storage = {}
  }
}

const initLocalStorage = value =>
  global.localStorage._storage[storageKey] = JSON.stringify(value)

const resetLocalStorage = () =>
  global.localStorage._storage[storageKey] = {}

describe('version', () => {
  test('version is correct', () => {
    expect(VERSION).toBe('1.0.0')
  })
})

describe('Storage', () => {
  afterEach(() => {
    resetLocalStorage()
  })

  describe('get', () => {
    it('gets value correctly', () => {
      initLocalStorage({ a: 123, b: 456 })

      const a = storage.get('a')
      const b = storage.get('b')

      expect(a).toBe(123)
      expect(b).toBe(456)
    })

    it('calls localStorage.getItem twice', () => {
      const getItem = jest.spyOn(localStorage, 'getItem')

      storage.get('a')
      storage.get('b')

      expect(getItem).toHaveBeenCalledTimes(2)
    })
  })

  describe('set', () => {
    it('sets value correctly', () => {
      storage.set('c', 78)
      storage.set('d', 9)
      const c = storage.get('c')
      const d = storage.get('d')

      expect(c).toBe(78)
      expect(d).toBe(9)
    })

    it('calls localStorage.setItem twice', () => {
      const setItem = jest.spyOn(localStorage, 'setItem')

      storage.set('c', 78)
      storage.set('d', 9)

      expect(setItem).toHaveBeenCalledTimes(2)
    })
  })

  describe('remove', () => {
    it('removes value correctly', () => {
      initLocalStorage({ a: 123 })
      storage.remove('a')

      const a = storage.get('a')

      expect(a).toBe(undefined)
    })
  })
})

