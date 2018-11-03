export type ConfigByKeyParams = {
  key: string
  plugin?: string
  default?: string
}

export type JeedomApi = {
  ping: () => Promise<'pong'>
  version: () => Promise<string>
  datetime: () => Promise<number>
  config: {
    byKey: (params: ConfigByKeyParams) => Promise<string>
  }
}
