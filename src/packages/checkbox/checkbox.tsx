import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Context from '../checkboxgroup/context'
import { usePropsValue } from '@/utils/use-props-value'
import { CheckboxLabelPosition } from '@/packages/checkboxgroup/types'
import Icon from '@/packages/checkbox/icon'

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
> = (props) => {
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
    value: checked,
    defaultValue: defaultChecked,
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
        return <Icon name="disabled" />
      }
      if (innerChecked) {
        return <Icon name="checked-disabled" />
      }
      return <Icon name="disabled" />
    }
    if (!innerChecked) {
      return React.isValidElement(icon) ? icon : <Icon name="normal" />
    }
    if (innerIndeterminate) {
      return React.isValidElement(indeterminateIcon) ? (
        indeterminateIcon
      ) : (
        <Icon name="disabled" />
      )
    }
    return React.isValidElement(activeIcon) ? (
      activeIcon
    ) : (
      <Icon name="checked" />
    )
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

  const renderListItem = () => {
    return (
      <div className={`${classPrefix}-list-item`}>
        {renderLabel()}
        {renderIcon()}
      </div>
    )
  }

  const renderCheckboxItem = () => {
    if (ctx?.list) {
      return <>{renderListItem()}</>
    }
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

Checkbox.displayName = 'NutCheckBox'
