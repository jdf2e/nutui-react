import React, { FunctionComponent } from 'react'
import './formitem.scss'
import { useConfig } from '@/packages/configprovider'

export interface FormItemProps {}
const defaultProps = {} as FormItemProps
export const FormItem: FunctionComponent<
  Partial<FormItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-formitem">FormItem</div>
}

FormItem.defaultProps = defaultProps
FormItem.displayName = 'NutFormItem'
