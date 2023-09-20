export interface FormItemRuleWithoutValidator {
  [key: string]: any
  regex?: RegExp
  required?: boolean
  message?: string
}

export type StoreValue = any
export type NamePath = string | number

export interface Callbacks<Values = any> {
  onValuesChange?: (values: Values) => void
  onFinish?: (values: Values) => void
  onFinishFailed?: (values: Values, errorFields: any) => void
}

export interface Store {
  [name: string]: any
}

export interface FormInstance<Values = any> {
  registerField: (entity: FieldEntity) => () => void
  getFieldValue: (name: NamePath) => StoreValue
  getFieldsValue: (nameList: NamePath[] | true) => { [key: NamePath]: any }
  setFieldsValue: (value: any) => void
  resetFields: (fields?: NamePath[]) => void
  submit: () => void
  getInternal: (secret: string) => any
}

export interface FieldEntity {
  onStoreChange: (type?: string) => void
  getNamePath: () => NamePath
  props: {
    name: NamePath
    rules?: any[]
    dependencies?: NamePath[]
    initialValue?: any
  }
}
