import { setupRecorder } from 'nock-record'
import { identity, evolve, take, pipe, map, assoc } from 'ramda'
import { createRecordTest } from './utils'
import Jeedom from '../src'
import { JEEDOM_HOST, JEEDOM_API_KEY } from './constants'

type GenericTransform = (x: any) => any
const prepareGenericData = (transform: GenericTransform) => pipe(
  take(1),
  map(pipe(
    transform,
    assoc('display', {}),
    assoc('configuration', {}),
  )),
)

describe('jeedom-node', () => {
  describe('exports', () => {
    test('default export should be a function', () => {
      expect(typeof Jeedom).toBe('function')
    })
  })

  describe('api', () => {
    const recordTest = createRecordTest('jeedom', setupRecorder({ mode: 'record' }))

    const api = Jeedom({ host: JEEDOM_HOST, apikey: JEEDOM_API_KEY })

    recordTest('ping', async () => {
      expect(await api.ping()).toMatchSnapshot()
    })
    recordTest('version', async () => {
      expect(await api.version()).toMatchSnapshot()
    })
    recordTest('datetime', async () => {
      expect(await api.datetime()).toMatchSnapshot()
    })

    describe('config', () => {
      recordTest('config::byKey', async () => {
        expect(await api.config.byKey({ key: 'name' })).toMatchSnapshot()
      })

      recordTest('config::save', async () => {
        const res1 = await api.config.save({ plugin: '__test__', key: '__test__', value: 'test' })
        const value = await api.config.byKey({ plugin: '__test__', key: '__test__' })
        const res2 = await api.config.save({ plugin: '__test__', key: '__test__', value: '' })
        expect(value).toBe('test')
        expect([res1, value, res2]).toMatchSnapshot()
      })
    })

    describe('event', () => {
      recordTest('event::changes', async () => {
        const changes = await api.event.changes()
        const prepareData = evolve({ result: take(1) })

        expect(prepareData(changes)).toMatchSnapshot()
      })
    })

    describe('object', () => {
      recordTest('object::all', async () => {
        const objects = await api.object.all()
        const prepareData = prepareGenericData(identity)

        expect(prepareData(objects)).toMatchSnapshot()
      })

      recordTest('object::full', async () => {
        const fullObjects = await api.object.full()

        const prepareData = prepareGenericData(evolve({
          eqLogics: prepareGenericData(evolve({
            cmds: prepareGenericData(identity),
          })),
        }))

        expect(prepareData(fullObjects)).toMatchSnapshot()
      })
    })
  })
})
