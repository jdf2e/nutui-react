import React, { FunctionComponent, MouseEventHandler, useContext } from 'react'
import { CheckChecked, CheckNormal } from '@nutui/icons-react'
import classNames from 'classnames'
import RadioContext from '../radiogroup/context'
import RadioGroup from '@/packages/radiogroup'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

type Shape = 'button' | 'round'
type Position = 'right' | 'left'

export interface RadioProps extends BasicComponent {
  disabled: boolean
  checked: boolean
  defaultChecked: boolean
  shape: Shape
  labelPosition: Position
  icon: React.ReactNode
  activeIcon: React.ReactNode
  value: string | number
  onChange: (checked: boolean) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  shape: 'round',
  value: '',
  labelPosition: 'right',
  icon: null,
  activeIcon: null,
  onChange: (checked: boolean) => {},
} as RadioProps
export const Radio: FunctionComponent<
  Partial<RadioProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & { Group: typeof RadioGroup } = (props) => {
  const classPrefix = 'nut-radio'

  const {
    children,
    className,
    style,
    checked,
    defaultChecked,
    shape,
    value,
    icon,
    activeIcon,
    onChange,
    ...others
  } = {
    ...defaultProps,
    ...props,
  }
  // eslint-disable-next-line prefer-const
  let { labelPosition, disabled, ...rest } = others
  // eslint-disable-next-line prefer-const
  let [checkedStatement, setCheckedStatement] = usePropsValue<boolean>({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  })
  const context = useContext(RadioContext)
  if (context) {
    checkedStatement = context.value === value
    if (context.labelPosition !== undefined) {
      labelPosition = context.labelPosition
    }
    setCheckedStatement = (value: boolean) => {
      if (value) {
        context.check(props.value === undefined ? '' : props.value)
      } else {
        context.uncheck()
      }
    }
  }

  const renderLabel = () => {
    return (
      <div
        className={classNames(`${classPrefix}__label`, {
          [`${classPrefix}__label--disabled`]: disabled,
        })}
      >
        {children}
      </div>
    )
  }
  const renderButton = () => {
    return (
      <div
        className={classNames(`${classPrefix}__button`, {
          [`${classPrefix}__button--active`]: !disabled && checkedStatement,
          [`${classPrefix}__button--disabled`]: disabled,
        })}
      >
        {children}
      </div>
    )
  }
  const color = () => {
    return {
      [`${classPrefix}__icon--disable`]: disabled,
      [`${classPrefix}__icon`]: checkedStatement,
      [`${classPrefix}__icon--unchecked`]: !checkedStatement,
    }
  }
  const renderIcon = () => {
    const { icon, activeIcon } = props

    if (checkedStatement) {
      return React.isValidElement(activeIcon) ? (
        React.cloneElement<any>(activeIcon, {
          ...activeIcon.props,
          className: classNames(color()),
        })
      ) : (
        <CheckChecked className={classNames(color())} />
      )
    }
    return React.isValidElement(icon) ? (
      React.cloneElement<any>(icon, {
        ...icon.props,
        className: classNames(color()),
      })
    ) : (
      <CheckNormal className={classNames(color())} />
    )
  }
  const reverse = labelPosition === 'left'
  const renderRadioItem = () => {
    if (shape === 'button') {
      return renderButton()
    }
    if (reverse) {
      return (
        <>
          {renderLabel()}
          {renderIcon()}
        </>
      )
    }
    return (
      <>
        {renderIcon()}
        {renderLabel()}
      </>
    )
  }
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled || checkedStatement) return
    setCheckedStatement(!checkedStatement)
  }

  return (
    <div
      className={`${classPrefix} ${className} ${
        reverse ? `${classPrefix}--reverse` : ''
      }`}
      style={style}
      onClick={handleClick}
      {...rest}
    >
      {renderRadioItem()}
    </div>
  )
}

Radio.defaultProps = defaultProps
Radio.displayName = 'NutRadio'
Radio.Group = RadioGroup
