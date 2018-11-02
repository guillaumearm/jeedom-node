import { has } from 'ramda'
import * as jeedomNode from '.'

const isJeedomNodeApi = has('identity')

describe('jeedom-node', () => {
  describe('exports', () => {
    const { default: defaultJeedomNodeApi, ...jeedomNodeApi } = jeedomNode

    test('jeedom-node api with named exports', () => {
      expect(isJeedomNodeApi(jeedomNodeApi)).toBe(true)
    })

    test('jeedom-node api exported as default', () => {
      expect(isJeedomNodeApi(defaultJeedomNodeApi)).toBe(true)
    })
  })
})
