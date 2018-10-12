export const hexToRgba = (color, opacity) => {
  const [r, g, b] = color.substr(1).match(/.{1,2}/g)
    .map(color => parseInt(color, 16))

  return `rgba(${r},${g},${b},${opacity})`
}
 
