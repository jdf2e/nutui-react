export interface FormItemRuleWithoutValidator {
  [key: string]: any

  regex?: RegExp
  required?: boolean
  message?: string
}

type StoreValue = any
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
  getFieldValue: (name: NamePath) => StoreValue
  setFieldValue: <T = any>(name: NamePath, value: T) => void
  getFieldsValue: (nameList: NamePath[] | true) => { [key: NamePath]: any }
  setFieldsValue: (value: Store) => void
  resetFields: (fields?: NamePath[]) => void
  submit: () => void
  getInternal: (secret: string) => any
  validateFields: (nameList?: NamePath[]) => Promise<any[]>
}

export interface FormFieldEntity {
  onStoreChange: (type?: string) => void
  getNamePath: () => NamePath
  props: {
    name: NamePath
    rules?: any[]
    dependencies?: NamePath[]
    initialValue?: any
  }
}
