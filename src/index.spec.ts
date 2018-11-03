import { setupRecorder } from 'nock-record'
import Jeedom from '.'

const HOST = 'http://192.168.1.60'

const record = setupRecorder({ mode: 'record' })

const recordAndMatchSnapshot = (
  testName: string,
  recorder: (fileName: string) => Promise<{ completeRecording: () => void }>,
  runEffect: () => Promise<any>,
) => {
  test(testName, async () => {
    const { completeRecording } = await recorder(`jeedom-${testName}`)
    const result = await runEffect()
    completeRecording()
    expect(result).toMatchSnapshot()
  })
}

describe('jeedom-node', () => {
  describe('exports', () => {
    test('default export should be a function', () => {
      expect(typeof Jeedom).toBe('function')
    })
  })

  describe('jeedom api', () => {
    const apikey = process.env.JEEDOM_API_KEY || ''
    const api = Jeedom({ host: HOST, apikey })

    recordAndMatchSnapshot('ping', record, () => api.ping())
    recordAndMatchSnapshot('version', record, () => api.version())
    recordAndMatchSnapshot('datetime', record, () => api.datetime())
  })
})
