import { ReactNode } from 'react'

export interface FormItemRuleWithoutValidator {
  [key: string]: any
  regex?: RegExp
  required?: boolean
  message?: string
}
export interface FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (
    ruleCfg: FormItemRuleWithoutValidator,
    value: any
  ) => boolean | string | Promise<boolean | string>
}

export interface BaseFormField {
  /**
   * 字段名
   */
  name: string
  /**
   * label 标签的文本
   */
  label: ReactNode
  /**
   * 校验规则，设置字段的校验逻辑
   */
  rules: FormItemRule[]
  /**
   * 是否禁用表单项
   */
  disabled: boolean
}

type StoreValue = any
type NamePath = string | number

export interface Callbacks<Values = any> {
  onValuesChange?: (values: Values) => void
  onFinish?: (values: Values) => void
  onFinishFailed?: (Values: Values) => void
}

export interface FormInstance<Values = any> {
  registerField: (entity: FormFieldEntity) => () => void
  getFieldValue: (name: NamePath) => StoreValue
  setFieldsValue: (value: any) => void
  resetFields: (fields?: NamePath[]) => void
  submit: () => void
  setCallback: (callbacks: Callbacks) => void
}

export interface FormFieldEntity {
  onStoreChange: () => void
  getNamePath: () => NamePath
  props: {
    name: NamePath
    rules?: any[]
    dependencies?: NamePath[]
    initialValue?: any
  }
}
