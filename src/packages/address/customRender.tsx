import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import Icon from '@/packages/icon'
import bem from '@/utils/bem'
import Elevator from '@/packages/elevator'
import { RegionData } from './address'

interface CustomRegionData {
  title: string
  list: any[]
}

interface MapRef {
  province: React.RefObject<HTMLDivElement>
  city: React.RefObject<HTMLDivElement>
  country: React.RefObject<HTMLDivElement>
  town: React.RefObject<HTMLDivElement>
}

export interface AddressProps {
  type: string
  province: RegionData[]
  city: RegionData[]
  country: RegionData[]
  town: RegionData[]
  height: string | number
  onNextArea?: (cal: {
    next: string
    value: string | RegionData
    custom: string
    selectedRegion: {}
  }) => void

  onClose?: () => void
}

const defaultProps = {
  type: 'custom',
  province: [],
  city: [],
  country: [],
  town: [],
  height: '200px',
} as AddressProps

export const CustomRender: FunctionComponent<
  Partial<AddressProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children, type, height, province, city, country, town, onNextArea, onClose, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('address')
  const [privateType, setPrivateType] = useState<string>(type)
  const [tabIndex, setTabIndex] = useState(0)
  const [tabName, setTabName] = useState<string[]>(['province', 'city', 'country', 'town'])

  const provinceRef = useRef(null)
  const cityRef = useRef(null)
  const countryRef = useRef(null)
  const townRef = useRef(null)

  const regionLine = useRef(null)

  const isCustom2 = () => {
    return type === 'custom2'
  }

  const transformData = (data: RegionData[]) => {
    if (!Array.isArray(data)) throw new TypeError('params muse be array.')

    if (!data.length) return []

    data.forEach((item: RegionData) => {
      if (!item.title) {
        console.error('[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .')
        return
      }
    })

    const newData: CustomRegionData[] = []

    data = data.sort((a: RegionData, b: RegionData) => {
      return a.title.localeCompare(b.title)
    })

    data.forEach((item: RegionData) => {
      const index = newData.findIndex((value: CustomRegionData) => value.title === item.title)
      if (index <= -1) {
        newData.push({
          title: item.title,
          list: ([] as RegionData[]).concat(item),
        })
      } else {
        newData[index] = {
          title: item.title,
          list: newData[index].list.concat(item),
        }
      }
    })

    return newData
  }

  const [regionList, setRegionList] = useState<{
    province: RegionData[] | CustomRegionData[]
    city: RegionData[] | CustomRegionData[]
    country: RegionData[] | CustomRegionData[]
    town: RegionData[] | CustomRegionData[]
  }>({
    province: isCustom2() ? transformData(province) : province,
    city: isCustom2() ? transformData(city) : city,
    country: isCustom2() ? transformData(country) : country,
    town: isCustom2() ? transformData(town) : town,
  })

  //已选择的 省、市、县、镇
  const [selectedRegion, setSelectedRegion] = useState<{
    province: RegionData
    city: RegionData
    country: RegionData
    town: RegionData
  }>({
    province: {
      name: '',
    },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' },
  })

  type SelectedRegionType = keyof typeof selectedRegion

  const [lineDistance, setLineDistance] = useState(20)

  //获取已选地区列表名称
  const getTabName = (item: RegionData, index: number) => {
    if (item.name) return item.name

    if (tabIndex < index) {
      return item.name
    } else {
      return '请选择'
    }
  }

  const mapRef = {
    province: provinceRef,
    city: cityRef,
    country: countryRef,
    town: townRef,
  }

  type MapRefType = keyof typeof mapRef
  // 移动下面的红线
  const lineAnimation = (index: string | number) => {
    setTimeout(() => {
      const name: MapRefType = tabName[index as number] as MapRefType

      const refD: MapRef = mapRef

      if (name && refD[name] && refD[name].current) {
        const distance = (refD[name as MapRefType] as any).current.offsetLeft
        setLineDistance(distance ? distance : 20)
      }
    }, 0)
  }
  // 切换下一级列表
  const nextAreaList = (item: RegionData | string) => {
    // onchange 接收的参数
    const calBack = {
      next: '',
      value: '',
      custom: tabName[tabIndex],
      selectedRegion: {},
    }

    setSelectedRegion({
      ...selectedRegion,
      [tabName[tabIndex]]: item,
    })

    calBack.selectedRegion = {
      ...selectedRegion,
      [tabName[tabIndex]]: item,
    }

    for (let i = tabIndex; i < tabIndex - 1; i++) {
      setSelectedRegion(() => ({
        ...selectedRegion,
        [tabName[i + 1]]: {},
      }))

      calBack.selectedRegion = {
        ...selectedRegion,
        [tabName[i + 1]]: {},
      }
    }

    if (tabIndex < 3) {
      setTabIndex(() => tabIndex + 1)

      lineAnimation(tabIndex + 1)

      // 切换下一个
      calBack.next = tabName[tabIndex + 1]
      calBack.value = item as string

      onNextArea && onNextArea(calBack)
    } else {
      onClose && onClose()
    }
  }
  //切换地区Tab
  const changeRegionTab = (item: RegionData, index: number) => {
    if (getTabName(item, index)) {
      setTabIndex(index)
      lineAnimation(index)
    }
  }

  const handleElevatorItem = (key: string, item: RegionData | string) => {
    nextAreaList(item)
  }

  useEffect(() => {
    const { province } = { ...defaultProps, ...props }
    setRegionList({
      ...regionList,
      province: isCustom2() ? transformData(province) : province,
    })
  }, [province])

  useEffect(() => {
    const { city } = { ...defaultProps, ...props }

    setRegionList({
      ...regionList,
      city: isCustom2() ? transformData(city) : city,
    })
  }, [city])

  useEffect(() => {
    const { country } = { ...defaultProps, ...props }

    setRegionList({
      ...regionList,
      country: isCustom2() ? transformData(country) : country,
    })
  }, [country])

  useEffect(() => {
    const { town } = { ...defaultProps, ...props }
    setRegionList({
      ...regionList,
      town: isCustom2() ? transformData(town) : town,
    })
  }, [town])

  return (
    <div className={b('custom')}>
      <div className={b('region-tab')}>
        {Object.keys(selectedRegion).map((key: string | SelectedRegionType, index) => {
          return (
            <div
              className={`${b('tab-item')} ${index === tabIndex ? 'active' : ''}`}
              key={index}
              ref={mapRef[key as SelectedRegionType]}
              onClick={() => changeRegionTab(selectedRegion[key as SelectedRegionType], index)}
            >
              <div>{getTabName(selectedRegion[key as SelectedRegionType], index)}</div>
            </div>
          )
        })}
        <div className={b('tab-line')} ref={regionLine} style={{ left: lineDistance + 'px' }}></div>
      </div>

      {privateType === 'custom' && (
        <div className={b('region-con')}>
          <ul className={b('region-group')}>
            {regionList[tabName[tabIndex] as SelectedRegionType].map(
              (item: RegionData | CustomRegionData, index: number) => {
                return (
                  <li
                    key={index}
                    className={b('region-item')}
                    onClick={(e) => nextAreaList(item as RegionData)}
                  >
                    {selectedRegion[tabName[tabIndex] as SelectedRegionType].id ===
                      (item as RegionData).id && (
                      <Icon
                        className={b('region-item--icon')}
                        name="Check"
                        color="#FA2C19"
                        size="13px"
                      ></Icon>
                    )}
                    {(item as RegionData).name}
                  </li>
                )
              }
            )}
          </ul>
        </div>
      )}

      {privateType === 'custom2' && (
        <div className={b('elevator-group')}>
          <Elevator
            height={height}
            indexList={regionList[tabName[tabIndex] as SelectedRegionType]}
            clickItem={handleElevatorItem}
          ></Elevator>
        </div>
      )}
    </div>
  )
}
