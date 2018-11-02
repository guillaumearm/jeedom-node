import { setupRecorder } from 'nock-record'
import * as jeedomNode from '.'

const record = setupRecorder({ mode: 'record' })

describe('jeedom-node', () => {
  describe('exports', () => {
    const { default: defaultJeedomNodeApi, ...jeedomNodeApi } = jeedomNode
    test('default export object keys are same as named export keys', () => {
      expect(defaultJeedomNodeApi).toEqual(jeedomNodeApi)
    })
  })

  describe('jeedom api', () => {
    test('ping', async () => {
      const { completeRecording } = await record('jeedom-ping')
      const result = await jeedomNode.ping()
      completeRecording()
      expect(result).toMatchSnapshot()
    })

    test('version', async () => {
      const { completeRecording } = await record('jeedom-version')
      const result = await jeedomNode.version()
      completeRecording()
      expect(result).toMatchSnapshot()
    })
  })
})
