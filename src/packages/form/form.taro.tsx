import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Cell from '@/packages/cell/index.taro'
import { Context } from './context'
import { useForm } from './useform.taro'
import { FormInstance } from '@/packages/form/types'

export interface FormProps extends BasicComponent {
  footer: ReactNode
  initialValues: any
  name: string
  form: any
  divider: boolean
  labelPosition: 'top' | 'left' | 'right'
  starPosition: 'left' | 'right'
  onFinish: (values: any) => void
  onFinishFailed: (values: any, errorFields: any) => void
}

const defaultProps = {
  ...ComponentDefaults,
  labelPosition: 'right',
  starPosition: 'left',
  divider: false,
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
      onFinish,
      onFinishFailed,
      labelPosition,
      starPosition,
      form,
    } = {
      ...defaultProps,
      ...props,
    }

    let formInstance
    if (form !== undefined) {
      formInstance = form
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ;[formInstance] = useForm()
    }
    formInstance.starPosition = starPosition
    const { setCallback, submit, resetFields, setInitialValues } = formInstance
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
      <form
        className={classNames(
          classPrefix,
          className,
          PositionInfo[labelPosition]
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
          <Context.Provider value={formInstance}>{children}</Context.Provider>
          {footer ? <Cell>{footer}</Cell> : null}
        </Cell.Group>
      </form>
    )
  }
)

Form.defaultProps = defaultProps
Form.displayName = 'NutForm'
