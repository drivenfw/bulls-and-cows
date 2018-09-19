export const granularTime = timeSecs => {
  const hours = Math.floor(timeSecs / 3600)
  const mins = Math.floor((timeSecs % 3600) / 60)
  const secs = timeSecs % 60

  return { hours, mins, secs }
}

export const handLength = (clockWidth, clockHeight, angleRad) => {
  const a = clockWidth / 2, b = clockHeight / 2
  const { cos, pow, sin, sqrt } = Math

  return a * b / 
    sqrt(pow(b, 2) * pow(sin(angleRad), 2) + pow(a, 2) * pow(cos(angleRad), 2))
    - 10
}

export const paddedNumber = (number, paddingSize) => {
  const padding = [...Array(paddingSize)]
    .map(p => 0).join('')

  return (padding + number).slice(-paddingSize)
}

