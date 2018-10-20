import { hexToRgba } from './helpers/color'


const primaryColor1 = color => hexToRgba(color, 0.6)

const primaryColor2 = color => hexToRgba(color, 0.3)

export default {
  main: {
    primaryColor: '#DB7093',
    primaryColor1: primaryColor1('#DB7093'),
    primaryColor2: primaryColor2('#DB7093')
  },
  red: {
    primaryColor: '#F06653',
    primaryColor1: primaryColor1('#F06653'),
    primaryColor2: primaryColor2('#F06653')
  },
  orange: {
    primaryColor: '#FF8C00',
    primaryColor1: primaryColor1('#FF8C00'),
    primaryColor2: primaryColor2('#FF8C00')
  },
  yellow: {
    primaryColor: '#DEC224',
    primaryColor1: primaryColor1('#DEC224'),
    primaryColor2: primaryColor2('#DEC224')
  },
  green: {
    primaryColor: '#2BC486',
    primaryColor1: primaryColor1('#2BC486'),
    primaryColor2: primaryColor2('#2BC486')
  },
  blue: {
    primaryColor: '#308DCD',
    primaryColor1: primaryColor1('#308DCD'),
    primaryColor2: primaryColor2('#308DCD')
  },
  indigo: {
    primaryColor: '#8B20F0',
    primaryColor1: primaryColor1('#8B20F0'),
    primaryColor2: primaryColor2('#8B20F0')
  }
}

