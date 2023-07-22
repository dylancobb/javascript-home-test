const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual types are different', () => {
    it('throws an error', () => {
      expect(() => assertEquals(123, '123')).toThrow()
    })
  })

  describe('when expected and actual are the same primitive type', () => {
    describe('when they are identical', () => {
      it('returns without throwing an error', () => {
        expect(() => assertEquals(123, 123)).not.toThrow()
        expect(() => assertEquals('abc', 'abc')).not.toThrow()
        expect(() => assertEquals(true, true)).not.toThrow()
        expect(() => assertEquals(undefined, undefined)).not.toThrow()
      })
    })
  
    describe('when they differ', () => {
      it('throws an error', () => {
        expect(() => assertEquals(123, 1234)).toThrow()
        expect(() => assertEquals('abc', 'abcd')).toThrow()
        expect(() => assertEquals(true, false)).toThrow()
        expect(() => assertEquals(undefined, 'abc')).toThrow()
      })
    })
  })

  describe('when expected and actual are arrays', () => {
    describe('when their lengths differ', () => {
      it('throws an error', () => {
        expect(() => assertEquals([1, 2], [1, 2, 3])).toThrow()
      })
    })
    describe('when their (primitive) elements are identical', () => {
      it('does not throw an error', () => {
        expect(() => assertEquals([1, 2], [1, 2])).not.toThrow()
        expect(() => assertEquals(['a', 'b'], ['a', 'b'])).not.toThrow()
        expect(() => assertEquals([true, false], [true, false])).not.toThrow()
      })
    })
    describe('when their (primitive) elements are identical', () => {
      it('does not throw an error', () => {
        expect(() => assertEquals([1, 'a'], [1, 2])).toThrow()
        expect(() => assertEquals(['a', 2], ['a', 'b'])).toThrow()
        expect(() => assertEquals([true, true], [true, false])).toThrow()
      })
    })
    describe('when their elements are identical (nested arrays)', () => {
      it('does not throw an error', () => {
        expect(() => assertEquals([1, [1, 2]], [1, [1, 2]])).not.toThrow()
      })
    })
    describe('when their elements differ (nested arrays)', () => {
      it('throws an error', () => {
        expect(() => assertEquals([1, ['a', 2]], [1, [1, 2]])).toThrow()
      })
    })
    describe('when their elements are identical (nested objects)', () => {
      it('does not throw an error', () => {
        expect(() => assertEquals([1, {two: 2}], [1, {two: 2}])).not.toThrow()
      })
    })
    describe('when their elements differ (nested objects)', () => {
      it('throws an error', () => {
        expect(() => assertEquals([1, {three: 3}], [1, {two: 2}])).toThrow()
      })
    })
  })

  describe('when expected and actual are objects', () => {
    describe('when expected and actual have different number of properties', () => {
      it('throws an error', () => {
        expect(() => assertEquals({one: 1}, {one: 1, two: 2})).toThrow()
      })
    })
    describe('when expected and actual have different property names', () => {
      it('throws an error', () => {
        expect(() => assertEquals({one: 1, two: 2}, {one: 1, three: 3})).toThrow()
      })
    })
    describe('when expected and actual have different property values', () => {
      it('throws an error', () => {
        expect(() => assertEquals({one: 1, two: 2}, {one: 1, two: 3})).toThrow()
      })
    })
  })
})