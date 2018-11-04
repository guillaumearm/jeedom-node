export type EventChangesParams = {
  datetime?: number
}

export type EventChangesResponse = {
  datetime: number
  name: string
  option: any
}

export type EventApi = {
  event: {
    changes: (params?: EventChangesParams) => Promise<EventChangesResponse>
  }
}
