import React from 'react'
import { Radio } from './radio'
import { RadioGroup } from '../radiogroup/radiogroup'
import { WebRadioProps } from '@/types'

export type { RadioShape, WebRadioProps as RadioProps } from '@/types'
type CompoundedComponent = React.FC<
  Partial<WebRadioProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof RadioGroup
}
const InnerRadio = Radio as CompoundedComponent
InnerRadio.Group = RadioGroup

export default InnerRadio
