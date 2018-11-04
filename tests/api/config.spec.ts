import { prepareJeedomTest } from '../utils'

describe('rpc.config', () => {
  const [api, recordTest] = prepareJeedomTest()

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
