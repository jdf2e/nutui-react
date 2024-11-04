import React, { FunctionComponent } from 'react'
import Cascader, {
  CascaderProps,
  CascaderOption,
  CascaderValue,
  CascaderOptionKey,
} from '@/packages/cascader/index'
import { ComponentDefaults } from '@/utils/typings'

export interface AddressProps extends CascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  value?: CascaderValue
  defaultValue?: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  height: string | number
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'custom',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  height: '200px',
} as unknown as AddressProps

export const CustomRender: FunctionComponent<
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
      {type === 'custom' && (
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
