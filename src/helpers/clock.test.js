import { granularTime } from './clock'


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

