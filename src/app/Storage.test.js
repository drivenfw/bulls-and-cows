import { Storage, SettingsStorage } from './Storage'
import VERSION from 'version'


const storage = new Storage
const settingsStorage = new SettingsStorage

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

afterEach(() => {
  resetLocalStorage()
})

describe('version', () => {
  test('version is correct', () => {
    expect(VERSION).toBe('1.0.0')
  })
})

describe('Storage', () => {
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

describe('SettingsStorage', () => {
  describe('getSetting', () => {
    it('calls get with \'settings\' as an argument', () => {
      const get = jest.spyOn(settingsStorage, 'get')

      settingsStorage.getSetting('sound')

      expect(get).toHaveBeenCalledWith('settings')
    })

    it('returns undefined if there is no setting', () => {
      const sound = settingsStorage.getSetting('sound')

      expect(sound).toBe(undefined)
    })

    it('gets setting correctly', () => {
      initLocalStorage({ settings: { sound: 'loud' } })

      const sound = settingsStorage.getSetting('sound')

      expect(sound).toBe('loud')  
    })
  })

  describe('setSetting', () => {
    it('sets setting correctly', () => {
      settingsStorage.setSetting('locale', 'en')
      let locale = settingsStorage.getSetting('locale')

      expect(locale).toBe('en')

      settingsStorage.setSetting('locale', 'ru')
      locale = settingsStorage.getSetting('locale')

      expect(locale).toBe('ru')
    })
  })

  describe('setAllSettings', () => {
    it('calls set with correct arguments', () => {
      const set = jest.spyOn(settingsStorage, 'set')
      const settings = { locale: 'ru', sound: true }

      settingsStorage.setAllSettings(settings)

      expect(set).toHaveBeenCalledWith('settings', settings)
    })
  })

  describe('getAllSettings', () => {
    it('calls get with correct arguments', () => {
      const get = jest.spyOn(settingsStorage, 'get')
   
      settingsStorage.getAllSettings()

      expect(get).toHaveBeenCalledWith('settings')
    }) 

    it('returns empty object if there are no settings', () => {
      const sets = settingsStorage.getAllSettings()

      expect(sets).toEqual({})
    })
    
    it('gets all settings correctly', () => {
      const settings = { locale: 'ru', sound: true }

      initLocalStorage({ settings })

      const sets = settingsStorage.getAllSettings()

      expect(sets).toEqual(settings)
    })
  })

  describe('resetSettings', () => {
    it('calls remove with correct arguments', () => {
      const remove = jest.spyOn(settingsStorage, 'remove')

      settingsStorage.resetSettings()

      expect(remove).toHaveBeenCalledWith('settings')
    })
  })
})
