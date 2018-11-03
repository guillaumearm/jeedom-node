import { JeedomMiscApi } from './misc'
import { JeedomConfigApi } from './config'

export type JeedomApi = JeedomMiscApi & JeedomConfigApi
