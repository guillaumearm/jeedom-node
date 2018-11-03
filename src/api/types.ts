export type PingResponse = Promise<'pong'>
export type VersionResponse = Promise<string>
export type DatetimeResponse = Promise<number>

export type JeedomApi = {
  ping: () => PingResponse
  version: () => VersionResponse
  datetime: () => DatetimeResponse
}
