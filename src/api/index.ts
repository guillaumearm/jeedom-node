import { RpcInterface } from '../rpc/helpers'
import { JeedomApi } from './types'

export const createJeedomApi = (jeedomRpc: RpcInterface): JeedomApi => ({
  ping: () => jeedomRpc('ping'),
  version: () => jeedomRpc('version'),
  datetime: () => jeedomRpc('datetime'),
  config: {
    byKey: (params) => jeedomRpc('config::byKey', params),
  },
})

export * from './types'
