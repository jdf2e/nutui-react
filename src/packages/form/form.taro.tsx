import React, { FunctionComponent } from 'react'
import './form.scss'
import { useConfig } from '@/packages/configprovider'

export interface FormProps {}
const defaultProps = {} as FormProps
export const Form: FunctionComponent<
  Partial<FormProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-form">Form</div>
}

Form.defaultProps = defaultProps
Form.displayName = 'NutForm'
