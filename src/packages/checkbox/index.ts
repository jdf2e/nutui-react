import { Checkbox } from './checkbox'
import { CheckboxGroup } from '../checkboxgroup/checkboxgroup'
import { WebCheckboxProps } from '@/types'

export type { WebCheckboxProps as CheckboxProps } from '@/types'

type CompoundedComponent = React.FC<
  Partial<WebCheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & {
  Group: typeof CheckboxGroup
}
const InnerCheckbox = Checkbox as CompoundedComponent
InnerCheckbox.Group = CheckboxGroup

export default InnerCheckbox
