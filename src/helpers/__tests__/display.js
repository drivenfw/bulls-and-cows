import { nbspPadding } from 'helpers/display'


test('nbspPadding', () => {
  expect(nbspPadding(0)).toBe('')
})

test('nbspPadding', () => {
  expect(nbspPadding(3)).toBe('\u00a0\u00a0\u00a0')
})

test('nbspPadding', () => {
  expect(nbspPadding(5)).toBe('\u00a0\u00a0\u00a0\u00a0\u00a0')
})

