import React from 'react'
import { Form } from './form.taro'
import { FormItem } from '../formitem/formitem.taro'
import { useForm, useWatch } from '@/packages/form/useform.taro'
import { FormInstance, TaroFormProps } from '@/types'

export type {
  FormItemRuleWithoutValidator,
  FormInstance,
  FormFieldEntity,
  NamePath,
  Store,
  TaroFormProps as FormProps,
} from '@/types'

type CompoundedComponent = React.ForwardRefExoticComponent<
  Partial<TaroFormProps> &
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
