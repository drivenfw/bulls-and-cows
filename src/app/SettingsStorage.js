import Storage from './Storage'


export default class SettingsStorage extends Storage {
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

