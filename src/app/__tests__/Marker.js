import Marker from 'app/Marker'


describe('Marker', () => {
  describe('exactMatchCount', () => {
    describe('with no matches', () => {
      it('returns 0', () => {
        const marker = new Marker('1234', '5555')

        expect(marker.exactMatchCount()).toBe(0)
      })
    })

    describe('with one exact match', () => {
      it('returns 1', () => {
        const marker = new Marker('1234', '1555')

        expect(marker.exactMatchCount()).toBe(1)
      })
    })

    describe('with one number match', () => {
      it('returns 0', () => {
        const marker = new Marker('1234', '5551')

        expect(marker.exactMatchCount()).toBe(0)
      })
    })

    describe('with one exact match and one number match', () => {
      it('returns 1', () => {
        const marker = new Marker('1234', '1525')

        expect(marker.exactMatchCount()).toBe(1)
      })
    })
  })

  describe('numberMatchCount', () => {
    describe('with no matches', () => {
      it('returns 0', () => {
        const marker = new Marker('1234', '5555')

        expect(marker.numberMatchCount()).toBe(0)
      })
    })

    describe('with one number match', () => {
      it('returns 1', () => {
        const marker = new Marker('1234', '5155')

        expect(marker.numberMatchCount()).toBe(1)
      }) 
    })

    describe('with one exact match', () => {
      it('returns 0', () => {
        const marker = new Marker('1234', '1555')

        expect(marker.numberMatchCount()).toBe(0)
      }) 
    })

    describe('with one exact match and one number match', () => {
      it('returns 1', () => {
        const marker = new Marker('1234', '1525')

        expect(marker.numberMatchCount()).toBe(1)
      }) 
    })

    describe('with one exact match duplicated in guess', () => {
      it('returns 0', () => {
        const marker = new Marker('1234', '1155')

        expect(marker.numberMatchCount()).toBe(0)
      }) 
    })
  })
})

