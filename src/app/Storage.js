import VERSION from '../version'


const loadFromStorage = Symbol('loadFromStorage')
const saveToStorage = Symbol('saveToStorage')
const storageKey = Symbol('storageKey')

export class Storage {
  [loadFromStorage]() {
    if (localStorage) {
      const json = localStorage.getItem(Storage[storageKey])

      try {
        return json ? JSON.parse(json) : {}
      } catch (e) {
        return {}
      }
    } else {
      return null
    }
  }

  [saveToStorage](value) {
    localStorage.setItem(Storage[storageKey], JSON.stringify(value))
  }

  set(key, value) {
    const data = this[loadFromStorage]()

    if (data) {
      data[key] = value
      this[saveToStorage](data)
    }
  }

  get(key) {
    const data = this[loadFromStorage]()

    return data && data[key]
  }

  remove(key) {
    const data = this[loadFromStorage]()

    if (data) {
      delete data[key]
      this[saveToStorage](data)
    }
  }
}

Storage[storageKey] = `BULLS-AND-COWS-${VERSION}`

export class SettingsStorage extends Storage {
  getSetting(name) {
    const settings = this.get('settings')

    return settings && settings[name]
  }

  setSetting(name, value) {
    const settings = this.get('settings') || {}

    settings[name] = value
    this.set('settings', settings)
  }

  setAllSettings(settings) {
    this.set('settings', settings)
  }

  getAllSettings() {
    return (this.get('settings') || {})
  }

  resetSettings() {
    this.remove('settings')
  }
}

