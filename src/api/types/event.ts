export type EventChangesParams = {
  datetime?: number
}

export type EventChangesResult = {
  datetime: number
  name: string
  option: any
}

export type EventChangesResponse = {
  datetime: number
  result: EventChangesResult[]
}

export type EventApi = {
  event: {
    changes: (params?: EventChangesParams) => Promise<EventChangesResponse>
  }
}
