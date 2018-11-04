import { prepareJeedomTest } from '../utils'

describe('rpc.misc', () => {
  const [api, recordTest] = prepareJeedomTest()

  recordTest('ping', async () => {
    expect(await api.ping()).toMatchSnapshot()
  })
  recordTest('version', async () => {
    expect(await api.version()).toMatchSnapshot()
  })
  recordTest('datetime', async () => {
    expect(await api.datetime()).toMatchSnapshot()
  })
})
