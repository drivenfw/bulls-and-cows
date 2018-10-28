export const calcScroll = contentLength => {
  const lines = matchMedia('(min-width: 375px)').matches ? 6 : 5

  return contentLength > lines ? contentLength - lines : 0
}

export const nbspPadding = length =>
  [...Array(length)].map(() => '\u00a0').join('')

