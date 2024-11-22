import { Checkbox, CheckboxProps } from './checkbox'
import { CheckboxGroup } from '../checkboxgroup/checkboxgroup'

export type { CheckboxProps, CheckboxShape } from './checkbox'

type CompoundedComponent = React.FC<
  Partial<CheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof CheckboxGroup
}
const InnerCheckbox = Checkbox as CompoundedComponent
InnerCheckbox.Group = CheckboxGroup

export default InnerCheckbox
