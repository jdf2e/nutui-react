import React, { FunctionComponent } from 'react'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CellGroup from '@/packages/cellgroup/index.taro'
import FormItem from '@/packages/formitem/index.taro'
import { FormItemContext } from '../formitem/formitemcontext'
import { useForm } from './useForm.taro'
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
> & { Item: typeof FormItem } = (props) => {
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

  console.log('46 dddd')

  const [formInstance] = useForm()
  formInstance.starPositon = starPositon
  const { setCallback, submit } = formInstance

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
