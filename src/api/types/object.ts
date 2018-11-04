export type JeedomObject = {
  configuration: object
  display: object
  father_id: string | null
  id: string
  isVisible: '1' | '0'
  name: string
  position: any
}

export type AllResponse = JeedomObject[]

export type ObjectApi = {
  object: {
    all: () => Promise<AllResponse>
  }
}
