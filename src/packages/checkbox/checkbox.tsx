import React, { FunctionComponent, useEffect, useState } from 'react'
import Icon from '@/packages/icon'
import CheckboxGroup from '@/packages/checkboxgroup'

import bem from '@/utils/bem'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface CheckboxProps extends IComponent {
  checked: boolean
  disabled: boolean
  textPosition: 'left' | 'right'
  iconSize: string | number
  iconName: string
  iconActiveName: string
  iconIndeterminateName: string
  iconClassPrefix: string
  iconFontClassName: string
  indeterminate: boolean
  label: string
  onChange: (state: boolean, label: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  checked: false,
  disabled: false,
  textPosition: 'right',
  iconSize: 18,
  iconName: 'check-normal',
  iconActiveName: 'checked',
  iconClassPrefix: 'nut-icon',
  iconFontClassName: 'nutui-iconfont',
  iconIndeterminateName: 'check-disabled',
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
    iconName,
    iconSize,
    label,
    className,
    textPosition,
    iconActiveName,
    checked,
    disabled,
    onChange,
    indeterminate,
    iconClassPrefix,
    iconFontClassName,
    iconIndeterminateName,
    getParentVals,
    max,
    ...rest
  } = props as any

  const [innerChecked, setInnerChecked] = useState(checked)
  const [innerDisabled, setDisabled] = useState(disabled)
  const [_indeterminate, setIndeterminate] = useState(indeterminate)

  useEffect(() => {
    setInnerChecked(checked)
    setDisabled(disabled)
  }, [disabled, checked])

  useEffect(() => {
    setIndeterminate(indeterminate)
  }, [indeterminate])

  const getIconName = () => {
    if (!innerChecked) {
      return iconName
    }
    if (_indeterminate) {
      return iconIndeterminateName
    }
    return iconActiveName
  }

  const renderIcon = () => {
    return (
      <Icon
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        name={getIconName()}
        size={iconSize}
        className={color()}
      />
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

    // return !innerDisabled ? (!innerChecked ? '#d6d6d6' : '#fa2c19') : '#f5f5f5'
  }
  const renderLabel = () => {
    return (
      <span className={`${b('label', { disabled: innerDisabled })} `}>
        {children || label}
      </span>
    )
  }

  const handleClick = () => {
    if (!disabled) {
      const latest = !innerChecked
      if (max !== undefined && latest && getParentVals().length >= max) return
      onChange && onChange(latest, label || (children as string))
      setInnerChecked(latest)
    }
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
