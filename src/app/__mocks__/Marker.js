export const mockExactMatchCount = jest.fn()
export const mockNumberMatchCount = jest.fn()

const mock = jest.fn().mockImplementation(() => ({
  exactMatchCount: mockExactMatchCount,
  numberMatchCount: mockNumberMatchCount
}))

export default mock

