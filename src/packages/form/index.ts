import React from 'react'
import { Form } from './form'
import { FormItem } from '../formitem/formitem'
import { useForm, useWatch } from '@/packages/form/useform'
import { FormInstance, WebFormProps } from '@/types'

export type {
  FormItemRuleWithoutValidator,
  FormInstance,
  FormFieldEntity,
  NamePath,
  Store,
  WebFormProps as FormProps,
} from '@/types'

type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<WebFormProps> &
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
