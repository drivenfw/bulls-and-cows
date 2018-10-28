import { granularTime, paddedNumber } from 'helpers/clock'


describe('granularTime', () => {
  test('breaks up 0s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(0)

    expect(hours).toBe(0) 
    expect(mins).toBe(0) 
    expect(secs).toBe(0) 
  }) 

  test('breaks up 23s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(23)

    expect(hours).toBe(0) 
    expect(mins).toBe(0) 
    expect(secs).toBe(23) 
  }) 

  test('breaks up 60s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(60)

    expect(hours).toBe(0) 
    expect(mins).toBe(1) 
    expect(secs).toBe(0) 
  }) 

  test('breaks up 90s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(90)

    expect(hours).toBe(0) 
    expect(mins).toBe(1) 
    expect(secs).toBe(30) 
  }) 

  test('breaks up 360s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(360)

    expect(hours).toBe(0) 
    expect(mins).toBe(6) 
    expect(secs).toBe(0) 
  }) 

  test('breaks up 3600s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(3600)

    expect(hours).toBe(1) 
    expect(mins).toBe(0) 
    expect(secs).toBe(0) 
  })

  test('breaks up 5555s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(5555)

    expect(hours).toBe(1) 
    expect(mins).toBe(32) 
    expect(secs).toBe(35) 
  }) 

  test('breaks up 8974s into hours, minutes and seconds correctly', () => {
    const { hours, mins, secs } = granularTime(8974)

    expect(hours).toBe(2)
    expect(mins).toBe(29) 
    expect(secs).toBe(34) 
  }) 
})

describe('paddedNumber', () => {
  test('formats 0 correctly', () => {
    expect(paddedNumber(0, 3)).toBe('000')
  })

  test('formats 3 correctly', () => {
    expect(paddedNumber(3, 3)).toBe('003')
  })

  test('formats 23 correctly', () => {
    expect(paddedNumber(23, 3)).toBe('023')
  })

  test('formats 50 correctly', () => {
    expect(paddedNumber(50, 3)).toBe('050')
  })

  test('formats 278 correctly', () => {
    expect(paddedNumber(278, 3)).toBe('278')
  })

  test('formats 999 correctly', () => {
    expect(paddedNumber(999, 3)).toBe('999')
  })

  test('formats 1000 correctly', () => {
    expect(paddedNumber(1000, 3)).toBe('000')
  })

  test('formats 5 correctly', () => {
    expect(paddedNumber(5, 2)).toBe('05')
  })

  test('formats 33 correctly', () => {
    expect(paddedNumber(33, 2)).toBe('33')
  })

  test('formats 127 correctly', () => {
    expect(paddedNumber(127, 2)).toBe('27')
  })

  test('formats 99 correctly', () => {
    expect(paddedNumber(99, 5)).toBe('00099')
  })
})

