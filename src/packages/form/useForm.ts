import { useRef } from 'react'
import Schema from 'async-validator'
import { Store, Callbacks, FormInstance, FieldEntity } from './types'

/**
 * 用于存储表单的数据
 */
class FormStore {
  // 初始化数据
  private initialValues: Store = {}

  // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}
  private store: Store = {}

  // 所有的组件实例
  private fieldEntities: FieldEntity[] = []

  // 校验成功或失败的回调，onFinish、onFinishFailed
  private callbacks: Callbacks = {}

  private errors: any[] = []

  constructor() {
    this.callbacks = {
      onFinish: () => {},
      onFinishFailed: () => {},
    }
  }

  /**
   * 注册组件实例
   * @param field
   */
  registerField = (field: any) => {
    this.fieldEntities.push(field)
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item) => item != field)
      delete this.store[field.props.name]
    }
  }

  /**
   * 获取 formItem 的值
   * @param name
   */
  getFieldValue = (name: string) => {
    return this.store?.[name]
  }

  /**
   * 设置 form 的初始值，之后在 reset 的时候使用
   * @param values
   * @param init
   */
  setInitialValues = (values: Store, init: boolean) => {
    if (init) {
      this.initialValues = values
      this.store = values
    }
  }

  /**
   * 存储组件数据
   * @param newStore { [name]: newValue }
   */
  setFieldsValue = (newStore: any) => {
    this.store = {
      ...this.store,
      ...newStore,
    }
    console.log(this.store)
    this.fieldEntities.forEach((enetity: FieldEntity) => {
      const { name } = enetity.props
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          enetity.onStoreChange('update')
        }
      })
    })
  }

  /**
   * 表单校验
   * rules: { required: true, message: '' }
   * descriptor: {
   *    username: {
   *      type: 'string',
   *      required: true,
   *      validator: (rule, value) => {
   *        return /^[a-zA-Z0-9]+$/.test(value)
   *      },
   *    },
   *  }
   */
  validate = () => {
    const err: any = []
    this.errors.length = 0
    this.fieldEntities.forEach((entity: FieldEntity) => {
      const { name, rules = [] } = entity.props
      const descriptor: any = {}
      if (rules.length) {
        // 多条校验规则
        if (rules.length > 1) {
          descriptor[name] = []
          rules.forEach((v: any) => {
            descriptor[name].push(v)
          })
        } else {
          descriptor[name] = rules[0]
        }
      }
      const validator = new Schema(descriptor)
      validator.messages()
      validator.validate({ [name]: this.store?.[name] }, (errors) => {
        if (errors) {
          err.push(...errors)
          this.errors.push(...errors)
          // 表单项更新
        }
        entity.onStoreChange('validate')
      })
    })
    return err
  }

  setCallback = (callback: Callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    }
  }

  submit = () => {
    const errors = this.validate()
    if (errors.length === 0) {
      this.callbacks.onFinish?.(this.store)
    } else if (errors.length > 0) {
      this.callbacks.onFinishFailed?.(errors)
    }
  }

  resetFields = () => {
    console.log('resetFields', this.store, this.initialValues)
    this.errors.length = 0
    this.store = {}
    this.fieldEntities.forEach((entity: FieldEntity) => {
      console.log(entity)
      entity.onStoreChange('reset')
    })
  }

  getForm = () => {
    return {
      setInitialValues: this.setInitialValues,
      setCallback: this.setCallback,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      resetFields: this.resetFields,
      submit: this.submit,
      store: this.store,
      errList: this.errors,
      fieldEntities: this.fieldEntities,
    }
  }
}

export const useForm = (form?: FormInstance) => {
  const formRef = useRef<any>()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}
