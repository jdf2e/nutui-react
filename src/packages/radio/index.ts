import React from 'react'
import { Radio, RadioProps } from './radio'
import { RadioGroup } from '../radiogroup/radiogroup'

export type { RadioProps } from './radio'
export type { RadioShape, RadioPosition } from './types'
type CompoundedComponent = React.FC<
  Partial<RadioProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof RadioGroup
}
const InnerRadio = Radio as CompoundedComponent
InnerRadio.Group = RadioGroup

export default InnerRadio
