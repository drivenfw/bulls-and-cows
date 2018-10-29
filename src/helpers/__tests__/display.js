import { calcScroll } from 'helpers/display'
import matchMedia from 'helpers/__mocks__/matchMedia'


global.matchMedia = matchMedia

describe('calcScroll', () => {
  describe('screen width < 375px', () => {
    describe('with contentLength <= 5', () => {
      it('returns 0', () => {
        expect(calcScroll(5)).toBe(0)
      })

      it('returns 0', () => {
        expect(calcScroll(3)).toBe(0)
      })

      it('returns 0', () => {
        expect(calcScroll(0)).toBe(0)
      })
    })

    describe('with contentLength > 5', () => {
      it('returns the difference contentLength - 5', () => {
        expect(calcScroll(6)).toBe(1)
      })

      it('returns the difference contentLength - 5', () => {
        expect(calcScroll(9)).toBe(4)
      })

      it('returns the difference contentLength - 5', () => {
        expect(calcScroll(13)).toBe(8)
      })
    })
  })

  describe('screen width >= 375px', () => {
    beforeEach(() => {
      matchMedia.mockImplementation(() => ({
        matches: true
      }))
    })

    describe('with contentLength <= 6', () => {
      it('returns 0', () => {
        expect(calcScroll(6)).toBe(0)
      })

      it('returns 0', () => {
        expect(calcScroll(3)).toBe(0)
      })

      it('returns 0', () => {
        expect(calcScroll(0)).toBe(0)
      })
    })

    describe('with contentLength > 6', () => {
      it('returns the difference contentLength - 6', () => {
        expect(calcScroll(7)).toBe(1)
      })

      it('returns the difference contentLength - 5', () => {
        expect(calcScroll(9)).toBe(3)
      })

      it('returns the difference contentLength - 5', () => {
        expect(calcScroll(13)).toBe(7)
      })
    })
  })
})

