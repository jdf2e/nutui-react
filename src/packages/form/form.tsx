import React, { ReactNode } from 'react'
import './form.scss'
import { useConfig } from '@/packages/configprovider'

export class FormItemRuleWithoutValidator {
  [key: string]: any

  regex?: RegExp

  required?: boolean

  message!: string
}

export interface FormItemRule {
  onValidator?: (
    value: any,
    ruleCfg: FormItemRuleWithoutValidator
  ) => boolean | string | Promise<boolean | string>
}

export interface FormProps {
  modelValue?: {}
  rules?: FormItemRule[]
  children?: ReactNode
  onValidate?: () => void
  onSubmit?: () => void
  onReset?: () => void
}
const defaultProps = {} as FormProps

export const Form = React.forwardRef<
  unknown,
  Partial<FormProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const { modelValue, rules, children } = { ...defaultProps, ...props }

  console.log('FormProps')

  const showErrorTip = () => {
    console.log('showErrorTip')
  }

  const checkRule = () => {
    console.log('checkRule')
  }

  const onValidate = () => {
    console.log('onValidate')
  }

  const onSubmit = () => {
    console.log('onSubmit')
  }

  const onReset = () => {
    console.log('onReset')
  }

  return <div className="nut-form">{children}</div>
})

Form.defaultProps = defaultProps
Form.displayName = 'NutForm'
