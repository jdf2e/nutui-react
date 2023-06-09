import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import { Check } from '@nutui/icons-react'
import Elevator from '@/packages/elevator'
import { useConfig } from '@/packages/configprovider'
import { Regions, RegionData, NextList } from './type'

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
  defaultValue: (string | number)[]
  type: string
  province: RegionData[]
  city: RegionData[]
  country: RegionData[]
  town: RegionData[]
  height: string | number
  onNextArea?: (cal: NextList) => void
  onTabClick?: (type: string) => void
  onClose?: () => void
}

const defaultProps = {
  defaultValue: [],
  type: 'custom',
  province: [],
  city: [],
  country: [],
  town: [],
  height: '200px',
} as AddressProps

export const CustomRender: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'title' | 'defaultValue'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    defaultValue,
    height,
    province,
    city,
    country,
    town,
    onNextArea,
    onTabClick,
    onClose,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-address'
  const [privateType] = useState<string>(type)
  const [tabIndex, setTabIndex] = useState(0)
  const [tabName] = useState<string[]>(['province', 'city', 'country', 'town'])

  const provinceRef = useRef(null)
  const cityRef = useRef(null)
  const countryRef = useRef(null)
  const townRef = useRef(null)

  const isCustom2 = () => {
    return type === 'custom2'
  }

  const transformData = (data: RegionData[]) => {
    if (!Array.isArray(data)) throw new TypeError('params muse be array.')
    if (!data.length) return []
    data.forEach((item: RegionData) => {
      if (!item.title) {
        console.error(
          '[NutUI] <Address> 请检查数组选项的 title 值是否有设置 ,title 为必填项 .'
        )
      }
    })

    const newData: CustomRegionData[] = []
    data = data.sort((a: RegionData, b: RegionData) => {
      return a.title.localeCompare(b.title)
    })

    data.forEach((item: RegionData) => {
      const index = newData.findIndex(
        (value: CustomRegionData) => value.title === item.title
      )
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

  // 已选择的 省、市、县、镇
  const [selectedRegion, setSelectedRegion] = useState<Regions>({
    province: { name: '' },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' },
  })

  type SelectedRegionType = keyof typeof selectedRegion
  const [lineDistance, setLineDistance] = useState(20)

  // 获取已选地区列表名称
  const getTabName = (item: RegionData, index: number) => {
    if (tabIndex > index) {
      return item.name
    }
    return locale.select
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
        setLineDistance(distance || 20)
      }
    }, 0)
  }
  // 切换下一级列表
  const nextAreaList = (item: RegionData | string) => {
    const nextList: NextList = {
      next: '',
      value: '',
      custom: tabName[tabIndex],
    }

    const bbselectedRegion = selectedRegion ? { ...selectedRegion } : null
    if (bbselectedRegion) {
      setSelectedRegion({
        ...bbselectedRegion,
        [tabName[tabIndex]]: item,
      })
      nextList.selectedRegion = {
        ...bbselectedRegion,
        [tabName[tabIndex]]: item,
      }
      for (let i = tabIndex; i < tabIndex - 1; i++) {
        setSelectedRegion({
          ...bbselectedRegion,
          [tabName[i + 1]]: null,
        })
        nextList.selectedRegion = {
          ...bbselectedRegion,
          [tabName[i + 1]]: {},
        }
      }
    }

    if (tabIndex < 4) {
      // 切换下一个
      if (tabIndex === 3) {
        nextList.next = ''
      } else {
        setTabIndex(() => tabIndex + 1)
        lineAnimation(tabIndex + 1)
        nextList.next = tabName[tabIndex + 1]
      }
      nextList.value = item as string

      onNextArea && onNextArea(nextList)
    } else {
      onClose && onClose()
    }
  }
  // 切换地区Tab
  const changeRegionTab = (item: RegionData, index: number, key: string) => {
    if (getTabName(item, index)) {
      setTabIndex(index)
      lineAnimation(index)
    }
    onTabClick && onTabClick(key)
  }

  // 默认选中项
  const initCustomSelected = () => {
    if (defaultValue.length > 0) {
      let tagIndex = 0
      const regions: any = selectedRegion && Object.assign(selectedRegion)

      for (let index = 0; index < defaultValue.length; index++) {
        if ((regionList as any)[tabName[index]].length === 0) {
          tagIndex = index - 1
          setTabIndex(index - 1)
          break
        } else {
          const id = defaultValue[index]
          const arr: [] = (regionList as any)[tabName[index]]
          if (privateType === 'custom') {
            regions[[tabName[index]] as any] = arr.filter(
              (item: RegionData) => item.id === id
            )[0]
          } else if (privateType === 'custom2') {
            const sumArr: any = []
            arr.forEach((item) => {
              sumArr.push(...(item as any).list)
            })
            regions[[tabName[index]] as any] = sumArr.filter(
              (item: RegionData) => item.id === id
            )[0]
          }

          tagIndex = index
          setSelectedRegion(regions)
        }
      }

      setTabIndex(tagIndex)
      lineAnimation(tagIndex)
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

  useEffect(() => {
    initCustomSelected()
  }, [defaultValue])

  return (
    <>
      <div className={`${classPrefix}-tabs`}>
        {selectedRegion &&
          Object.keys(selectedRegion).map(
            (key: string | SelectedRegionType, index) => {
              return (
                <div
                  className={`${`${classPrefix}-tabs-item`} ${
                    index === tabIndex ? 'active' : ''
                  }`}
                  key={index}
                  ref={mapRef[key as SelectedRegionType]}
                  onClick={() =>
                    changeRegionTab(
                      selectedRegion[key as SelectedRegionType],
                      index,
                      key
                    )
                  }
                >
                  {index <= tabIndex && (
                    <>
                      {getTabName(
                        selectedRegion[key as SelectedRegionType],
                        index
                      )}
                    </>
                  )}
                </div>
              )
            }
          )}
        <div
          className={`${classPrefix}-tabs-line`}
          style={{ left: `${lineDistance}px` }}
        />
      </div>

      {privateType === 'custom' && (
        <ul className={`${classPrefix}-custom`}>
          {(regionList[tabName[tabIndex] as SelectedRegionType] as any).map(
            (item: RegionData | CustomRegionData, index: number) => {
              return (
                <li key={index} className={`${classPrefix}-custom-item`}>
                  <div
                    onClick={() => {
                      nextAreaList(item as RegionData)
                    }}
                  >
                    {selectedRegion &&
                      selectedRegion[tabName[tabIndex] as SelectedRegionType]
                        .id === (item as RegionData).id && (
                        <Check
                          className={`${classPrefix}-custom-item-icon`}
                          color="var(--nutui-brand-color)"
                          width={13}
                          height={13}
                        />
                      )}
                    {(item as RegionData).name}
                  </div>
                </li>
              )
            }
          )}
        </ul>
      )}

      {privateType === 'custom2' && (
        <div className={`${classPrefix}-elevator`}>
          <Elevator
            height={height}
            list={regionList[tabName[tabIndex] as SelectedRegionType]}
            onClickItem={handleElevatorItem}
          />
        </div>
      )}
    </>
  )
}
