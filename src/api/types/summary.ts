export type SummaryGlobalParams = {
  key?: string
}

export type SummaryByIdParams = SummaryGlobalParams & {
  id: string | number
}

export type SummaryApi = {
  summary: {
    global: (params: SummaryGlobalParams) => Promise<any>
    byId: (params: SummaryByIdParams) => Promise<any>
  }
}
