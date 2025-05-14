import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react'
import { View } from '@tarojs/components'
import { ArrowLeft } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import { ExistRender } from './existRender.taro'
import { ElevatorRender } from './elevatorRender.taro'
import { CascaderRender } from './cascaderRender.taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import {
  AddressList,
  AddressRef,
  CascaderValue,
  TaroAddressProps,
} from '@/types'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: [],
  type: 'cascader',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  custom: false,
  existList: [],
  hotList: [],
  height: '200px',
  defaultIcon: null,
  selectIcon: null,
  closeIcon: null,
  backIcon: null,
} as unknown as TaroAddressProps

const InternalAddress: ForwardRefRenderFunction<
  AddressRef,
  Partial<TaroAddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'defaultValue' | 'onLoad' | 'title' | 'onClick'
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
    hotList,
    onChange,
    onExistSelect,
    onClose,
    onSwitch,
    ...rest
  } = mergeProps(defaultProps, props)
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

  const renderLeftOnCascaderSwitch = () => {
    if (!custom) return null
    return (
      <View className={`${classPrefix}-left-icon`} onClick={onSwitchModule}>
        {React.isValidElement(backIcon) ? (
          backIcon
        ) : (
          <ArrowLeft color="#cccccc" />
        )}
      </View>
    )
  }

  const selectedExistItem = (data: AddressList) => {
    onExistSelect && onExistSelect(data)
    handleClose()
  }

  const onSwitchModule = () => {
    const nextType = currentType === 'exist' ? 'cascader' : 'exist'
    setCurrentType(nextType)
    onSwitch && onSwitch({ type: nextType })
  }
  const renderElevator = () => {
    return (
      <ElevatorRender
        visible={innerVisible}
        closeable
        title={title || locale.address.selectRegion}
        left={backIcon}
        defaultValue={defaultValue}
        closeIcon={closeIcon}
        options={options}
        hotList={hotList}
        format={format}
        optionKey={optionKey}
        type={currentType}
        height={height}
        onClose={handleClose}
        onChange={(val: CascaderValue, params?: any) => {
          onChange?.(val, params)
        }}
      />
    )
  }
  const renderCascator = () => {
    return (
      <CascaderRender
        visible={innerVisible}
        closeable
        title={title || locale.address.selectRegion}
        left={renderLeftOnCascaderSwitch()}
        defaultValue={defaultValue}
        closeIcon={closeIcon}
        options={options}
        format={format}
        optionKey={optionKey}
        type={currentType}
        height={height}
        onClose={handleClose}
        onChange={(val: CascaderValue, params?: any) => {
          onChange && onChange(val, params)
        }}
      />
    )
  }
  const renderExist = () => {
    return (
      <Popup
        visible={innerVisible}
        position="bottom"
        round
        closeable
        closeIcon={closeIcon}
        title={title || locale.address.selectRegion}
        onClose={handleClose}
      >
        <View
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
        </View>
      </Popup>
    )
  }
  return (
    <>
      {currentType === 'elevator' ? renderElevator() : null}
      {currentType === 'cascader' ? renderCascator() : null}
      {currentType === 'exist' ? renderExist() : null}
    </>
  )
}

export const Address = forwardRef(InternalAddress)

Address.displayName = 'NutAddress'
