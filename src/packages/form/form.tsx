import React from 'react'
import classNames from 'classnames'
import { Context } from './context'
import { SECRET, useForm } from './useform'
import { ComponentDefaults } from '@/utils/typings'
import Cell from '@/packages/cell'
import { WebFormProps, FormInstance } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  labelPosition: 'right',
  starPosition: 'left',
  disabled: false,
  divider: false,
  validateTrigger: 'onChange',
  onReset: () => {},
  onSubmit: () => {},
  onFinish: (values) => {},
  onFinishFailed: (values, errorFields) => {},
} as WebFormProps

const PositionInfo: any = {
  top: 'form-layout-top',
  left: 'form-layout-left',
  right: 'form-layout-right',
}

export const Form = React.forwardRef<FormInstance, Partial<WebFormProps>>(
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
      onSubmit,
      onReset,
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
      <form
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
          onSubmit?.()
        }}
        onReset={(e) => {
          e.preventDefault()
          e.stopPropagation()
          resetFields()
          onReset?.()
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
      </form>
    )
  }
)

Form.displayName = 'NutForm'
