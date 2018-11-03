export type PingResponse = Promise<'pong'>
export type VersionResponse = Promise<string>
export type DatetimeResponse = Promise<number>

export type ConfigByKeyParams = {
  key: string
  plugin?: string
  default?: string
}

export type ConfigByKeyResponse = any

export type JeedomApi = {
  ping: () => PingResponse
  version: () => VersionResponse
  datetime: () => DatetimeResponse
  config: {
    byKey: (params: ConfigByKeyParams) => ConfigByKeyResponse
  }
}
