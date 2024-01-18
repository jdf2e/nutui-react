import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Checked, CheckDisabled, CheckNormal } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import CheckboxGroup from '@/packages/checkboxgroup/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Context from '../checkboxgroup/context'
import { usePropsValue } from '@/utils/use-props-value'
import { CheckboxLabelPosition } from '@/packages/checkboxgroup/types'

export type CheckboxShape = 'button' | 'round'

export interface CheckboxProps extends BasicComponent {
  checked: boolean
  disabled: boolean
  defaultChecked: boolean
  shape: CheckboxShape
  labelPosition: CheckboxLabelPosition
  icon: ReactNode
  activeIcon: ReactNode
  indeterminateIcon: ReactNode
  value: string | number
  indeterminate: boolean
  label: ReactNode
  onChange: (value: boolean) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  shape: 'round',
  labelPosition: 'right',
  icon: null,
  activeIcon: null,
  indeterminateIcon: null,
  onChange: (value) => {},
} as CheckboxProps

const classPrefix = 'nut-checkbox'
export const Checkbox: FunctionComponent<
  Partial<CheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & { Group: typeof CheckboxGroup } = (props) => {
  const { children } = {
    ...defaultProps,
    ...props,
  }
  const {
    icon,
    label,
    className,
    activeIcon,
    checked,
    value,
    defaultChecked,
    shape,
    disabled,
    onChange,
    indeterminate,
    indeterminateIcon,
    ...others
  } = props as any
  // eslint-disable-next-line prefer-const
  let { labelPosition, ...rest } = others
  const ctx = useContext(Context)

  let [innerChecked, setChecked] = usePropsValue<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
    finalValue: defaultChecked,
    onChange,
  })
  // eslint-disable-next-line prefer-const
  let [innerDisabled, setDisabled] = useState(disabled)
  const [innerIndeterminate, setIndeterminate] = useState(indeterminate)

  useEffect(() => {
    setDisabled(disabled)
  }, [disabled])

  useEffect(() => {
    setIndeterminate(indeterminate)
  }, [indeterminate])

  if (ctx) {
    if (ctx.labelPosition !== undefined) {
      labelPosition = ctx.labelPosition
    }
    innerDisabled = ctx.disabled !== undefined ? ctx.disabled : innerDisabled
    innerChecked = ctx.value.includes(value)
    setChecked = (checked: boolean) => {
      if (ctx.disabled) return
      if (checked) ctx.check(value)
      if (!checked) ctx.uncheck(value)
    }
  }

  const renderIcon = () => {
    if (innerDisabled) {
      if (innerIndeterminate) {
        return <CheckDisabled className={color()} />
      }
      if (innerChecked) {
        return <Checked className={color()} />
      }
      return <CheckDisabled className={color()} />
    }
    if (!innerChecked) {
      return React.isValidElement(icon) ? (
        icon
      ) : (
        <CheckNormal className={color()} />
      )
    }
    if (innerIndeterminate) {
      return React.isValidElement(indeterminateIcon) ? (
        indeterminateIcon
      ) : (
        <CheckDisabled className={color()} />
      )
    }
    return React.isValidElement(activeIcon) ? (
      activeIcon
    ) : (
      <Checked className={color()} />
    )
  }
  const color = () => {
    const cls = `${classPrefix}-icon `
    if (innerDisabled) {
      if (innerChecked && !innerIndeterminate) {
        return `${cls}${classPrefix}-icon-checked ${classPrefix}-icon-disabled`
      }
      return `${cls}${classPrefix}-icon-disabled`
    }
    if (innerChecked) {
      if (innerIndeterminate) {
        return `${cls}${classPrefix}-icon-indeterminate`
      }
      return `${cls}${classPrefix}-icon-checked`
    }
    return cls
  }
  const renderLabel = () => {
    return (
      <span
        className={classNames(`${classPrefix}-label `, {
          [`${classPrefix}-label-disabled`]: innerDisabled,
        })}
      >
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
      if (latestChecked && ctx.value.length >= ctx.max) {
        return ctx.onLimit?.('max')
      }
    }
    setChecked(latestChecked)
  }

  const renderButton = () => {
    return (
      <div
        className={classNames(`${classPrefix}-button`, {
          [`${classPrefix}-button-active`]: innerChecked,
          [`${classPrefix}-button-disabled`]: disabled,
        })}
      >
        {children || label}
        {innerChecked && activeIcon ? (
          <div className={classNames(`${classPrefix}-button-icon`)}>
            {activeIcon}
          </div>
        ) : null}
      </div>
    )
  }

  const renderCheckboxItem = () => {
    if (shape === 'button') {
      return renderButton()
    }
    return (
      <>
        {renderIcon()}
        {renderLabel()}
      </>
    )
  }

  return (
    <div
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-reverse`]: labelPosition === 'left',
        },
        className
      )}
      {...rest}
      onClick={handleClick}
    >
      {renderCheckboxItem()}
    </div>
  )
}

Checkbox.defaultProps = defaultProps
Checkbox.displayName = 'NutCheckBox'
Checkbox.Group = CheckboxGroup
