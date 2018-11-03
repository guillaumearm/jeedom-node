import { RpcInterface } from '../rpc/helpers'
import { JeedomApi } from './types/index'

export const createJeedomApi = (jeedomRpc: RpcInterface): JeedomApi => ({
  ping: () => jeedomRpc('ping'),
  version: () => jeedomRpc('version'),
  datetime: () => jeedomRpc('datetime'),
  config: {
    byKey: (params) => jeedomRpc('config::byKey', params),
    save: (params) => jeedomRpc('config::save', params),
  },
  event: {
    changes: (params) => jeedomRpc('event::changes', params),
  },
})

export * from './types/index'
