export type ConfigByKeyParams = {
  key: string
  plugin?: string
  default?: string
}

export type ConfigSaveParams = {
  key: string
  value?: string
  plugin?: string
}

export type JeedomApi = {
  ping: () => Promise<'pong'>
  version: () => Promise<string>
  datetime: () => Promise<number>
  config: {
    byKey: (params: ConfigByKeyParams) => Promise<string>
    save: (params: ConfigSaveParams) => Promise<null>
  }
}
