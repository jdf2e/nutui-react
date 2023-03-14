import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Checked, CheckDisabled, CheckNormal } from '@nutui/icons-react'
import CheckboxGroup from '@/packages/checkboxgroup'
import bem from '@/utils/bem'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Context from '../checkboxgroup/context'

export interface CheckboxProps extends BasicComponent {
  checked: boolean
  disabled: boolean
  textPosition: 'left' | 'right'
  iconSize: string | number
  icon: React.ReactNode
  checkedIcon: React.ReactNode
  indeterminateIcon: React.ReactNode
  iconClassPrefix: string
  iconFontClassName: string
  indeterminate: boolean
  label: string | number
  onChange: (state: boolean, label: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  checked: false,
  disabled: false,
  textPosition: 'right',
  iconSize: 18,
  icon: 'check-normal',
  checkedIcon: 'checked',
  iconClassPrefix: 'nut-icon',
  iconFontClassName: 'nutui-iconfont',
  indeterminateIcon: 'check-disabled',
  onChange: (state, label) => {},
} as CheckboxProps
export const Checkbox: FunctionComponent<
  Partial<CheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & { Group: typeof CheckboxGroup } = (props) => {
  const { children } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('checkbox')
  const {
    icon,
    iconSize,
    label,
    className,
    checkedIcon,
    checked,
    disabled,
    onChange,
    indeterminate,
    iconClassPrefix,
    iconFontClassName,
    indeterminateIcon,
    ...others
  } = props as any
  // eslint-disable-next-line prefer-const
  let { textPosition, ...rest } = others
  const ctx = useContext(Context)

  let [innerChecked, setInnerChecked] = useState(checked)
  // eslint-disable-next-line prefer-const
  let [innerDisabled, setDisabled] = useState(disabled)
  const [_indeterminate, setIndeterminate] = useState(indeterminate)

  useEffect(() => {
    !ctx && setInnerChecked(checked)
    setDisabled(disabled)
    setIndeterminate(indeterminate)
  }, [disabled, checked, indeterminate])

  if (ctx) {
    if (ctx.textPosition !== undefined) {
      textPosition = ctx.textPosition
    }
    innerDisabled = ctx.disabled
    innerChecked = ctx.checkedValue.includes(label)
    setInnerChecked = (checked: boolean) => {
      if (ctx.disabled) return
      if (checked) ctx.check(label)
      if (!checked) ctx.uncheck(label)
    }
  }

  const renderIcon = () => {
    if (!innerChecked) {
      return React.isValidElement(icon) ? (
        icon
      ) : (
        <CheckNormal width={iconSize} height={iconSize} className={color()} />
      )
    }
    if (_indeterminate) {
      return React.isValidElement(indeterminateIcon) ? (
        indeterminateIcon
      ) : (
        <CheckDisabled width={iconSize} height={iconSize} className={color()} />
      )
    }
    return React.isValidElement(checkedIcon) ? (
      checkedIcon
    ) : (
      <Checked width={iconSize} height={iconSize} className={color()} />
    )
  }
  const color = () => {
    if (innerDisabled) {
      return 'nut-checkbox__icon--disable'
    }
    if (innerChecked) {
      if (_indeterminate) {
        return 'nut-checkbox__icon--indeterminate'
      }
      return 'nut-checkbox__icon'
    }
    return 'nut-checkbox__icon--unchecked'
  }
  const renderLabel = () => {
    return (
      <span className={`${b('label', { disabled: innerDisabled })} `}>
        {children || label}
      </span>
    )
  }

  const handleClick = () => {
    // 禁用的时候直接返回
    if (disabled) return
    // 先转换状态
    const latestChecked = !innerChecked
    // 判断是不是有 context 和 max，有的话需要判断是不是超过最大限制
    if (ctx && ctx.max !== undefined) {
      if (latestChecked && ctx.checkedValue.length >= ctx.max) return
    }
    onChange && onChange(latestChecked, label || (children as string))
    setInnerChecked(latestChecked)
  }

  return (
    <div
      className={`${b({ reverse: textPosition === 'left' })} ${
        className || ''
      }`}
      {...rest}
      onClick={handleClick}
    >
      {renderIcon()}
      {renderLabel()}
    </div>
  )
}

Checkbox.defaultProps = defaultProps
Checkbox.displayName = 'NutCheckBox'
Checkbox.Group = CheckboxGroup
