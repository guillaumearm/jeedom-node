import { setupRecorder } from 'nock-record'
import { assoc, map, pipe, take } from 'ramda'
import Jeedom, { JeedomApi } from '../src'
import { JEEDOM_API_KEY, JEEDOM_HOST } from './constants'

export type Recorder = (fileName: string) => Promise<{ completeRecording: () => void }>

export type RecordTest = (testName: string, runEffect: () => Promise<any>) => void

export const createRecordTest = (prefix: string, recorder: Recorder): RecordTest => (
  testName: string,
  runEffect: () => Promise<any>,
) => {
  test(testName, async () => {
    const { completeRecording } = await recorder(`${prefix}-${testName}`)
    const result = await runEffect()
    completeRecording()
    return result
  })
}

export const prepareJeedomTest = (): [JeedomApi, RecordTest] => [
  Jeedom({ host: JEEDOM_HOST, apikey: JEEDOM_API_KEY }),
  createRecordTest('jeedom', setupRecorder({ mode: 'record' })),
]

type GenericTransform = (x: any) => any
export const prepareGenericData = (transform: GenericTransform) =>
  pipe(
    take(1),
    map(
      pipe(
        transform,
        assoc('display', {}),
        assoc('configuration', {}),
      ),
    ),
  )
