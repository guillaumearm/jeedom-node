export type JeedomObject = {
  configuration: object
  display: object
  father_id: string | null
  id: string
  isVisible: '1' | '0'
  name: string
  position: number | null
}

export type FullJeedomObject = JeedomObject & {
  eqLogics: any
}

export type ObjectByIdParams = { id: number }

export type ObjectApi = {
  object: {
    all: () => Promise<JeedomObject[]>
    full: () => Promise<FullJeedomObject[]>
    fullById: (params: ObjectByIdParams) => Promise<FullJeedomObject>
  }
}
