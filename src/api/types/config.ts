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

export type ConfigApi = {
  config: {
    byKey: (params: ConfigByKeyParams) => Promise<string>
    save: (params: ConfigSaveParams) => Promise<void>
  }
}
