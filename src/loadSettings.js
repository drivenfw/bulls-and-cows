import SettingsStorage from 'app/SettingsStorage'


export const defaultSettings = {
  difficulty: 1,
  locale: 'en',
  rememberSettings: false,
  theme: 'main'
}

const settingsStorage = new SettingsStorage()

const loadSettings = () => ({
  ...defaultSettings,
  ...settingsStorage.getAllSettings()
})

export default loadSettings

