import { hexToRgba } from 'helpers/color'


test('hexToRgba', () => {
  expect(hexToRgba('#000000', 1)).toBe('rgba(0,0,0,1)')
})

test('hexToRgba', () => {
  expect(hexToRgba('#ffffff', 1)).toBe('rgba(255,255,255,1)')
})

test('hexToRgba', () => {
  expect(hexToRgba('#F7FE2E', 0.3)).toBe('rgba(247,254,46,0.3)')
})

test('hexToRgba', () => {
  expect(hexToRgba('#F2AB37', 0.5)).toBe('rgba(242,171,55,0.5)')
})

test('hexToRgba', () => {
  expect(hexToRgba('#52DEC6', 0.8)).toBe('rgba(82,222,198,0.8)')
})

