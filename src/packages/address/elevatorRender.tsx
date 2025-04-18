import React, { FunctionComponent, useEffect, useMemo, useState } from 'react'

import Popup from '@/packages/popup'
import Elevator from '../elevator'
import {
  normalizeListOptions,
  normalizeOptions,
} from '@/packages/cascader/utils'
import { transformData, findDataByName } from './utils'
import {
  CascaderOption,
  WebCascaderProps,
  CascaderValue,
  CascaderOptionKey,
} from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { usePropsValue } from '@/hooks/use-props-value'
import { isEmpty } from '@/utils/is-empty'
import { useConfig } from '@/packages/configprovider'

type AreaInfo = {
  name: string
  id: string | number
  children: any
}
export interface AddressProps extends WebCascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  hotList: AreaInfo[]
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
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
} as unknown as AddressProps

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
      address: { hotCity, selectProvice },
    },
  } = useConfig()
  const classPrefix = 'nut-address'

  const [tabActiveIndex, setTabActiveIndex] = useState(0)
  const [innerOptions, setInnerOptions] = useState(outerOptions)
  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      onChange(value, [])
      onPathChange(value, [])
    },
  })

  const [innerValue, setInnerValue] = useState(value)
  const [addressTip, setAddressTip] = useState(selectProvice)
  const [levelIndex, setLevelIndex] = useState(0)

  // 初始化数据，只格式化一次；动态数据todo
  const options = useMemo(() => {
    let currOptions = innerOptions
    if (!isEmpty(format)) {
      currOptions = normalizeListOptions(innerOptions, format)
    } else if (!isEmpty(optionKey)) {
      currOptions = normalizeOptions(innerOptions, optionKey) || []
    }
    return transformData(currOptions)
  }, [innerOptions, optionKey, format])

  const [elevatorOptions, setElevatorOptions] = useState<any>([])

  useEffect(() => {
    setElevatorOptions(options)
  }, [options])

  const levels: any[] = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    for (const [index, val] of innerValue.entries()) {
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
    }
    if (!end) {
      next.push({
        name: null,
        children: currentOptions,
      })
    }
    return next
  }, [innerValue, options, tabActiveIndex])

  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: undefined,
    onChange: (value) => {
      if (value === false) {
        onClose()
      }
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
    setAddressTip(innerValue.length ? select : selectProvice)
  }, [innerValue])

  const handleElevatorItemClick = (
    elevatorItem: AreaInfo,
    levelIndex: number
  ) => {
    // if (elevatorItem?.disabled) return
    const nextValue = innerValue.slice(0, levelIndex)
    if (elevatorItem.name) {
      nextValue[levelIndex] = elevatorItem.name
    }
    if (elevatorItem.children?.length) {
      setElevatorOptions(elevatorItem.children)
      const distIndex = levelIndex + 1
      setLevelIndex(distIndex)
    } else {
      setVisible(false)
      setValue(nextValue)
    }
    setInnerValue(nextValue)
  }

  const handleHotItemClick = (hotItem: any) => {
    // 通过修改 innerValue 构造 level 数据
    const distData = findDataByName(options, hotItem.name)
    // 热门城市主要是一级城市和二级城市，可以扩展。TODO
    if (distData) {
      const innerValue = [distData.pName, distData.name].filter(
        (item) => item !== ''
      )
      setInnerValue(innerValue)
      setElevatorOptions(distData.children)
      setLevelIndex(innerValue.length)
    }
  }
  const renderTabs = () => {
    if (!levels[0].name) return null
    return (
      <div className={`${classPrefix}-selected`}>
        {levels.map((item, index) => (
          <>
            {item.name && (
              <div
                className={`${classPrefix}-selected-item ${item.current ? 'active' : ''}`}
                key={`-${index}`}
                onClick={() => {
                  props.onTabsChange?.(Number(index))
                  setTabActiveIndex(Number(index))
                  setLevelIndex(index)
                  setElevatorOptions(item.children)
                }}
              >
                {item.name}
              </div>
            )}
            {levels[index + 1]?.name && (
              <div className={`${classPrefix}-selected-border`}>-</div>
            )}
          </>
        ))}
      </div>
    )
  }

  const renderHotCity = () => {
    if (levels.length && tabActiveIndex !== 0) return
    return (
      <>
        <div className={`${classPrefix}-title`}>{hotCity}</div>
        <div className={`${classPrefix}-hotlist`}>
          {hotList.map((item, index) => (
            <div
              className={`${classPrefix}-hotlist-item`}
              key={`hot-${index}`}
              onClick={() => handleHotItemClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </>
    )
  }

  const renderArea = () => {
    return (
      <>
        <div className={`${classPrefix}-title`}>{addressTip}</div>
        <Elevator
          className={`${classPrefix}-elevator`}
          list={elevatorOptions}
          onItemClick={(key: string, item: any) =>
            handleElevatorItemClick(item, levelIndex)
          }
          height="300px"
        />
      </>
    )
  }

  const renderContent = () => {
    return (
      <>
        {renderTabs()}
        {renderHotCity()}
        {renderArea()}
      </>
    )
  }

  return popup ? (
    <Popup
      {...popupProps}
      visible={visible}
      position="bottom"
      style={{ height: '87%' }}
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
