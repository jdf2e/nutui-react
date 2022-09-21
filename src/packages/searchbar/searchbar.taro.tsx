import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import Icon from '@/packages/icon/index.taro'
import { IComponent, ComponentDefaults } from '@/utils/typings'

type TIconDirection = 'in-left' | 'out-left' | 'in-right' | 'out-right'

export interface SearchBarProps extends IComponent {
  /** 文本值	 */
  value?: number | string
  /** 输入框占位提示文字	 */
  placeholder?: string
  /** 搜索框形状，可选值为 round	 */
  shape?: 'square' | 'round'
  /** 自定义class名	 */
  className?: string
  /** 是否禁用输入框	 */
  disabled?: boolean
  /** 最大输入长度	 */
  maxLength?: number
  /** 是否启用清除图标，点击清除图标后会清空输入框	 */
  clearable?: boolean
  /** 搜索框外部背景色	 */
  background?: string
  /** 搜索框背景色	 */
  inputBackground?: string
  /** 输入框内容对齐方式	 */
  align?: string
  /** 是否将输入框设为只读状态，只读状态下无法输入内容   */
  readOnly?: boolean
  /**  是否自动聚焦，iOS 系统不支持该属性	 */
  autoFocus?: boolean
  /** 搜索框左侧文本	 */
  label?: React.ReactNode
  /** 输入框内 左icon   */
  leftinIcon?: React.ReactNode
  /** 输入框内 右icon  */
  rightinIcon?: React.ReactNode
  /** 输入框外 左icon  */
  leftoutIcon?: React.ReactNode
  /** 输入框外 右icon  */
  rightoutIcon?: React.ReactNode
  /** 取消按钮文字	 */
  actionText?: React.ReactNode
  /**  确定搜索时触发	 */
  onSearch?: (val: string) => void
  /** 输入框内容变化时触发	 */
  onChange?: (value: string, event: Event) => void
  /** 输入框获得焦点时触发	 */
  onFocus?: (value: string, event: Event) => void
  /** 输入框失去焦点时触发	 */
  onBlur?: (value: string, event: Event) => void
  /** 点击清除按钮后触发	 */
  onClear?: (event: Event) => void
  /** 点击输入区域时触发	 */
  onClickInput?: (event: Event) => void
  /** 点击输入框内左侧图标时触发	 */
  onClickLeftinIcon?: (value: string, event: Event) => void
  /** 点击输入框外左侧图标时触发	 */
  onClickLeftoutIcon?: (value: string, event: Event) => void
  /** 点击输入框内右侧图标时触发	 */
  onClickRightinIcon?: (value: string, event: Event) => void
  /** 点击输入框外右侧图标时触发	 */
  onClickRightoutIcon?: (value: string, event: Event) => void
}

const defaultProps = {
  ...ComponentDefaults,
  placeholder: '',
  shape: 'square',
  disabled: false,
  maxLength: 9999,
  clearable: true,
  align: 'left',
  readonly: true,
  autoFocus: false,
  label: '',
  leftinIcon: <Icon name="search" size="12" />,
} as SearchBarProps
export const SearchBar: FunctionComponent<
  Partial<SearchBarProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onFocus' | 'onBlur'
    >
