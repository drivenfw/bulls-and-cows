import { select, takeEvery } from 'redux-saga/effects'

import { SettingsStorage } from 'app/Storage'


const settingsStorage = new SettingsStorage()

function *switchDifficultyHandler(action) {
  const { settings: { rememberSettings } } = yield select()

  rememberSettings && settingsStorage.setSetting('difficulty', action.payload)
}

function *switchLocaleHandler(action) {
  const { settings: { rememberSettings } } = yield select()
 
  rememberSettings && settingsStorage.setSetting('locale', action.payload)
}

function *switchThemeHandler(action) {
  const { settings: { rememberSettings } } = yield select()
 
  rememberSettings && settingsStorage.setSetting('theme', action.payload)
}

function *toggleRememberSettingsHandler(action) {
  const { settings } = yield select()

  action.payload 
    ? settingsStorage.setAllSettings(settings)
    : settingsStorage.resetSettings()
}

export function *watchSettingsActions() {
  yield takeEvery('SETTINGS_SWITCH_DIFFICULTY', switchDifficultyHandler)
  yield takeEvery('SETTINGS_SWITCH_LOCALE', switchLocaleHandler)
  yield takeEvery('SETTINGS_SWITCH_THEME', switchThemeHandler)
  yield takeEvery('SETTINGS_TOGGLE_REMEMBER_SETTINGS', toggleRememberSettingsHandler)
}

