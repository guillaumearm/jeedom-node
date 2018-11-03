import * as nock from 'nock'
import * as nockRecord from 'nock-record'

declare module "nock-record" {
  export type RecorderApi = {
    assertScopesFinished: any
    scopes: nock.Scope[]
    isLoaded: boolean
    completeRecording: () => void
  }

  export type Recorder = (fixtureName: string, options?: nock.NockBackOptions) => Promise<RecorderApi>
}