> = (props) => {
  const searchbarBem = bem('searchbar')

  const { locale } = useConfig()
  const searchRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(() => props.value)

  const {
    placeholder,
    shape,
    className,
    disabled,
    maxLength,
    clearable,
    align,
    readOnly,
    autoFocus,
    label,
    actionText,
    leftinIcon,
    rightinIcon,
    leftoutIcon,
    rightoutIcon,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onSearch,
    onClickInput,
    onClickLeftinIcon,
    onClickLeftoutIcon,
    onClickRightinIcon,
    onClickRightoutIcon,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }

  const alignClass = `${align}`

  const change = (event: Event) => {
    const { value } = event.target as any
    onChange && onChange?.(value, event)
    setValue(value)
  }
  const focus = (event: Event) => {
    const { value } = event.target as any
    onFocus && onFocus?.(value, event)
  }
  const blur = (event: Event) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    const { value } = event.target as any
    onBlur && onBlur?.(value, event)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  useEffect(() => {
    if (autoFocus) {
      const searchSelf: HTMLInputElement | null = searchRef.current
      searchSelf && searchSelf.focus()
    }
  }, [autoFocus])

  const renderField = () => {
    return (
      <input
        className={`${searchbarBem('input')}  ${searchbarBem(alignClass)} ${
          shape === 'round' ? searchbarBem('round') : ''
        } ${clearable ? searchbarBem('input-clear') : ''}`}
        ref={searchRef}
        style={{ ...props.style, background: props.inputBackground }}
        value={value || ''}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onChange={(e: any) => change(e)}
        onFocus={(e: any) => focus(e)}
        onBlur={(e: any) => blur(e)}
        onClick={(e: any) => clickInput(e)}
      />
    )
  }

  const clickInput = (e: Event) => {
    onClickInput && onClickInput(e)
  }

  const renderLeftinIcon = () => {
    if (!leftinIcon) return null
    return (
      <div
        className={`${searchbarBem('leftin-icon')} ${searchbarBem('icon')}`}
        onClick={(e: any) => clickLeftIcon('in-left', e)}
      >
        {leftinIcon}
      </div>
    )
  }
  const renderLeftoutIcon = () => {
    if (!leftoutIcon) return null
    return (
      <div
        className={`${searchbarBem('leftout-icon')}`}
        onClick={(e: any) => clickLeftIcon('out-left', e)}
      >
        {leftoutIcon}
      </div>
    )
  }
  const clickLeftIcon = (flag: TIconDirection, event: Event) => {
    if (flag === 'in-left') {
      onClickLeftinIcon && onClickLeftinIcon(value as string, event)
    } else {
      onClickLeftoutIcon && onClickLeftoutIcon(value as string, event)
    }
  }

  const renderRightinIcon = () => {
    if (!rightinIcon) return null
    return (
      <div
        className={`${searchbarBem('rightin-icon')} ${searchbarBem('icon')}`}
        onClick={(e: any) => clickRightIcon('in-right', e)}
      >
        {rightinIcon}
      </div>
    )
  }
  const renderRightoutIcon = () => {
    if (!rightoutIcon) return null
    return (
      <div
        className={`${searchbarBem('rightout-icon')}`}
        onClick={(e: any) => clickRightIcon('out-right', e)}
      >
        {rightoutIcon}
      </div>
    )
  }
  const clickRightIcon = (flag: TIconDirection, event: Event) => {
    if (flag === 'in-left') {
      onClickRightinIcon && onClickRightinIcon(value as string, event)
    } else {
      onClickRightoutIcon && onClickRightoutIcon(value as string, event)
    }
  }

  const handleClear = () => {
    return (
      <div
        className={`${searchbarBem('clear')} ${rightinIcon ? 'pos-right' : ''}`}
        onClick={(e: any) => clearaVal(e)}
      >
        <Icon
          classPrefix={iconClassPrefix}
          fontClassName={iconFontClassName}
          name="circle-close"
          size="12"
          color="#555"
        />
      </div>
    )
  }

  const clearaVal = (event: Event) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    onClear && onClear(event)
  }

  const renderRightLabel = () => {
    if (actionText) {
      return (
        <div className={searchbarBem('action-text')} onClick={search}>
          {actionText}
        </div>
      )
    }
    return null
  }

  const search = () => {
    onSearch && onSearch(value as string)
  }
  const renderLabel = () => {
    if (label) {
      return <div className={searchbarBem('label')}>{label}</div>
    }
    return null
  }
  return (
    <div
      className={`${searchbarBem()} ${
        disabled ? searchbarBem('disabled') : ''
      }  ${className || ''}`}
      style={{ ...props.style, background: props.background }}
    >
      {renderLeftoutIcon()}
      {renderLabel()}
      <div className={`${searchbarBem('content')}`}>
        {renderLeftinIcon()}
        {renderField()}
        {renderRightinIcon()}
        {clearable && value && handleClear()}
      </div>
      {renderRightoutIcon()}
      {renderRightLabel()}
    </div>
  )
}

SearchBar.defaultProps = defaultProps
SearchBar.displayName = 'NutSearchBar'
