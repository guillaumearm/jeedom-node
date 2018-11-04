import Jeedom from '../src'

describe('jeedom-node exports', () => {
  test('default export should be a function', () => {
    expect(typeof Jeedom).toBe('function')
  })
})
