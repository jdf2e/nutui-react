import React, { FunctionComponent, useEffect, useState } from 'react'
import { Left } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import { ExistRender } from './existRender.taro'
import { CustomRender } from './customRender.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { AddressList } from './type'
import {
  CascaderOption,
  CascaderOptionKey,
  CascaderProps,
  CascaderValue,
} from '@/packages/cascader/index.taro'
import { ComponentDefaults } from '@/utils/typings'

export interface AddressProps extends CascaderProps {
  visible: boolean
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
  // 仅用于选择已有地址
  onExistSelect?: (data: AddressList) => void
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
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

export const Address: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'defaultValue' | 'onLoad' | 'title' | 'onClick'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    visible,
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
  const [showPopup, setShowPopup] = useState(visible)

  const handClose = () => {
    setShowPopup(false)
  }
  useEffect(() => {
    setShowPopup(visible)
  }, [visible])

  const renderLeftOnCustomSwitch = () => {
    return (
      <>
        {custom && (
          <div className={`${classPrefix}-left-icon`} onClick={onSwitchModule}>
            {React.isValidElement(backIcon) ? (
              backIcon
            ) : (
              <Left color="#cccccc" />
            )}
          </div>
        )}
      </>
    )
  }

  const selectedExistItem = (data: AddressList) => {
    onExistSelect && onExistSelect(data)
    handClose()
  }

  // 切换地址选择模式
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
          visible={showPopup}
          closeable
          title={title || locale.address.selectRegion}
          left={renderLeftOnCustomSwitch()}
          defaultValue={defaultValue}
          options={options}
          format={format}
          optionKey={optionKey}
          type={currentType}
          height={height}
          onClose={handClose}
          onChange={(val: CascaderValue, params?: any) => {
            onChange?.(val, params)
          }}
        />
      ) : (
        <Popup
          visible={showPopup}
          position="bottom"
          round
          closeable
          closeIcon={closeIcon}
          title={title || locale.address.selectRegion}
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

Address.defaultProps = defaultProps
Address.displayName = 'NutAddress'
