import { Checkbox, CheckboxProps } from './checkbox.taro'
import { CheckboxGroup } from '../checkboxgroup/checkboxgroup.taro'

export type { CheckboxProps, CheckboxShape } from './checkbox.taro'

type CompoundedComponent = React.FC<
  Partial<CheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof CheckboxGroup
}
const InnerCheckbox = Checkbox as CompoundedComponent
InnerCheckbox.Group = CheckboxGroup

export default InnerCheckbox
