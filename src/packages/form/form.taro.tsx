import React, { ReactNode } from 'react'
import { Form as TForm } from '@tarojs/components'
import classNames from 'classnames'
import { Context } from './context'
import { SECRET, useForm } from './useform.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Cell from '@/packages/cell/index.taro'
import { FormInstance } from '@/packages/form/types'

export interface FormProps extends BasicComponent {
  footer: ReactNode
  initialValues: any
  name: string
  form: any
  disabled: boolean
  divider: boolean
  validateTrigger: string | string[] | false
  labelPosition: 'top' | 'left' | 'right'
  starPosition: 'left' | 'right'
  onFinish: (values: any) => void
  onFinishFailed: (values: any, errorFields: any) => void
}

const defaultProps = {
  ...ComponentDefaults,
  labelPosition: 'right',
  starPosition: 'left',
  disabled: false,
  divider: false,
  validateTrigger: 'onChange',
  onFinish: (values) => {},
  onFinishFailed: (values, errorFields) => {},
} as FormProps

const PositionInfo: any = {
  top: 'form-layout-top',
  left: 'form-layout-left',
  right: 'form-layout-right',
}

export const Form = React.forwardRef<FormInstance, Partial<FormProps>>(
  (props, ref) => {
    const classPrefix = 'nut-form'
    const {
      className,
      style,
      footer,
      children,
      initialValues,
      divider,
      disabled,
      onFinish,
      onFinishFailed,
      validateTrigger,
      labelPosition,
      starPosition,
      form,
    } = {
      ...defaultProps,
      ...props,
    }

    let formInstance: FormInstance
    if (form !== undefined) {
      formInstance = form
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ;[formInstance] = useForm()
    }
    React.useImperativeHandle(ref, () => formInstance)
    ;(formInstance as any).starPosition = starPosition
    const { submit, resetFields } = formInstance
    const { setCallback, setInitialValues } = formInstance.getInternal(SECRET)
    // 设置校验后的回调，给组件的使用者暴露的接口
    setCallback({
      onFinish,
      onFinishFailed,
    })
    // 初始化 initialValues 和 store
    const mountRef = React.useRef<boolean>(false)
    setInitialValues(initialValues, !mountRef.current)
    if (!mountRef.current) {
      mountRef.current = true
    }

    return (
      <TForm
        className={classNames(
          classPrefix,
          PositionInfo[labelPosition],
          className
        )}
        style={style}
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          submit()
        }}
        onReset={(e) => {
          e.preventDefault()
          e.stopPropagation()
          resetFields()
        }}
      >
        <Cell.Group divider={divider}>
          <Context.Provider
            value={{ formInstance, labelPosition, disabled, validateTrigger }}
          >
            {children}
          </Context.Provider>
          {footer ? (
            <Cell className={`${classPrefix}-footer`}>{footer}</Cell>
          ) : null}
        </Cell.Group>
      </TForm>
    )
  }
)

Form.displayName = 'NutForm'
