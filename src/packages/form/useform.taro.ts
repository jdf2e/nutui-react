import { useEffect, useRef, useState } from 'react'
import Schema from 'async-validator'
import { merge, recursive } from '@/utils/merge'
import {
  Callbacks,
  FormFieldEntity,
  FormInstance,
  NamePath,
  Store,
} from './types'

export const SECRET = 'NUT_FORM_INTERNAL'
type UpdateItem = { entity: FormFieldEntity; condition: any }
type WatchCallback = (value: Store, namePath: NamePath[]) => void

/**
 * 用于存储表单的数据
 */
class FormStore {
  // 初始化数据
  private initialValues: Store = {}

  private updateList: UpdateItem[] = []

  // 存放表单中所有的数据 eg. {password: "ddd",username: "123"}
  private store: Store = {}

  // 所有的组件实例
  private fieldEntities: FormFieldEntity[] = []

  // 校验成功或失败的回调，onFinish、onFinishFailed
  private callbacks: Callbacks = {}

  private errors: { [key: NamePath]: any } = {}

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
      this.fieldEntities = this.fieldEntities.filter((item) => item !== field)
    }
  }

  /**
   * 获取 formItem 的值
   * @param name
   */
  getFieldValue = (name: NamePath) => {
    return this.store?.[name]
  }

  /**
   * 获取全部字段
   */
  getFieldsValue = (nameList: NamePath[] | true): { [key: NamePath]: any } => {
    if (typeof nameList === 'boolean') {
      return JSON.parse(JSON.stringify(this.store))
    }
    const fieldsValue: { [key: NamePath]: any } = {}
    nameList.forEach((field) => {
      fieldsValue[field] = this.getFieldValue(field)
    })
    return fieldsValue
  }

  updateStore(nextStore: Store) {
    this.store = nextStore
  }

  /**
   * 设置 form 的初始值，之后在 reset 的时候使用
   * @param values
   * @param init
   */

  setInitialValues = (initialValues: Store, init: boolean) => {
    this.initialValues = initialValues || {}
    if (init) {
      const nextStore = merge(initialValues, this.store)
      this.updateStore(nextStore)
      this.notifyWatch()
    }
  }

  /**
   * 存储组件数据
   * @param newStore { [name]: newValue }
   */
  setFieldsValue = (newStore: any) => {
    const nextStore = recursive(true, this.store, newStore)
    this.updateStore(nextStore)
    this.fieldEntities.forEach((entity: FormFieldEntity) => {
      const { name } = entity.props
      Object.keys(newStore).forEach((key) => {
        if (key === name) {
          entity.onStoreChange('update')
        }
      })
    })
    this.updateList.forEach((item: UpdateItem) => {
      let shouldUpdate = item.condition
      if (typeof item.condition === 'function') {
        shouldUpdate = item.condition()
      }
      if (shouldUpdate) {
        item.entity.onStoreChange('update')
      }
    })
    this.notifyWatch()
  }

  setFieldValue = <T>(name: NamePath, value: T) => {
    const store = {
      [name]: value,
    }
    this.setFieldsValue(store)
    this.notifyWatch([name])
  }

  setCallback = (callback: Callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callback,
    }
  }

  validateEntities = async (entity: FormFieldEntity, errs: any[]) => {
    const { name, rules = [] } = entity.props

    if (!name) {
      console.warn('Form field missing name property')
      return
    }

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
    // 此处合并无值message 没有意义？
    // validator.messages()
    try {
      await validator.validate({ [name]: this.store?.[name] })
    } catch ({ errors }: any) {
      if (errors) {
        errs.push(...(errors as any[]))
        this.errors[name] = errors
      }
    } finally {
      if (!errs || errs.length === 0) {
        this.errors[name] = []
      }
    }

    entity.onStoreChange('validate')
  }

  validateFields = async (nameList?: NamePath[]) => {
    let filterEntities = []
    // this.errors.length = 0
    if (!nameList || nameList.length === 0) {
      filterEntities = this.fieldEntities
    } else {
      filterEntities = this.fieldEntities.filter(({ props: { name } }) =>
        nameList.includes(name)
      )
    }
    const errs: any[] = []
    await Promise.all(
      filterEntities.map(async (entity) => {
        await this.validateEntities(entity, errs)
      })
    )
    return errs
  }

  submit = async () => {
    const errors = await this.validateFields()
    if (errors.length === 0) {
      this.callbacks.onFinish?.(this.store)
    } else if (errors.length > 0) {
      this.callbacks.onFinishFailed?.(this.store, errors)
    }
  }

  resetFields = (namePaths?: NamePath[]) => {
    if (namePaths && namePaths.length) {
      namePaths.forEach((path) => {
        this.errors[path] = null
        this.fieldEntities.forEach((entity: FormFieldEntity) => {
          const name = entity.props.name
          if (name === path) {
            if (path in this.initialValues) {
              this.updateStore({ [path]: this.initialValues[path] })
            } else {
              delete this.store[path]
            }
            entity.onStoreChange('reset')
          }
        })
      })
    } else {
      const nextStore = merge({}, this.initialValues)
      this.updateStore(nextStore)
      this.fieldEntities.forEach((entity: FormFieldEntity) => {
        entity.onStoreChange('reset')
      })
    }
  }

  // 监听事件
  registerUpdate = (field: FormFieldEntity, shouldUpdate: any) => {
    this.updateList.push({
      entity: field,
      condition: shouldUpdate,
    })
    return () => {
      this.updateList = this.updateList.filter((i) => i.entity !== field)
    }
  }

  dispatch = ({ name }: { name: string }) => {
    this.validateFields([name])
  }

  getInternal = (key: string) => {
    if (key === SECRET) {
      return {
        registerField: this.registerField,
        setCallback: this.setCallback,
        setInitialValues: this.setInitialValues,
        dispatch: this.dispatch,
        store: this.store,
        fieldEntities: this.fieldEntities,
        registerUpdate: this.registerUpdate,
        registerWatch: this.registerWatch,
      }
    }
  }

  getForm = () => {
    return {
      getFieldValue: this.getFieldValue,
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      setFieldValue: this.setFieldValue,
      resetFields: this.resetFields,
      validateFields: this.validateFields,
      submit: this.submit,
      errors: this.errors,
      getInternal: this.getInternal,
    }
  }

  private watchList: WatchCallback[] = []

  private registerWatch = (callback: WatchCallback) => {
    this.watchList.push(callback)

    return () => {
      this.watchList = this.watchList.filter((fn) => fn !== callback)
    }
  }

  private notifyWatch = (namePath: NamePath[] = []) => {
    if (this.watchList.length) {
      let allValues
      if (!namePath || namePath.length === 0) {
        allValues = this.getFieldsValue(true)
      } else {
        allValues = this.getFieldsValue(namePath)
      }
      this.watchList.forEach((callback) => {
        callback(allValues, namePath)
      })
    }
  }
}

export const useForm = (form?: FormInstance): [FormInstance] => {
  const formRef = useRef<FormInstance>()
  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm() as FormInstance
    }
  }
  return [formRef.current as FormInstance]
}

export const useWatch = (path: NamePath, form: FormInstance) => {
  const formInstance = form.getInternal(SECRET)
  const [value, setValue] = useState<any>()
  useEffect(() => {
    const unsubscribe = formInstance.registerWatch(
      (data: any, namePath: NamePath) => {
        const value = data[path]
        setValue(value)
      }
    )
    const initialValue = form.getFieldsValue(true)
    if (value !== initialValue[path]) {
      setValue(initialValue[path])
    }
    return () => unsubscribe()
  }, [form])
  return value
}
