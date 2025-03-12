import React from 'react'
import { Radio } from './radio.taro'
import { RadioGroup } from '../radiogroup/radiogroup.taro'
import { TaroRadioProps } from '@/types'

export type { RadioShape, TaroRadioProps as RadioProps } from '@/types'

type CompoundedComponent = React.FC<
  Partial<TaroRadioProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof RadioGroup
}
const InnerRadio = Radio as CompoundedComponent
InnerRadio.Group = RadioGroup

export default InnerRadio
