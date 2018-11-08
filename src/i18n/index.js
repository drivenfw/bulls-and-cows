import { addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'

import enMessages from './en.json'
import ruMessages from './ru.json'


addLocaleData([...en, ...ru])

export default ({
  en: enMessages,
  ru: ruMessages
})

