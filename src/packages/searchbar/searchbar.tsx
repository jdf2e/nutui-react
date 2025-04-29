import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import { ArrowLeft, Close, MaskClose, Search } from '@nutui/icons-react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { WebSearchBarProps } from '@/types'
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
} as WebSearchBarProps
export const SearchBar: FunctionComponent<
  Partial<WebSearchBarProps> &
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    onChange && onChange(value, event)
    setValue(value)
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus(event?.target?.value, event)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const searchSelf: HTMLInputElement | null = searchInputRef.current
    searchSelf && searchSelf.blur()
    onBlur && onBlur(event?.target?.value, event)
  }

  useEffect(() => {
    autoFocus && forceFocus()
  }, [autoFocus])

  const renderField = () => {
    const inputCls = classNames(`${classPrefix}-input`)
    return (
      <input
        className={inputCls}
        ref={searchInputRef}
        value={value || ''}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onKeyDown={onKeydown}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onInputClick}
      />
    )
  }

  const renderDefaultValue = () => {
    const list = defaultValue.split(',')
    return (
      <div className="nut-searchbar-values">
        {list.map((item, index) => (
          <div
            key={`def-${index}`}
            className="nut-searchbar-value"
            onClick={() => onItemClick(item)}
          >
            {item}
            <Close />
          </div>
        ))}
      </div>
    )
  }

  const renderLeftIn = () => {
    if (!leftIn) return null
    return (
      <div className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </div>
    )
  }
  const renderLeft = () => {
    if (!backable && !left) return null
    return (
      <div className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft /> : left}
      </div>
    )
  }

  const renderRightIn = () => {
    if (!rightIn) return null
    return (
      <>
        {React.isValidElement(rightIn) ? (
          <div className={`${classPrefix}-rightin ${classPrefix}-icon`}>
            {rightIn}
          </div>
        ) : (
          <div className={`${classPrefix}-rightin`}>{rightIn}</div>
        )}
      </>
    )
  }

  const renderRight = () => {
    if (!right) return null
    return <div className={`${classPrefix}-right`}>{right}</div>
  }

  const renderClear = () => {
    return (
      <div
        className={`${classPrefix}-clear ${classPrefix}-icon`}
        onClick={clearaVal}
        aria-label="清除"
      >
        <MaskClose />
      </div>
    )
  }

  const clearaVal = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled || readOnly) return
    setValue('')
    onChange && onChange('')
    onClear && onClear(event)
    forceFocus()
  }

  const onKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const event = e.nativeEvent
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault()
      }
      onSearch && onSearch(value as string)
    }
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
    <div className={cls} style={style}>
      {renderLeft()}
      <div
        className={classNames(`${classPrefix}-content`, {
          [`${classPrefix}-round`]: shape === 'round',
        })}
      >
        {renderLeftIn()}
        {renderField()}
        {defaultValue && renderDefaultValue()}
        {!defaultValue && clearable && value && renderClear()}
        {renderRightIn()}
      </div>
      {renderRight()}
    </div>
  )
}

SearchBar.displayName = 'NutSearchBar'
