import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import { View, ITouchEvent } from '@tarojs/components'
import { MaskClose, Search, ArrowLeft } from '@nutui/icons-react-taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SearchBarProps extends BasicComponent {
  /** 文本值	 */
  value?: number | string
  /** 输入框占位提示文字	 */
  placeholder?: string
  /** 搜索框形状，可选值为 round	 */
  shape?: 'square' | 'round'
  /** 是否禁用输入框	 */
  disabled?: boolean
  /** 最大输入长度	 */
  maxLength?: number
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean
  /** 是否将输入框设为只读状态，只读状态下无法输入内容   */
  readOnly?: boolean
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autoFocus?: boolean
  backable: boolean
  left: React.ReactNode
  right: React.ReactNode
  leftIn: React.ReactNode
  rightIn: React.ReactNode
  /**  确定搜索时触发	 */
  onSearch?: (val: string) => void
  /** 输入框内容变化时触发	 */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
  /** 输入框获得焦点时触发	 */
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  /** 输入框失去焦点时触发	 */
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  /** 点击清除按钮后触发	 */
  onClear?: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
  /** 点击输入区域时触发	 */
  onInputClick?: (event: MouseEvent<HTMLInputElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  placeholder: '',
  shape: 'square',
  disabled: false,
  maxLength: 9999,
  clearable: true,
  readOnly: false,
  autoFocus: false,
  backable: false,
  left: '',
  right: '',
  rightIn: '',
  leftIn: <Search size="16" />,
} as SearchBarProps
export const SearchBar: FunctionComponent<
  Partial<SearchBarProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onFocus' | 'onBlur'
    >
> = (props) => {
  const classPrefix = 'nut-searchbar'

  const { locale } = useConfig()
  const searchRef = useRef<HTMLInputElement>(null)

  const {
    value: outerValue,
    style,
    placeholder,
    shape,
    className,
    disabled,
    maxLength,
    clearable,
    readOnly,
    autoFocus,
    backable,
    right,
    left,
    leftIn,
    rightIn,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onSearch,
    onInputClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState(() => outerValue)

  const forceFocus = () => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.focus()
  }
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    if (value === event.target.value) return
    onChange && onChange?.(event.target.value, event)
    setValue(event.target.value)
    event.target.value === '' && forceFocus()
  }
  const focus = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target
    onFocus && onFocus?.(value, event)
  }
  const blur = (event: FocusEvent<HTMLInputElement>) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    const { value } = event.target
    onBlur && onBlur?.(value, event)
  }
  useEffect(() => {
    setValue(outerValue || '')
  }, [outerValue])
  useEffect(() => {
    autoFocus && forceFocus()
  }, [autoFocus])
  const renderField = () => {
    return (
      <input
        className={`${classPrefix}-input ${
          clearable ? `${classPrefix}-input-clear` : ''
        }`}
        ref={searchRef}
        style={style}
        value={value || ''}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onKeyPress={onKeypress}
        onChange={(e) => change(e)}
        onFocus={(e) => focus(e)}
        onBlur={(e) => blur(e)}
        onClick={(e) => clickInput(e)}
      />
    )
  }
  const clickInput = (e: MouseEvent<HTMLInputElement>) => {
    onInputClick && onInputClick(e)
  }
  const renderLeftIn = () => {
    if (!leftIn) return null
    return (
      <View className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </View>
    )
  }
  const renderLeft = () => {
    if (!backable && !left) return null
    return (
      <View className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft size="16" /> : left}
      </View>
    )
  }
  const renderRightIn = () => {
    if (!rightIn) return null
    return (
      <View className={`${classPrefix}-rightin ${classPrefix}-icon`}>
        {rightIn}
      </View>
    )
  }
  const renderRight = () => {
    if (!right) return null
    return <View className={`${classPrefix}-right`}>{right}</View>
  }
  const handleClear = () => {
    return (
      <View
        className={`${classPrefix}-clear  ${classPrefix}-icon`}
        onClick={(e: any) => clearaVal(e)}
      >
        <MaskClose size={16} />
      </View>
    )
  }
  const clearaVal = (
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    forceFocus()
    onClear && onClear(event)
  }
  const onKeypress = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (typeof e.cancelable !== 'boolean' || e.cancelable) {
        e.preventDefault()
      }
      onSearch && onSearch(value as string)
    }
  }
  return (
    <View
      className={`${classPrefix} ${
        disabled ? `${classPrefix}-disabled` : ''
      }  ${className || ''}`}
      style={style}
    >
      {renderLeft()}
      <View
        className={`${classPrefix}-content ${
          shape === 'round' ? `${classPrefix}-round` : ''
        }`}
      >
        {renderLeftIn()}
        <View className="nut-searchbar-input-box">{renderField()}</View>
        {clearable && !value && renderRightIn()}
        {clearable && value && handleClear()}
      </View>
      {renderRight()}
    </View>
  )
}

SearchBar.displayName = 'NutSearchBar'
