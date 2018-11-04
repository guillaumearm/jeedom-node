import { evolve, take } from 'ramda'
import { prepareJeedomTest } from '../utils'

describe('rpc.event', () => {
  const [api, recordTest] = prepareJeedomTest()

  recordTest('event::changes', async () => {
    const changes = await api.event.changes()
    const prepareData = evolve({ result: take(1) })

    expect(prepareData(changes)).toMatchSnapshot()
  })
})
