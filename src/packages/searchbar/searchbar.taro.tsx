import Taro from '@tarojs/taro'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import {
  Input as TaroInput,
  ITouchEvent,
  InputProps,
  View,
  BaseEventOrig,
} from '@tarojs/components'
import { ArrowLeft, Close, MaskClose, Search } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { TaroSearchBarProps } from '@/types'
import { usePropsValue } from '@/hooks/use-props-value'

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
  leftIn: <Search />,
} as TaroSearchBarProps
export const SearchBar: FunctionComponent<
  Partial<TaroSearchBarProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onFocus' | 'onBlur'
    >
> = (props) => {
  const classPrefix = 'nut-searchbar'

  const { locale } = useConfig()
  const searchInputRef = useRef<HTMLInputElement>(null)
  const {
    value: outerValue,
    defaultValue,
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
    onItemClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = usePropsValue<string>({
    value: outerValue,
    defaultValue,
    finalValue: '',
  })

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const forceFocus = () => {
    const searchSelf: HTMLInputElement | null = searchInputRef.current
    searchSelf && searchSelf.focus()
  }
  const onInput = (event: BaseEventOrig<InputProps.inputEventDetail>) => {
    const eventValue = event?.detail?.value
    if (value === eventValue) return
    onChange && onChange(eventValue, event)
    setValue(eventValue)
    eventValue === '' && forceFocus()
  }
  const handleFocus = (
    event: BaseEventOrig<InputProps.inputForceEventDetail>
  ) => {
    onFocus && onFocus(event?.detail?.value, event)
  }
  const handleBlur = (
    event: BaseEventOrig<InputProps.inputValueEventDetail>
  ) => {
    const searchSelf: HTMLInputElement | null = searchInputRef.current
    searchSelf && searchSelf.blur()
    onBlur && onBlur(event?.detail?.value, event)
  }

  useEffect(() => {
    if (Taro.getEnv() === 'WEB') {
      autoFocus && forceFocus()
    }
  }, [autoFocus])
  const renderField = () => {
    const inputCls = classNames(`${classPrefix}-input`)
    return (
      <TaroInput
        className={inputCls}
        ref={searchInputRef}
        style={style}
        value={(value || '').toString()}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled || readOnly}
        maxlength={maxLength}
        autoFocus={autoFocus}
        onInput={onInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onInputClick}
        onConfirm={onConfirm}
      />
    )
  }

  const renderDefaultValue = () => {
    const list = defaultValue.split(',')
    return (
      <View className="nut-searchbar-values">
        {list.map((item, index) => (
          <View
            key={`def-${index}`}
            className="nut-searchbar-value"
            onClick={() => onItemClick(item)}
          >
            {item}
            <Close />
          </View>
        ))}
      </View>
    )
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
        {backable ? <ArrowLeft /> : left}
      </View>
    )
  }
  const renderRightIn = () => {
    if (!rightIn) return null
    return (
      <>
        {React.isValidElement(rightIn) ? (
          <View className={`${classPrefix}-rightin ${classPrefix}-icon`}>
            {rightIn}
          </View>
        ) : (
          <View className={`${classPrefix}-rightin`}>{rightIn}</View>
        )}
      </>
    )
  }
  const renderRight = () => {
    if (!right) return null
    return <View className={`${classPrefix}-right`}>{right}</View>
  }
  const renderClear = () => {
    return (
      <View
        className={`${classPrefix}-clear ${classPrefix}-icon`}
        onClick={(e: any) => clearaVal(e)}
      >
        <MaskClose />
      </View>
    )
  }
  const clearaVal = (event: ITouchEvent) => {
    if (disabled || readOnly) return
    setValue('')
    forceFocus()
    onChange && onChange('')
    onClear && onClear(event)
  }
  const onConfirm = () => {
    onSearch && onSearch(value as string)
  }

  const cls = classNames(
    classPrefix,
    {
      [`${classPrefix}-disabled`]: disabled,
      [`${classPrefix}-focus`]: left || backable,
    },
    className
  )
  return (
    <View className={cls} style={style}>
      {renderLeft()}
      <View
        className={classNames(`${classPrefix}-content`, {
          [`${classPrefix}-round`]: shape === 'round',
        })}
      >
        {renderLeftIn()}
        <View className="nut-searchbar-input-box">
          {renderField()}
          {defaultValue && renderDefaultValue()}
        </View>
        {!defaultValue && clearable && value && renderClear()}
        {renderRightIn()}
      </View>
      {renderRight()}
    </View>
  )
}

SearchBar.displayName = 'NutSearchBar'
