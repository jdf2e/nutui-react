export interface BaseForm {
  /**
   * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
   */
  form: any
  /**
   * label的位置
   * 可选值 top/left/right
   */
  labelPosition: string | number
  /**
   * 表单分组名称
   */
  formGroupTitle: string
  // 必选项星标位置
  starPositon: string
  /**
   * 表单校验成功回调
   */
  onFinish: (obj: object) => void
  /**
   * 表单校验失败回调
   */
  onFinishFailed: (value: []) => void
}

export interface FormItemRuleWithoutValidator {
  [key: string]: any
  regex?: RegExp
  required?: boolean
  message?: string
}
export interface FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (
    value: any,
    ruleCfg: FormItemRuleWithoutValidator
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
  label: string
  /**
   * 校验规则，设置字段的校验逻辑
   */
  rules: FormItemRule[]
  /**
   * 是否禁用表单项
   */
  disabled: boolean
}

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
