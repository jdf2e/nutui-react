import Taro from '@tarojs/taro'
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from 'react'
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
  tag: false,
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

  const handleInput = useCallback(
    (event: BaseEventOrig<InputProps.inputEventDetail>) => {
      const eventValue = event.detail?.value
      if (value === eventValue) return
      onChange && onChange(eventValue, event)
      setValue(eventValue)
      eventValue === '' && forceFocus()
    },
    [onChange, setValue, forceFocus, value]
  )

  const handleFocus = useCallback(
    (event: BaseEventOrig<InputProps.inputForceEventDetail>) => {
      onFocus && onFocus(event.detail?.value, event)
      if (tag) setInnerTag(false)
    },
    [onFocus]
  )

  const [blurTimer, setBlurTimer] = useState<NodeJS.Timeout | null>(null)

  const handleBlur = useCallback(
    (event: BaseEventOrig<InputProps.inputValueEventDetail> | any) => {
      searchInputRef.current?.blur()
      onBlur && onBlur(event.detail?.value, event)
      if (tag) {
        const timer = setTimeout(() => {
          if (Taro.getEnv() === 'WEB') {
            setInnerTag(event.target?.value ? tag : false)
          } else {
            setInnerTag(tag)
          }
        }, 200)
        setBlurTimer(timer)
      }
    },
    [onBlur, tag, value]
  )

  useEffect(() => {
    return () => {
      if (blurTimer) clearTimeout(blurTimer)
    }
  }, [blurTimer])

  const clearaVal = useCallback(
    (event: ITouchEvent) => {
      if (disabled || readOnly) return
      setValue('')
      forceFocus()
      onChange && onChange('')
      onClear && onClear(event)
    },
    [disabled, readOnly, onChange, onClear, setValue]
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
    if (tag && !innerTag) {
      forceFocus()
    }
  }, [autoFocus, forceFocus, innerTag])

  const renderField = () => {
    const inputCls = classNames(`${classPrefix}-input`)
    return (
      <>
        {Taro.getEnv() === 'WEB' ? (
          <TaroInput
            className={inputCls}
            ref={searchInputRef}
            style={{
              ...style,
              ...{ color: `${innerTag ? 'transparent' : '#333'}` },
            }}
            value={value}
            placeholder={placeholder || locale.placeholder}
            disabled={disabled || readOnly}
            maxlength={maxLength}
            autoFocus={autoFocus}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={onInputClick}
            onConfirm={onConfirm}
          />
        ) : (
          <TaroInput
            className={inputCls}
            ref={searchInputRef}
            style={{
              ...style,
              ...{ color: `${innerTag ? 'transparent' : '#333'}` },
            }}
            value={value}
            placeholder={placeholder || locale.placeholder}
            disabled={disabled || readOnly}
            maxlength={maxLength}
            focus={autoFocus}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={onInputClick}
            onConfirm={onConfirm}
          />
        )}
      </>
    )
  }

  const renderValueByTags = useCallback(() => {
    if (!innerTag) return null
    if (!value) {
      setTimeout(() => {
        forceFocus()
      }, 0)
      return null
    }
    const list = value.split(',')
    if (!list) return null
    return (
      <View className="nut-searchbar-values">
        {list.map((item, index) => (
          <View
            key={`def-${index}`}
            className="nut-searchbar-value"
            onClick={(e) => onItemClick?.(item, e)}
          >
            {item}
            <Close />
          </View>
        ))}
      </View>
    )
  }, [value, onItemClick, innerTag])

  const renderLeftIn = useCallback(() => {
    if (!leftIn) return null
    return (
      <View className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </View>
    )
  }, [leftIn])

  const renderLeft = useCallback(() => {
    if (!backable && !left) return null
    return (
      <View className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft /> : left}
      </View>
    )
  }, [backable, left])

  const renderRightIn = useCallback(() => {
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
  }, [rightIn])

  const renderRight = useCallback(() => {
    if (!right) return null
    return <View className={`${classPrefix}-right`}>{right}</View>
  }, [right])

  const renderClear = useCallback(() => {
    return (
      <View
        className={`${classPrefix}-clear ${classPrefix}-icon`}
        style={{
          visibility: `${!innerTag && value && clearable ? 'visible' : 'hidden'}`,
        }}
        onClick={clearaVal}
        aria-label="清除"
      >
        <MaskClose />
      </View>
    )
  }, [value, clearable, clearaVal, innerTag])

  const onConfirm = () => {
    onSearch && onSearch(value as string)
  }

  return (
    <View className={cls} style={style}>
      {renderLeft()}
      <View
        className={classNames(`${classPrefix}-content`, {
          [`${classPrefix}-round`]: shape === 'round',
        })}
      >
        {renderLeftIn()}
        <View className="nut-searchbar-input-box">{renderField()}</View>
        {renderValueByTags()}
        {renderClear()}
        {renderRightIn()}
      </View>
      {renderRight()}
    </View>
  )
}

SearchBar.displayName = 'NutSearchBar'
