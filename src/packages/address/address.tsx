import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react'
import { ArrowLeft } from '@nutui/icons-react'
import Popup from '@/packages/popup'
import { CustomRender } from './customRender'
import { ExistRender } from './existRender'
import { useConfig } from '@/packages/configprovider'
import { AddressList } from './types'
import {
  CascaderOption,
  CascaderOptionKey,
  CascaderProps,
  CascaderValue,
} from '@/packages/cascader/index'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

type AddressRef = {
  open: () => void
  close: () => void
}

export interface AddressProps extends CascaderProps {
  visible: boolean
  defaultVisible: boolean
  value?: CascaderValue
  defaultValue?: CascaderValue
  type: string
  options: CascaderOption[]
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  custom: boolean | string
  existList: AddressList[]
  height: string | number
  defaultIcon: React.ReactNode
  selectIcon: React.ReactNode
  backIcon: React.ReactNode
  onSwitch?: (data: { type: string }) => void
  onExistSelect?: (data: AddressList) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: [],
  type: 'custom',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  custom: false,
  existList: [],
  height: '200px',
  defaultIcon: null,
  selectIcon: null,
  closeIcon: null,
  backIcon: null,
} as unknown as AddressProps

export const InternalAddress: ForwardRefRenderFunction<
  AddressRef,
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'defaultValue' | 'onLoad' | 'title'
    >
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    visible,
    defaultVisible,
    defaultValue,
    children,
    type,
    options,
    optionKey,
    format,
    height,
    title,
    existList,
    custom,
    selectIcon,
    defaultIcon,
    closeIcon,
    backIcon,
    onChange,
    onExistSelect,
    onClose,
    onSwitch,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-address'
  const [currentType, setCurrentType] = useState<string>(type)
  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: defaultVisible,
  })

  useImperativeHandle(ref, () => {
    return {
      open() {
        setInnerVisible(true)
      },
      close() {
        setInnerVisible(false)
      },
    }
  })

  const handleClose = () => {
    setInnerVisible(false)
    onClose && onClose()
  }

  const renderLeftOnCustomSwitch = () => {
    return (
      <>
        {custom && (
          <div className={`${classPrefix}-left-icon`} onClick={onSwitchModule}>
            {React.isValidElement(backIcon) ? (
              backIcon
            ) : (
              <ArrowLeft color="#cccccc" />
            )}
          </div>
        )}
      </>
    )
  }

  const selectedExistItem = (data: AddressList) => {
    onExistSelect && onExistSelect(data)
    handleClose()
  }

  const onSwitchModule = () => {
    if (currentType === 'exist') {
      setCurrentType('custom')
    } else {
      setCurrentType('exist')
    }
    onSwitch && onSwitch({ type: currentType })
  }
  return (
    <>
      {currentType === 'custom' || currentType === 'custom2' ? (
        <CustomRender
          visible={innerVisible}
          closeable
          title={title || locale.address.selectRegion}
          left={renderLeftOnCustomSwitch()}
          defaultValue={defaultValue}
          closeIcon={closeIcon}
          options={options}
          format={format}
          optionKey={optionKey}
          type={currentType}
          height={height}
          onClose={handleClose}
          onChange={(val: CascaderValue, params?: any) => {
            onChange?.(val, params)
          }}
        />
      ) : (
        <Popup
          visible={innerVisible}
          position="bottom"
          round
          closeable
          closeIcon={closeIcon}
          title={title || locale.address.selectRegion}
          onClose={handleClose}
        >
          <div
            className={`${classPrefix} ${className || ''}`}
            style={{ ...style }}
          >
            {
              // 不需要 close，选中切换即关闭弹框。可手动关闭弹框，只关闭弹框不处理逻辑。
              <ExistRender
                type={currentType}
                existList={existList}
                selectIcon={selectIcon}
                defaultIcon={defaultIcon}
                custom={custom}
                onSelect={selectedExistItem}
                onSwitch={onSwitchModule}
              />
            }
          </div>
        </Popup>
      )}
    </>
  )
}

export const Address = forwardRef(InternalAddress)

Address.displayName = 'NutAddress'
