import React, { FC, useContext, useEffect, useState } from 'react'
import { CheckDisabled, Checked, CheckNormal } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { CheckboxProps as TCheckboxProps, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import Context from '../checkboxgroup/context'
import { usePropsValue } from '@/hooks/use-props-value'
import { TaroCheckboxProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  shape: 'round',
  labelPosition: 'right',
  icon: null,
  activeIcon: null,
  indeterminateIcon: null,
  onChange: (value) => {},
} as TaroCheckboxProps

const classPrefix = 'nut-checkbox'
export const Checkbox: FC<
  Partial<TaroCheckboxProps & Pick<TCheckboxProps, 'nativeProps' | 'ariaLabel'>>
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
      <View className={`${classPrefix}-icon-wrap`}>
        <Checked className={color()} />
      </View>
    )
  }
  const color = () => {
    const cls = `${classPrefix}-icon `
    if (innerDisabled) {
      if (innerChecked && !innerIndeterminate) {
        return `${cls}${classPrefix}-icon-checked ${classPrefix}-icon-disabled`
      }
      if (innerChecked && innerIndeterminate) {
        return `${cls}${classPrefix}-icon-indeterminate ${classPrefix}-icon-disabled`
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
      <View
        className={classNames(`${classPrefix}-label `, {
          [`${classPrefix}-label-disabled`]: innerDisabled,
        })}
      >
        {children || label}
      </View>
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
      <View
        className={classNames(`${classPrefix}-button`, {
          [`${classPrefix}-button-active`]: innerChecked,
          [`${classPrefix}-button-disabled`]: disabled,
        })}
      >
        {children || label}
        {innerChecked && activeIcon ? (
          <>
            <View className={classNames(`${classPrefix}-button-icon`)} />
            {activeIcon}
          </>
        ) : null}
      </View>
    )
  }

  const renderListItem = () => {
    return (
      <>
        {renderIcon()}
        {renderLabel()}
      </>
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
    <View
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-reverse`]: labelPosition === 'left',
          'nut-checkbox-list-item': ctx?.list,
        },
        className
      )}
      {...rest}
      onClick={handleClick}
    >
      {renderCheckboxItem()}
    </View>
  )
}

Checkbox.displayName = 'NutCheckBox'
