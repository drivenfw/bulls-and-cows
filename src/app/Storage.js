import VERSION from '../version'


const _loadFromStorage = Symbol('_loadFromStorage')
const _saveToStorage = Symbol('_saveToStorage')
const _storageKey = Symbol('_storageKey')

export default class Storage {
  [_loadFromStorage]() {
    if (localStorage) {
      const json = localStorage.getItem(Storage[_storageKey])

      try {
        return json ? JSON.parse(json) : {}
      } catch (e) {
        return {}
      }
    } else {
      return null
    }
  }

  [_saveToStorage](value) {
    localStorage.setItem(Storage[_storageKey], JSON.stringify(value))
  }

  set(key, value) {
    const data = this[_loadFromStorage]()

    if (data) {
      data[key] = value
      this[_saveToStorage](data)
    }
  }

  get(key) {
    const data = this[_loadFromStorage]()

    return data && data[key]
  }

  remove(key) {
    const data = this[_loadFromStorage]()

    if (data) {
      delete data[key]
      this[_saveToStorage](data)
    }
  }
}

Storage[_storageKey] = `BULLS-AND-COWS-${VERSION}`

