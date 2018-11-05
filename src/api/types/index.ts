import { MiscApi } from './misc'
import { EventApi } from './event'
import { ConfigApi } from './config'
import { ObjectApi } from './object'
import { SummaryApi } from './summary'

export type JeedomApi = MiscApi & ConfigApi & EventApi & ObjectApi & SummaryApi

export * from './misc'
export * from './event'
export * from './config'
export * from './object'
export * from './summary'
