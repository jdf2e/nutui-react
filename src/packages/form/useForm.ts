import { useRef } from 'react'
import Schema from 'async-validator'
import { Store, Callbacks, FormInstance, FieldEntity } from './types'
/**
 * 用于存储表单的数据
 */
class FormStore {
  private store: Store = {} // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}

  private fieldEntities: FieldEntity[] = [] // 所有的组件实例

  // 成功和失败的回调
  private callbacks: Callbacks<any> = {}

  private errList: any[] = []

  constructor() {
    this.callbacks = {
      onFinish: (value: any) => {},
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

  getFieldValue = (name: string) => {
    return this.store[name]
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

    this.fieldEntities.forEach((enetity: FieldEntity) => {
      const { name } = enetity.props
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          enetity.onStoreChange()
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
    this.errList.length = 0
    this.fieldEntities.forEach((entity: FieldEntity) => {
      const { name, rules = [] } = entity.props
      const descriptor: any = {}
      if (rules.length) {
        // 多条校验规则
        if (rules.length > 1) {
          descriptor[name] = []
          rules.map((v: any) => {
            descriptor[name].push(v)
          })
        } else {
          descriptor[name] = rules[0]
        }
      }
      const validator = new Schema(descriptor)
      validator.validate({ [name]: this.store[name] }, (errors) => {
        if (errors) {
          err.push(...errors)
          this.errList.push(...errors)
          // 表单项更新
        }
        entity.onStoreChange()
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
    const err = this.validate()
    if (err.length === 0) {
      this.callbacks.onFinish?.(this.store)
    } else if (err.length > 0) {
      this.callbacks.onFinishFailed?.(err)
    }
  }

  resetFields = () => {
    this.errList.length = 0

    this.fieldEntities.forEach((enetity: FieldEntity) => {
      enetity.onStoreChange()
    })
  }

  getForm = () => {
    return {
      setCallback: this.setCallback,
      registerField: this.registerField,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      resetFields: this.resetFields,
      submit: this.submit,
      store: this.store,
      errList: this.errList,
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
