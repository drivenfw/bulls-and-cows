import VERSION from 'version'


const storageKey = 'BULLS-AND-COWS-' + VERSION
  
global.initLocalStorage = value =>
  localStorage.setItem(storageKey, JSON.stringify(value))

global.resetLocalStorage = () => {
  localStorage.clear()
}

