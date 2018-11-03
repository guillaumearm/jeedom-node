import { EventApi } from './event'
import { MiscApi } from './misc'
import { ConfigApi } from './config'

export type JeedomApi = MiscApi & ConfigApi & EventApi
