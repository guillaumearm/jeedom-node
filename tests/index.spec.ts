import { setupRecorder } from 'nock-record'
import { createRecordTest } from './utils'
import Jeedom from '../src'
import { JEEDOM_HOST, JEEDOM_API_KEY } from './constants'

describe('jeedom-node', () => {
  describe('exports', () => {
    test('default export should be a function', () => {
      expect(typeof Jeedom).toBe('function')
    })
  })

  describe('api', () => {
    const recordTest = createRecordTest('jeedom', setupRecorder({ mode: 'record' }))

    const api = Jeedom({ host: JEEDOM_HOST, apikey: JEEDOM_API_KEY })

    recordTest('ping', () => api.ping())
    recordTest('version', () => api.version())
    recordTest('datetime', () => api.datetime())

    describe('config', () => {
      recordTest('config::byKey', () => api.config.byKey({ key: 'name' }))
      recordTest('config::save', async () => {
        const res1 = await api.config.save({ plugin: '__test__', key: '__test__', value: 'test' })
        const value = await api.config.byKey({ plugin: '__test__', key: '__test__' })
        const res2 = await api.config.save({ plugin: '__test__', key: '__test__', value: '' })
        expect(value).toBe('test')
        return [res1, value, res2]
      })
    })

    describe('event', () => {
      recordTest('event::changes', () => api.event.changes({}))
    })
  })
})
