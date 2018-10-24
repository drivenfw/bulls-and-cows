import { select, take } from 'redux-saga/effects'

import { SettingsStorage } from 'app/Storage'
import { 
  switchDifficulty,
  switchLocale,
  switchTheme,
  toggleRememberSettings
} from 'actions/settings'


const settingsStorage = new SettingsStorage()

const matchSettingsActions = action => 
  /SETTINGS/.test(action.type)

export function *watchSettingsActions() {
  const handlers = {
    [switchDifficulty]: (save, action) => {
      save && settingsStorage.setSetting('difficulty', action.payload)
    },
    [switchLocale]: (save, action) => {
      save && settingsStorage.setSetting('locale', action.payload)
    },
    [switchTheme]: (save, action) => {
      save && settingsStorage.setSetting('theme', action.payload)
    },
    [toggleRememberSettings]: function* (save, action) {
      const { settings } = yield select()

      action.payload 
        ? settingsStorage.setAllSettings(settings)
        : settingsStorage.resetSettings()
    }
  }

  while (true) {
    const action = yield take(matchSettingsActions)
    const { settings: { rememberSettings } } = yield select()

    yield *handlers[action.type](rememberSettings, action)
  }
}

