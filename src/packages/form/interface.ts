export type StoreValue = string | number
export type NamePath = string | number

export interface Callbacks<Values = any> {
  onValuesChange?: (values: Values) => void
  onFinish?: (values: Values) => void
  onFinishFailed?: (Values: Values) => void
}

export interface Store {
  [name: string]: StoreValue
}

export interface FormInstance<Values = any> {
  registerField: (entity: FieldEntity) => () => void
  getFieldValue: (name: NamePath) => StoreValue
  // getFieldsValue(): Values
  setFieldsValue: (value: any) => void
  // validateFields: (nameList?: NamePath[]) => Promise<Store>
  resetFields: (fields?: NamePath[]) => void
  submit: () => void
  setCallback: (callbacks: Callbacks) => void
}

export interface FieldEntity {
  onStoreChange: () => void
  getNamePath: () => NamePath
  props: {
    name: NamePath
    rules?: any[]
    dependencies?: NamePath[]
    initialValue?: any
  }
}

export interface IDescriptor {
  [name: string]: string
}
