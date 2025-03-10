import { Checkbox } from './checkbox.taro'
import { CheckboxGroup } from '../checkboxgroup/checkboxgroup.taro'
import { TaroCheckboxProps } from '@/types'

export type { TaroCheckboxProps as CheckboxProps } from '@/types'

type CompoundedComponent = React.FC<
  Partial<TaroCheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof CheckboxGroup
}
const InnerCheckbox = Checkbox as CompoundedComponent
InnerCheckbox.Group = CheckboxGroup

export default InnerCheckbox
