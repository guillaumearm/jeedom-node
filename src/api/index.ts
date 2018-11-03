import { RpcInterface } from '../rpc/helpers'
import { JeedomApi } from '../types'

export const createJeedomApi = (jeedomRpc: RpcInterface): JeedomApi => ({
  ping: () => jeedomRpc('ping'),
  version: () => jeedomRpc('version'),
  datetime: () => jeedomRpc('datetime'),
})
