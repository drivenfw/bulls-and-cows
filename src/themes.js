import { hexToRgba } from './helpers/color'


const primaryColor1 = color => hexToRgba(color, 0.6)

const primaryColor2 = color => hexToRgba(color, 0.3)

export default {
  main: {
    primaryColor: '#db7093',
    primaryColor1: primaryColor1('#db7093'),
    primaryColor2: primaryColor2('#db7093')
  },
  redYellow: {
    primaryColor: '#F06653',
    primaryColor1: '#F39C90',
    primaryColor2: '#F8C8C2'
  }
}

