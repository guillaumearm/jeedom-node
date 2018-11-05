import { prepareJeedomTest } from '../utils'

describe('rpc.summary', () => {
  const [api, recordTest] = prepareJeedomTest()

  recordTest('summary::global', async () => {
    const unknownResult = await api.summary.global({ key: 'unknown_key' })
    expect(unknownResult).toBe(null)

    const result = await api.summary.global({})
    expect(typeof result).toBe('object')
  })

  recordTest('summary::byId', async () => {
    return expect(api.summary.byId({ id: 1 })).resolves.toBe(null)
  })

  recordTest('[error] summary:byId', async () => {
    const response = api.summary.byId({ id: 'unknown_id' })
    const expectedError = 'Objet introuvable : unknown_id'
    return expect(response).rejects.toThrow(expectedError)
  })
})
