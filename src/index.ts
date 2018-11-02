import { prop } from 'ramda'
import * as request from 'superagent'

type Response = request.Response

type Maybe<T> = T | undefined

const host = 'http://192.168.1.60'
const JEEDOM_API_KEY = process.env.JEEDOM_API_KEY || ''

type JsonRpcResponse<T = any> = {
  jsonrpc: '2.0'
  id: null | number
  result: T
  error?: { message: string; code: number }
}

const jeedom = (jeedomHost: string, apikey: string) => async (
  method: string,
  params: Record<string, string> = {},
  id: null | number = null,
): Promise<JsonRpcResponse> => {
  const url = `${jeedomHost}/core/api/jeeApi.php`
  const body = { jsonrpc: '2.0', id, method, params: { apikey, ...params } }
  const response: Response = await request.post(url).send(body)

  const rpcResponse: JsonRpcResponse = JSON.parse(response.text)
  if (rpcResponse && rpcResponse.jsonrpc === '2.0') {
    if (rpcResponse.error) {
      console.error(rpcResponse.error.message)
    }
    return rpcResponse
  }
  throw new Error('Invalid RPC response')
}

const withResult = (p: Promise<JsonRpcResponse<any>>): Promise<any> => p.then(prop('result'))

const jeedomRpc = jeedom(host, JEEDOM_API_KEY)

export const ping = (): Promise<Maybe<'pong'>> => withResult(jeedomRpc('ping'))

export const version = (): Promise<Maybe<string>> => withResult(jeedomRpc('version'))

export default {
  ping,
  version,
}
