import React, { FunctionComponent } from 'react'
import './form.scss'
import CellGroup from '../cellgroup'
import { FormFieldContext } from './FormFieldContext'
import { useForm } from './useForm'
import { IComponent, ComponentDefaults } from '@/utils/typings'
import { FormField } from './formField'
import { BaseForm } from './types'

export interface FormProps extends IComponent, BaseForm {}

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
> & { Item: typeof FormField } = (props) => {
  const {
    children,
    onFinish,
    onFinishFailed,
    labelPosition,
    starPositon,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [formInstance] = useForm()
  formInstance.starPositon = starPositon
  const { setCallback, submit } = formInstance

  setCallback({
    onFinish,
    onFinishFailed,
  })

  return (
    <form
      className={`nut-form ${PositionInfo[labelPosition]}`}
      onSubmit={(e) => {
        e.preventDefault()
        submit()
      }}
      // {...rest}
    >
      <CellGroup>
        <FormFieldContext.Provider value={formInstance}>
          {children}
        </FormFieldContext.Provider>
      </CellGroup>
    </form>
  )
}

Form.defaultProps = defaultProps
Form.displayName = 'NutForm'
Form.Item = FormField
