import React, { FunctionComponent, useContext } from 'react'
import {
  CheckChecked,
  CheckNormal,
  CheckDisabled,
} from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { View, ITouchEvent } from '@tarojs/components'
import RadioContext from '../radiogroup/context'
import RadioGroup from '@/packages/radiogroup/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { RadioPosition, RadioShape } from '@/packages/radio/types'

export interface RadioProps extends BasicComponent {
  disabled: boolean
  checked: boolean
  defaultChecked: boolean
  shape: RadioShape
  labelPosition: RadioPosition
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
  let { labelPosition, disabled } = others
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
    if (context.disabled !== undefined) {
      disabled = context.disabled
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
      <View
        className={classNames(`${classPrefix}-label`, {
          [`${classPrefix}-label-disabled`]: disabled,
        })}
      >
        {children}
      </View>
    )
  }
  const renderButton = () => {
    return (
      <View
        className={classNames(`${classPrefix}-button`, {
          [`${classPrefix}-button-active`]: checkedStatement,
          [`${classPrefix}-button-disabled`]: disabled,
        })}
      >
        {children}
      </View>
    )
  }
  const color = () => {
    return {
      [`${classPrefix}-icon-disabled`]: disabled,
      [`${classPrefix}-icon`]: !checkedStatement,
      [`${classPrefix}-icon-checked`]: checkedStatement,
    }
  }
  const renderIcon = () => {
    const { icon, activeIcon } = props
    if (disabled && !checkedStatement) {
      return <CheckDisabled className={classNames(color())} />
    }

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
  const renderByShape = (shape: RadioShape) => {
    return shape === 'button' ? (
      renderButton()
    ) : (
      <>
        {renderIcon()}
        {renderLabel()}
      </>
    )
  }
  const renderRadioItem = () => {
    return renderByShape(context && context.shape ? context.shape : shape)
  }
  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    if (disabled || checkedStatement) return
    setCheckedStatement(!checkedStatement)
  }

  return (
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-reverse`]: labelPosition === 'left',
        },
        className
      )}
      style={style}
      onClick={handleClick}
      // {...rest}
    >
      {renderRadioItem()}
    </View>
  )
}

Radio.defaultProps = defaultProps
Radio.displayName = 'NutRadio'
Radio.Group = RadioGroup
