import React, { FunctionComponent, useState } from 'react'
import {
  WebCascaderProps,
  CascaderOption,
  CascaderValue,
  CascaderOptionKey,
} from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import Elevator from '../elevator'

// 支持热区快速定位
// 支持电梯快速定位
// 已选省份地区放在顶部，独立展示

export interface AddressProps extends WebCascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  hotList: []
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
    visible,
    type,
    height,
    options,
    hotList,
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
  const prefixCls = 'nut-address'
  const prefixEleCls = 'nut-address-elevator'

  const [addressTip, setAddressTip] = useState('选择省份/地区')
  const [selectedRegion, setSelectedRegion] = useState([
    // '新疆',
    // '克孜勒苏柯尔克孜自治州',
  ])

  const formatData = () => {
    return [
      {
        title: 'A',
        list: [
          {
            name: '安徽',
            id: 14,
          },
        ],
      },
      {
        title: 'B',
        list: [
          {
            name: '北京',
            id: 1,
          },
        ],
      },
      {
        title: 'C',
        list: [
          {
            name: '重庆',
            id: 4,
          },
        ],
      },
      {
        title: 'F',
        list: [
          {
            name: '福建',
            id: 16,
          },
        ],
      },
      {
        title: 'G',
        list: [
          {
            name: '贵州',
            id: 24,
          },
          {
            name: '广东',
            id: 19,
          },
          {
            name: '广西',
            id: 20,
          },
          {
            name: '甘肃',
            id: 28,
          },
        ],
      },
      {
        title: 'H',
        list: [
          {
            name: '河北',
            id: 5,
          },
          {
            name: '河南',
            id: 7,
          },
          {
            name: '湖北',
            id: 17,
          },
          {
            name: '湖南',
            id: 18,
          },
          {
            name: '海南',
            id: 23,
          },
          {
            name: '黑龙江',
            id: 10,
          },
        ],
      },
      {
        title: 'J',
        list: [
          {
            name: '江苏',
            id: 12,
          },
          {
            name: '江西',
            id: 21,
          },
          {
            name: '吉林',
            id: 9,
          },
          {
            name: '辽宁',
            id: 8,
          },
        ],
      },
      {
        title: 'N',
        list: [
          {
            name: '内蒙古',
            id: 11,
          },
          {
            name: '宁夏',
            id: 30,
          },
        ],
      },
      {
        title: 'Q',
        list: [
          {
            name: '青海',
            id: 29,
          },
        ],
      },
      {
        title: 'S',
        list: [
          {
            name: '山东',
            id: 13,
          },
          {
            name: '山西',
            id: 6,
          },
          {
            name: '上海',
            id: 2,
          },
          {
            name: '陕西',
            id: 27,
          },
          {
            name: '四川',
            id: 22,
          },
        ],
      },
      {
        title: 'T',
        list: [
          {
            name: '天津',
            id: 3,
          },
        ],
      },
      {
        title: 'X',
        list: [
          {
            name: '西藏',
            id: 26,
          },
          {
            name: '新疆',
            id: 31,
          },
        ],
      },
      {
        title: 'Y',
        list: [
          {
            name: '云南',
            id: 25,
          },
        ],
      },
      {
        title: 'Z',
        list: [
          {
            name: '浙江',
            id: 15,
          },
        ],
      },
    ]
  }

  const renderHotArea = () => {
    return (
      <>
        <div className={`${prefixCls}-title`}>热门城市</div>
        <div className={`${prefixCls}-hotlist`}>
          {hotList.map((item, index) => (
            <div className={`${prefixCls}-hotlist-item`} key={`hot-${index}`}>
              {item.name}
            </div>
          ))}
        </div>
      </>
    )
  }

  const renderSelectedArea = () => {
    return (
      <div className={`${prefixCls}-selected`}>
        {selectedRegion.map((item, index) => (
          <>
            <div className={`${prefixCls}-selected-item`} key={`-${index}`}>
              {item}
            </div>
            {selectedRegion.length - 1 > index ? (
              <div className={`${prefixCls}-selected-border`}>-</div>
            ) : null}
          </>
        ))}
      </div>
    )
  }

  const renderArea = () => {
    return (
      <>
        <div className={`${prefixCls}-title`}>{addressTip}</div>
        <Elevator
          className={`${prefixCls}-elevator`}
          list={formatData(options)}
          height="350px"
        />
        {/* <Cascader
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
        /> */}
      </>
    )
  }

  return (
    <>
      {selectedRegion.length ? renderSelectedArea() : renderHotArea()}
      {renderArea()}
    </>
  )
}
