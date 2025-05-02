import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react'
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
  tag: false,
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
    tag,
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

  const [innerTag, setInnerTag] = useState(tag)

  const forceFocus = useCallback(() => {
    searchInputRef.current?.focus()
  }, [])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      onChange && onChange(value, event)
      setValue(value)
    },
    [onChange, setValue]
  )

  const handleInputClick = useCallback(
    (event: MouseEvent<HTMLInputElement>) => {
      onInputClick?.(event)
    },
    [onInputClick]
  )

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event.target?.value, event)
      if (tag) setInnerTag(false)
    },
    [onFocus, tag]
  )

  const [blurTimer, setBlurTimer] = useState<NodeJS.Timeout | null>(null)

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      searchInputRef.current?.blur()
      onBlur && onBlur(event.target?.value, event)
      if (tag) {
        const timer = setTimeout(() => {
          setInnerTag(event.target?.value ? tag : false)
        }, 150)
        setBlurTimer(timer)
      }
    },
    [onBlur, tag]
  )

  useEffect(() => {
    return () => {
      if (blurTimer) clearTimeout(blurTimer)
    }
  }, [blurTimer])

  const clearaVal = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (disabled || readOnly) return
      setValue('')
      forceFocus()
      onChange && onChange('')
      onClear && onClear(event)
    },
    [disabled, readOnly, onChange, onClear, setValue, forceFocus]
  )

  const onKeydown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        const event = e.nativeEvent
        if (typeof event.cancelable !== 'boolean' || event.cancelable) {
          event.preventDefault()
        }
        onSearch && onSearch(value as string)
      }
    },
    [onSearch, value]
  )

  const cls = useMemo(
    () =>
      classNames(
        classPrefix,
        {
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-focus`]: left || backable,
        },
        className
      ),
    [disabled, backable, left, className]
  )
  useEffect(() => {
    if (autoFocus) {
      forceFocus()
    }
  }, [autoFocus, forceFocus])

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
        onClick={handleInputClick}
      />
    )
  }

  const renderValueByTags = useCallback(() => {
    if (!value) {
      setTimeout(() => {
        forceFocus()
      }, 0)
      return null
    }
    const list = value.split(',')
    if (!list) return null
    return (
      <div className="nut-searchbar-values">
        {list.map((item, index) => (
          <div
            key={`def-${index}`}
            className="nut-searchbar-value"
            onClick={(e) => onItemClick?.(item, e)}
          >
            {item}
            <Close />
          </div>
        ))}
      </div>
    )
  }, [value, onItemClick])

  const renderLeftIn = useCallback(() => {
    if (!leftIn) return null
    return (
      <div className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </div>
    )
  }, [leftIn])

  const renderLeft = useCallback(() => {
    if (!backable && !left) return null
    return (
      <div className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft /> : left}
      </div>
    )
  }, [backable, left])

  const renderRightIn = useCallback(() => {
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
  }, [rightIn])

  const renderRight = useCallback(() => {
    if (!right) return null
    return <div className={`${classPrefix}-right`}>{right}</div>
  }, [right])

  const renderClear = useCallback(() => {
    if (!value || !clearable) return null
    return (
      <div
        className={`${classPrefix}-clear ${classPrefix}-icon`}
        onClick={clearaVal}
        aria-label="清除"
      >
        <MaskClose />
      </div>
    )
  }, [value, clearable, clearaVal])

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
        {innerTag ? renderValueByTags() : renderClear()}
        {renderRightIn()}
      </div>
      {renderRight()}
    </div>
  )
}

SearchBar.displayName = 'NutSearchBar'
