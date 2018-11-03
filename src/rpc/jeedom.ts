import createRpcInterface, { RpcInterface } from './helpers'
import { JeedomOptions } from '../types'
import { JEEDOM_API_ENDPOINT } from '../constants'

export const createJeedomRpcInterface = (options: JeedomOptions): RpcInterface => {
  const { apikey, host } = options
  const url = `${host}${JEEDOM_API_ENDPOINT}`
  const rpc = createRpcInterface(url)

  return (method, params) => rpc(method, { ...params, apikey })
}
