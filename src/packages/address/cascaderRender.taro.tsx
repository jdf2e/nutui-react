import React, { FunctionComponent } from 'react'
import {
  TaroCascaderProps,
  CascaderOption,
  CascaderValue,
  CascaderOptionKey,
} from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import Cascader from '@/packages/cascader/index.taro'

export interface AddressProps extends TaroCascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  value: CascaderValue
  defaultValue: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  height: string | number
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'cascader',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  height: '200px',
} as unknown as AddressProps

export const CascaderRender: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'title' | 'defaultValue' | 'onChange'
    >
> = (props) => {
  const {
    children,
    visible,
    type,
    height,
    options,
    title,
    left,
    value,
    defaultValue,
    optionKey,
    format,
    onClose,
    onChange,
    onPathChange,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  return (
    <>
      {type === 'cascader' && (
        <Cascader
          visible={visible}
          value={value}
          defaultValue={defaultValue}
          title={title}
          left={left}
          options={options}
          format={format}
          optionKey={optionKey}
          onClose={() => {
            onClose?.()
          }}
          onChange={(val, params) => {
            onChange?.(val, params)
          }}
          onPathChange={onPathChange}
          {...rest}
        />
      )}
    </>
  )
}
