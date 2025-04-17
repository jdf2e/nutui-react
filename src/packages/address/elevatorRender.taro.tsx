import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import Popup from '@/packages/popup/index.taro'
import Elevator from '../elevator/index.taro'
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

// 支持热区快速定位
// 支持电梯快速定位
// 已选省份地区放在顶部，独立展示
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
    children,
    type,
    height,
    hotList,
    title,
    left,
    defaultValue,
    optionKey,
    format,
    onClose,
    onChange,
    onPathChange,
    activeColor,
    activeIcon,
    popup,
    popupProps = {},
    visible: outerVisible,
    options: outerOptions,
    value: outerValue,
    defaultValue: outerDefaultValue,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    onLoad,
    ...rest
  } = mergeProps(defaultProps, props)
  const { locale } = useConfig()

  const classPrefix = 'nut-address'

  const [tabActiveIndex, setTabActiveIndex] = useState(0)
  const [innerOptions, setInnerOptions] = useState(outerOptions)
  const [loading, setLoading] = useState<{ [key: string]: any }>({})

  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      props.onChange?.(value, pathNodes.current)
      props.onPathChange?.(value, pathNodes.current)
    },
  })

  const [innerValue, setInnerValue] = useState(value)
  const [addressTip, setAddressTip] = useState('选择省份/地区')
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

  const pathNodes = useRef<CascaderOption[]>([])

  const levels: any[] = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    for (const [index, val] of innerValue.entries()) {
      const opt = currentOptions
        ?.flatMap((o: any) => {
          const foundItem = o.list.find((item: any) => item.name === val)
          return foundItem
        })
        .filter((item) => item !== undefined)[0]

      next.push({
        name: val,
        children: currentOptions,
        levelIndex: index,
        current: index === tabActiveIndex,
      })
      // pathNodes.current[index] = opt
      if (opt?.children) {
        currentOptions = opt.children
      } else {
        end = true
        // break
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
        props.onClose?.()
      }
    },
  })

  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [visible, value])

  useEffect(() => {
    setInnerOptions(outerOptions)
  }, [outerOptions])

  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
    setAddressTip(innerValue.length ? '请选择' : '选择省份/地区')
  }, [innerValue])

  const renderTab = () => {
    if (!levels[0].name) return
    // console.log('tabs', levels)
    return (
      <div className={`${classPrefix}-selected`}>
        {levels.map((item, index) => (
          <>
            {item.name ? (
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
            ) : null}
            {levels[index + 1]?.name ? (
              <div className={`${classPrefix}-selected-border`}>-</div>
            ) : null}
          </>
        ))}
      </div>
    )
  }

  const onElevatorItemClick = (elevatorItem: AreaInfo, levelIndex: number) => {
    if (elevatorItem?.disabled) return
    if (elevatorItem.children?.length) {
      setElevatorOptions(elevatorItem.children)
      const distIndex = levelIndex + 1
      setLevelIndex(distIndex)
    } else {
      console.log('close popup')
    }
    const nextValue = innerValue.slice(0, levelIndex)
    if (elevatorItem.name) {
      setLoading(!!onLoad && { [levelIndex]: elevatorItem.name })
      nextValue[levelIndex] = elevatorItem.name
    }
    if (!elevatorItem.children && !onLoad) {
      setVisible(false)
      setValue(nextValue)
    }
    setInnerValue(nextValue)
  }

  const onHotItemClick = (hotItem: any) => {
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

  const renderHotArea = () => {
    // 选中省份/直辖市时，会展示热门城市
    if (levels.length && tabActiveIndex !== 0) return
    return (
      <>
        <div className={`${classPrefix}-title`}>热门城市</div>
        <div className={`${classPrefix}-hotlist`}>
          {hotList.map((item, index) => (
            <div
              className={`${classPrefix}-hotlist-item`}
              key={`hot-${index}`}
              onClick={() => onHotItemClick(item)}
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
            onElevatorItemClick(item, levelIndex)
          }
          height="300px"
        />
      </>
    )
  }

  const renderElevatorList = () => {
    return (
      <>
        {renderTab()}
        {renderHotArea()}
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
      title={props.title}
      left={props.left}
      onOverlayClick={() => setVisible(false)}
      onCloseIconClick={() => setVisible(false)}
    >
      {renderElevatorList()}
    </Popup>
  ) : (
    renderElevatorList()
  )
}

ElevatorRender.displayName = 'NutElevatorRender'
