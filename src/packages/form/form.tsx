import React, { FunctionComponent } from 'react'
import CellGroup from '../cellgroup'
import { FormItemContext } from '../formitem/formitemcontext'
import { useForm } from './useForm'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { FormItem } from '../formitem/formitem'
import { BaseForm } from './types'

export interface FormProps extends BasicComponent, BaseForm {}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: undefined,
  form: {},
  labelPosition: 'Right',
  formGroupTitle: '',
  onFinish: (obj) => {},
  onFinishFailed: (value) => {},
  starPositon: 'Left',
} as FormProps

const PositionInfo: any = {
  Top: 'form-layout-top',
  Left: 'form-layout-left',
  Right: 'form-layout-right',
}

export const Form: FunctionComponent<
  Partial<FormProps> & React.HTMLAttributes<HTMLFormElement>
> & { Item: typeof FormItem } & { useForm: typeof useForm } = (props) => {
  const {
    children,
    onFinish,
    onFinishFailed,
    labelPosition,
    starPositon,
    form,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  let formInstance: any = {}

  if (Object.keys(form).length !== 0) {
    formInstance = form
  } else {
    ;[formInstance] = useForm()
  }

  formInstance.starPositon = starPositon
  const { setCallback, submit, resetFields } = formInstance

  setCallback({
    onFinish,
    onFinishFailed,
  })

  return (
    <form
      className={`nut-form ${PositionInfo[labelPosition]} ${props.className}`}
      style={props.style}
      onSubmit={(e) => {
        e.preventDefault()
        submit()
      }}
      onReset={(e) => {
        e.preventDefault()
        resetFields()
      }}
      // {...rest}
    >
      <CellGroup>
        <FormItemContext.Provider value={formInstance}>
          {children}
        </FormItemContext.Provider>
      </CellGroup>
    </form>
  )
}

Form.defaultProps = defaultProps
Form.displayName = 'NutForm'
Form.Item = FormItem
Form.useForm = useForm
