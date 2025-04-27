import React from 'react'
import classNames from 'classnames'
import { Form as TForm } from '@tarojs/components'
import { Context } from './context'
import { SECRET, useForm } from './useform.taro'
import { ComponentDefaults } from '@/utils/typings'
import Cell from '@/packages/cell/index.taro'
import { TaroFormProps, FormInstance } from '@/types'

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
} as TaroFormProps

const PositionInfo: any = {
  top: 'form-layout-top',
  left: 'form-layout-left',
  right: 'form-layout-right',
}

export const Form = React.forwardRef<FormInstance, Partial<TaroFormProps>>(
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
      onReset,
      onSubmit,
      form,
      ...rest
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
        {...rest}
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
      </TForm>
    )
  }
)

Form.displayName = 'NutForm'
