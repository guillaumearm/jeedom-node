import { JeedomOptions } from './types'
import { createJeedomApi, JeedomApi } from './api'
import { createJeedomRpcInterface } from './rpc/jeedom'

const jeedomGuards = (options: JeedomOptions): JeedomOptions => {
  if (!options.apikey) {
    throw new Error('Jeedom: no "apikey" passed in constructor')
  }
  if (!options.host) {
    throw new Error('Jeedom: no "host" passed in constructor')
  }
  return options
}

const Jeedom = (options: JeedomOptions): JeedomApi => {
  jeedomGuards(options)
  return createJeedomApi(createJeedomRpcInterface(options))
}

export default Jeedom
export * from './types'
export * from './api/types/index'
