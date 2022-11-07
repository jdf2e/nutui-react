import React, { ReactNode } from 'react'
import './formitem.scss'
import { useConfig } from '@/packages/configprovider'
import Cell from '../cell'

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

export interface FormItemProps {
  required: boolean
  label: string
  prop: string
  rules: FormItemRule[]
  labelWidth: string | number
  labelAlign: any
  bodyAlign: any
  errorMessageAlign: any
  showErrorLine: boolean
  showErrorMessage: boolean
  children: ReactNode
  onValidate: () => void
  onSubmit: () => void
  onReset: () => void
}

const defaultProps = {
  required: false,
  label: '',
  prop: '',
  rules: [],
  labelWidth: 90,
  labelAlign: 'start',
  bodyAlign: '',
  errorMessageAlign: 'left',
  showErrorLine: false,
  showErrorMessage: false,
  children: undefined,
  onValidate: () => {},
  onSubmit: () => {},
  onReset: () => {},
} as FormItemProps
export const FormItem = React.forwardRef<
  unknown,
  Partial<FormItemProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    required,
    label,
    labelWidth,
    labelAlign,
    bodyAlign,
    errorMessageAlign,
    showErrorLine,
    showErrorMessage,
    children,
  } = {
    ...defaultProps,
    ...props,
  }

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }
  return (
    <Cell className={`nut-form-item ${showErrorLine ? 'line' : ''} ${'error'}`}>
      {label ? (
        <div
          className={`nut-cell__title nut-form-item__label ${
            required ? 'required' : ''
          }`}
          style={{
            width: pxCheck(labelWidth),
            textAlign: labelAlign,
          }}
        >
          {label}
        </div>
      ) : null}
      <div
        className="nut-cell__value nut-form-item__body"
        style={{ textAlign: bodyAlign }}
      >
        <div className="nut-form-item__body__slots">{children}</div>
        {showErrorMessage ? (
          <div
            className="nut-form-item__body__tips"
            style={{ textAlign: errorMessageAlign }}
          >
            {/* errormessage */}
          </div>
        ) : (
          ''
        )}
      </div>
    </Cell>
  )
})

FormItem.defaultProps = defaultProps
FormItem.displayName = 'NutFormItem'
