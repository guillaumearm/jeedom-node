export type JeedomMiscApi = {
  ping: () => Promise<'pong'>
  version: () => Promise<string>
  datetime: () => Promise<number>
}
