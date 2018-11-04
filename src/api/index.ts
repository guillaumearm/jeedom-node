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
  object: {
    all: () => jeedomRpc('object::all'),
    full: () => jeedomRpc('object::full'),
    fullById: (params) => jeedomRpc('object::fullById', params),
  },
})

export * from './types/index'
