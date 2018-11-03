export type MiscApi = {
  ping: () => Promise<'pong'>
  version: () => Promise<string>
  datetime: () => Promise<number>
}
