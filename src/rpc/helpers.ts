import * as request from 'superagent'

type Nullable<T> = T | null
type Response = request.Response

export type JsonRpcResponse<T = any> = {
  jsonrpc: '2.0'
  id: null | number
  result: T
  error?: { message: string; code: number }
}

export type Params = Record<string, string | undefined>

export type RpcInterface = (method: string, params?: Params, id?: Nullable<number>) => Promise<any>

const createRpcInterface = (url: string): RpcInterface => async (
  method,
  params = {},
  id = null,
) => {
  const body = { jsonrpc: '2.0', id, method, params }
  const response: Response = await request.post(url).send(body)

  const rpcResponse: JsonRpcResponse = JSON.parse(response.text)
  if (rpcResponse && rpcResponse.jsonrpc === '2.0') {
    if (rpcResponse.error) {
      throw new Error(rpcResponse.error.message)
    }
    return rpcResponse.result
  }
  throw new Error('Invalid RPC response')
}

export default createRpcInterface
