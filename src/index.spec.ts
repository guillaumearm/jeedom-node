import { setupRecorder } from 'nock-record'
import Jeedom from '.'

const HOST = 'http://192.168.1.60'

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

  describe('api', () => {
    const recorder = setupRecorder({ mode: 'record' })

    const record = (testName: string, runEffect: () => Promise<any>) =>
      recordAndMatchSnapshot(testName, recorder, runEffect)

    const apikey = process.env.JEEDOM_API_KEY || ''
    const api = Jeedom({ host: HOST, apikey })

    record('ping', () => api.ping())
    record('version', () => api.version())
    record('datetime', () => api.datetime())

    describe('config', () => {
      record('config::byKey', () => api.config.byKey({ key: 'version' }))
    })
  })
})
