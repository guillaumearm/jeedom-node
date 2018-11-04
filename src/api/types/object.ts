export type JeedomObject = {
  configuration: object
  display: object
  father_id: string | null
  id: string
  isVisible: '1' | '0'
  name: string
  position: string | null
}

export type FullJeedomObject = JeedomObject & {
  eqLogics: any
}

export type ObjectByIdParams = { id: string | number }

export type ObjectSaveParams =
  | (Partial<JeedomObject> & { id: string | number })
  | (Partial<JeedomObject> & { name: string | number })

export type ObjectApi = {
  object: {
    all: () => Promise<JeedomObject[]>
    full: () => Promise<FullJeedomObject[]>
    fullById: (params: ObjectByIdParams) => Promise<FullJeedomObject>
    byId: (params: ObjectByIdParams) => Promise<JeedomObject>
    save: (params: ObjectSaveParams) => Promise<any>
  }
}
