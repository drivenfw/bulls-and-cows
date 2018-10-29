import Game from 'app/Game'
import Marker, { 
  mockExactMatchCount, 
  mockNumberMatchCount 
} from 'app/Marker'

jest.mock('app/Marker')


describe('Game', () => {
  describe('guess', () => {
    beforeEach(() => {
      Marker.mockClear()
      mockExactMatchCount.mockClear()
      mockNumberMatchCount.mockClear()
    })

    describe('leverages Marker\'s functionality', () => {
      beforeEach(() => {
        const game = new Game('1234')

        game.guess('0123')
      })

      it('creates Marker', () => {
        expect(Marker).toHaveBeenCalledTimes(1)
      })

      it('calls exactMatchCount on the marker', () => {
        expect(mockExactMatchCount).toHaveBeenCalledTimes(1)
      })

      it('calls numberMatchCount on the marker', () => {
        expect(mockNumberMatchCount).toHaveBeenCalledTimes(1)
      })
    })

    describe('marks the guess correctly', () => {
      describe('with no matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('')
        })
      })

      describe('with 1 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'+\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+')
        })
      })

      describe('with 2 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'++\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('++')
        })
      })

      describe('with 3 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 3,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'+++\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+++')
        })
      })

      describe('with 4 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 4,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'++++\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('++++')
        })
      })

      describe('with 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'-\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('-')
        })
      })

      describe('with 2 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'--\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('--')
        })
      })

      describe('with 3 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 3
          }))
        })

        it('returns \'---\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('---')
        })
      })

      describe('with 4 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 4
          }))
        })

        it('returns \'----\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('----')
        })
      })

      describe('with 1 exact match and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'+-\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+-')
        })
      })

      describe('with 2 exact matches and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'++-\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('++-')
        })
      })

      describe('with 3 exact matches and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 3,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'+++-\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+++-')
        })
      })

      describe('with 2 number matches and 1 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'+--\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+--')
        })
      })

      describe('with 3 number matches and 1 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 3
          }))
        })

        it('returns \'+---\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('+---')
        })
      })

      describe('with 2 number matches and 2 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'++--\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('++--')
        })
      })
    })
  })
})

