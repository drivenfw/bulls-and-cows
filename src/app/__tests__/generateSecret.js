import generateSecret from 'app/generateSecret'


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

