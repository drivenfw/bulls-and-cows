import Game, { generateSecret } from 'app/Game'
import Marker, { 
  mockExactMatchCount, 
  mockNumberMatchCount 
} from 'app/Marker'

jest.mock('app/Marker')


describe('generateSecret', () => {
  describe('with 6 options', () => {
    const options = [0, 1, 2, 3, 4, 5]
    const secret = generateSecret(options)

    it('generates 4 digit secret', () => {
      expect(secret).toEqual(expect.stringMatching(/^[0-5]{4}$/))
    })

    it('generates secret from options', () => {
      expect(secret.split('').every(d => options.includes(+d))).toBe(true) 
    })
  })

  describe('with 7 options', () => {
    const options = [0, 1, 2, 3, 4, 5, 6]
    const secret = generateSecret(options)

    it('generates 4 digit secret', () => {
      expect(secret).toEqual(expect.stringMatching(/^[0-6]{4}$/))
    })

    it('generates secret from options', () => {
      expect(secret.split('').every(d => options.includes(+d))).toBe(true) 
    })
  })

  describe('with 8 options', () => {
    const options = [0, 1, 2, 3, 4, 5, 6, 7]
    const secret = generateSecret(options)

    it('generates 4 digit secret', () => {
      expect(secret).toEqual(expect.stringMatching(/^[0-7]{4}$/))
    })

    it('generates secret from options', () => {
      expect(secret.split('').every(d => options.includes(+d))).toBe(true) 
    })
  })

  describe('with 9 options', () => {
    const options = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const secret = generateSecret(options)

    it('generates 4 digit secret', () => {
      expect(secret).toEqual(expect.stringMatching(/^[0-8]{4}$/))
    })

    it('generates secret from options', () => {
      expect(secret.split('').every(d => options.includes(+d))).toBe(true) 
    })
  })

  describe('with 10 options', () => {
    const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const secret = generateSecret(options)

    it('generates 4 digit secret', () => {
      expect(secret).toEqual(expect.stringMatching(/^[0-9]{4}$/))
    })

    it('generates secret from options', () => {
      expect(secret.split('').every(d => options.includes(+d))).toBe(true) 
    })
  })
})

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

        it('returns \'B\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('B')
        })
      })

      describe('with 2 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'BB\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BB')
        })
      })

      describe('with 3 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 3,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'BBB\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BBB')
        })
      })

      describe('with 4 exact matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 4,
            numberMatchCount: () => 0
          }))
        })

        it('returns \'BBBB\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BBBB')
        })
      })

      describe('with 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'C\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('C')
        })
      })

      describe('with 2 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'CC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('CC')
        })
      })

      describe('with 3 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 3
          }))
        })

        it('returns \'CCC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('CCC')
        })
      })

      describe('with 4 number matches', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 0,
            numberMatchCount: () => 4
          }))
        })

        it('returns \'CCCC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('CCCC')
        })
      })

      describe('with 1 exact match and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'BC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BC')
        })
      })

      describe('with 2 exact matches and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'BBC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BBC')
        })
      })

      describe('with 3 exact matches and 1 number match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 3,
            numberMatchCount: () => 1
          }))
        })

        it('returns \'BBBC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BBBC')
        })
      })

      describe('with 2 number matches and 1 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'BCC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BCC')
        })
      })

      describe('with 3 number matches and 1 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 1,
            numberMatchCount: () => 3
          }))
        })

        it('returns \'BCCC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BCCC')
        })
      })

      describe('with 2 number matches and 2 exact match', () => {
        beforeEach(() => {
          Marker.mockImplementation(() => ({
            exactMatchCount: () => 2,
            numberMatchCount: () => 2
          }))
        })

        it('returns \'BBCC\'', () => {
          const game = new Game('1234')
          const result = game.guess('0123')

          expect(result).toBe('BBCC')
        })
      })
    })
  })
})

