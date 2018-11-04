import { EventApi } from './event'
import { MiscApi } from './misc'
import { ConfigApi } from './config'
import { ObjectApi } from './object'

export type JeedomApi = MiscApi & ConfigApi & EventApi & ObjectApi
