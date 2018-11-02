import SettingsStorage from 'app/SettingsStorage'


const settingsStorage = new SettingsStorage

describe('SettingsStorage', () => {
  afterEach(() => {
    resetLocalStorage()
    localStorage.setItem.mockClear()
    localStorage.getItem.mockClear()
    localStorage.removeItem.mockClear()
  })

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

