import { MiscApi } from './misc'
import { EventApi } from './event'
import { ConfigApi } from './config'
import { ObjectApi } from './object'

export type JeedomApi = MiscApi & ConfigApi & EventApi & ObjectApi

export * from './misc'
export * from './event'
export * from './config'
export * from './object'
