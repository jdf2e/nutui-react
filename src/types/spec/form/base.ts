import { ReactNode } from 'react'
import { BaseProps } from '../../base/props'
import { TextAlign } from '../../base/atoms'

export interface BaseForm extends BaseProps {
  footer: ReactNode
  initialValues: any
  name: string
  form: any
  disabled: boolean
  divider: boolean
  validateTrigger: string | string[] | false
  labelPosition: 'top' | 'left' | 'right'
  starPosition: 'left' | 'right'
  onSubmit: () => void
  onReset: () => void
  onFinish: (values: any) => void
  onFinishFailed: (values: any, errorFields: any) => void
}

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

export interface BaseFormItem
  extends Omit<BaseProps, 'children'>,
    BaseFormField {
  required: boolean
  initialValue: any
  trigger: string
  valuePropName: string
  getValueFromEvent: (...args: any) => any
  onClick: (
    event: React.MouseEvent,
    componentRef: React.MutableRefObject<any>
  ) => void
  errorMessageAlign: TextAlign
  validateTrigger: string | string[]
  shouldUpdate: boolean
  noStyle: boolean
  children: ReactNode | ((obj: any) => React.ReactNode)
  align?: 'flex-start' | 'center' | 'flex-end'
}
