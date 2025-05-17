import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'

import { View } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import Elevator from '@/packages/elevator/index.taro'
import {
  normalizeListOptions,
  normalizeOptions,
} from '@/packages/cascader/utils'
import { transformData, findDataByName } from './utils'
import {
  CascaderOption,
  TaroCascaderProps,
  CascaderValue,
  CascaderOptionKey,
  RegionData,
} from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { usePropsValue } from '@/hooks/use-props-value'
import { isEmpty } from '@/utils/is-empty'
import { useConfig } from '@/packages/configprovider/index.taro'

export interface AddressProps extends TaroCascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  hotList: RegionData[]
  value: CascaderValue
  defaultValue: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  height: string | number
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'elevator',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  height: '200px',
  activeColor: '',
  activeIcon: 'checklist',
  popup: true,
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  hotList: [],
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
}

export const ElevatorRender: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'title' | 'defaultValue' | 'onChange'
    >
> = (props) => {
  const {
    hotList,
    title,
    left,
    optionKey,
    format,
    onClose,
    onChange,
    onPathChange,
    popup,
    popupProps = {},
    visible: outerVisible,
    options: outerOptions,
    value: outerValue,
    defaultValue: outerDefaultValue,
    closeable,
    closeIconPosition,
    closeIcon,
  } = mergeProps(defaultProps, props)
  const {
    locale: {
      select,
      address: { hotCity, selectProvince },
    },
  } = useConfig()
  const classPrefix = 'nut-address'
  const MAX_LENGTH = 10

  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      onChange(value, [])
      onPathChange(value, [])
    },
  })

  const [innerOptions, setInnerOptions] = useState(outerOptions)
  const [innerValue, setInnerValue] = useState(value)
  const [elevatorOptions, setElevatorOptions] = useState<any>([])
  const [addressTip, setAddressTip] = useState(selectProvince)
  const [levelIndex, setLevelIndex] = useState(0)
  const [tabActiveIndex, setTabActiveIndex] = useState(0)

  // 初始化数据，只格式化一次；动态数据todo
  const options = useMemo(() => {
    if (!isEmpty(format)) {
      return transformData(normalizeListOptions(innerOptions, format))
    }
    if (!isEmpty(optionKey)) {
      return transformData(normalizeOptions(innerOptions, optionKey) || [])
    }
    return transformData(innerOptions)
  }, [innerOptions, optionKey, format])

  useEffect(() => {
    setElevatorOptions(options)
  }, [options])

  const levels = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    innerValue.forEach((val, index) => {
      const opt = currentOptions
        ?.flatMap((o: any) => o.list.find((item: any) => item.name === val))
        .filter((item) => item !== undefined)[0]

      next.push({
        name: val,
        children: currentOptions,
        levelIndex: index,
        current: index === tabActiveIndex,
      })
      if (opt?.children) {
        currentOptions = opt.children
      } else {
        end = true
      }
    })
    if (!end) {
      next.push({
        name: null,
        children: currentOptions,
        levels: -1,
        current: false,
      })
    }
    return next
  }, [innerValue, options, tabActiveIndex])

  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: undefined,
    onChange: (value) => {
      if (value === false) onClose()
    },
  })

  useEffect(() => {
    if (!visible) setInnerValue(value)
  }, [visible, value])

  useEffect(() => {
    setInnerOptions(outerOptions)
  }, [outerOptions])

  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
    setAddressTip(innerValue.length ? select : selectProvince)
  }, [innerValue])

  const handleElevatorItemClick = (
    elevatorItem: RegionData,
    levelIndex: number
  ) => {
    const nextValue = innerValue.slice(0, levelIndex)
    if (elevatorItem.name) {
      nextValue[levelIndex] = elevatorItem.name
    }
    setInnerValue(nextValue)
    if (elevatorItem.children?.length) {
      setElevatorOptions(elevatorItem.children)
      setLevelIndex(levelIndex + 1)
    } else {
      setVisible(false)
      setValue(nextValue)
    }
  }

  const handleHotItemClick = (hotItem: any) => {
    // 通过修改 innerValue 构造 level 数据
    const distData = findDataByName(options, hotItem.name)
    // 热门城市主要是一级城市和二级城市，可以扩展。TODO
    if (distData) {
      const nextValue = [distData.pName, distData.name].filter(
        (item) => item !== ''
      )
      setInnerValue(nextValue)
      setElevatorOptions(distData.children)
      setLevelIndex(nextValue.length)
    }
  }
  const renderTabs = () => {
    if (!levels.length || !levels[0].name) return null
    return (
      <View className={`${classPrefix}-selected`}>
        {levels.map((item, index) => (
          <React.Fragment key={`adtabs-${index}`}>
            {item.name && (
              <View
                className={`${classPrefix}-selected-item ${item.current ? 'active' : ''}`}
                onClick={() => {
                  props.onTabsChange?.(index)
                  setTabActiveIndex(index)
                  setLevelIndex(index)
                  setElevatorOptions(item.children)
                }}
              >
                {item.name}
              </View>
            )}
            {levels[index + 1]?.name && (
              <View className={`${classPrefix}-selected-border`}>-</View>
            )}
          </React.Fragment>
        ))}
      </View>
    )
  }

  const renderHotCity = () => {
    if (levels.length && tabActiveIndex !== 0) return null
    return (
      <>
        <View className={`${classPrefix}-title`}>{hotCity}</View>
        <View
          className={`${classPrefix}-hotlist ${hotList.length > MAX_LENGTH ? 'hotlist-more' : ''}`}
        >
          {hotList.map((item, index) => (
            <View
              className={`${classPrefix}-hotlist-item`}
              key={`hot-${index}`}
              onClick={() => handleHotItemClick(item)}
            >
              {item.name}
            </View>
          ))}
        </View>
      </>
    )
  }

  const renderArea = () => (
    <>
      <View className={`${classPrefix}-title`}>{addressTip}</View>
      <Elevator
        className={`${classPrefix}-elevator`}
        list={elevatorOptions}
        onItemClick={(key: string, item: any) =>
          handleElevatorItemClick(item, levelIndex)
        }
        // height="67%"
        style={{ height: '100%' }}
        height="93%"
      />
    </>
  )

  const renderContent = () => (
    <>
      {renderTabs()}
      <View
        style={{
          height: innerValue.length ? '80%' : '93%',
          overflowY: levels.length && tabActiveIndex !== 0 ? 'hidden' : 'auto',
        }}
      >
        {renderHotCity()}
        {renderArea()}
      </View>
    </>
  )

  return popup ? (
    <Popup
      {...popupProps}
      visible={visible}
      position="bottom"
      style={{ height: '89%' }}
      round
      closeIcon={closeIcon}
      closeable={closeable}
      closeIconPosition={closeIconPosition}
      title={title}
      left={left}
      onOverlayClick={() => setVisible(false)}
      onCloseIconClick={() => setVisible(false)}
    >
      {renderContent()}
    </Popup>
  ) : (
    renderContent()
  )
}

ElevatorRender.displayName = 'NutElevatorRender'
