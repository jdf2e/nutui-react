import React from 'react'
import { Form, FormProps } from './form'
import { FormItem } from '../formitem/formitem'
import { FormInstance } from './types'
import { useForm, useWatch } from '@/packages/form/useform'

export type {
  FormItemRuleWithoutValidator,
  FormInstance,
  FormFieldEntity,
} from './types'

type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<FormProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> &
    React.RefAttributes<FormInstance>
> & {
  Item: typeof FormItem
  useForm: typeof useForm
  useWatch: typeof useWatch
}

const InnerForm = Form as CompoundedComponent

InnerForm.Item = FormItem
InnerForm.useForm = useForm
InnerForm.useWatch = useWatch

export default InnerForm
