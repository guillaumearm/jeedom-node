export type JeedomOptions = {
  host: string
  apikey: string
}

export type PingResponse = Promise<'pong'>
export type VersionResponse = Promise<string>
export type DatetimeResponse = Promise<number>

export type JeedomApi = {
  ping: () => PingResponse
  version: () => VersionResponse
  datetime: () => DatetimeResponse
}
