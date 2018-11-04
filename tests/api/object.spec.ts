import { evolve, identity } from 'ramda'
import { prepareGenericData, prepareJeedomTest } from '../utils'

describe('object', () => {
  const [api, recordTest] = prepareJeedomTest()

  const prepareData = prepareGenericData(
    evolve({
      eqLogics: prepareGenericData(
        evolve({
          cmds: prepareGenericData(identity),
        }),
      ),
    }),
  )

  recordTest('object::all', async () => {
    const objects = await api.object.all()
    expect(prepareGenericData(identity)(objects)).toMatchSnapshot()
  })

  recordTest('object::full', async () => {
    const fullObjects = await api.object.full()
    expect(prepareData(fullObjects)).toMatchSnapshot()
  })

  recordTest('object::fullById', async () => {
    const fullObjects = [await api.object.fullById({ id: 1 })]
    expect(prepareData(fullObjects)).toMatchSnapshot()
  })

  recordTest('[error] object::fullById', () => {
    const response = api.object.fullById({ id: -1 })
    const expectedError = 'Objet introuvable : -1'
    return expect(response).rejects.toThrow(expectedError)
  })
})
