import React, { FunctionComponent, useEffect, useState } from 'react'
import { Left, CircleClose } from '@nutui/icons-react'
import Popup from '@/packages/popup'
import { ExistRender } from './existRender'
import { CustomRender } from './customRender'
import { useConfig } from '@/packages/configprovider'
import {
  RegionData,
  NextList,
  Regions,
  ChangeData,
  ResultData,
  AddressList,
} from './type'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AddressProps extends BasicComponent {
  visible: boolean
  defaultValue: (string | number)[]
  type: string
  title: string
  province: RegionData[]
  city: RegionData[]
  country: RegionData[]
  town: RegionData[]
  custom: boolean | string
  existList: AddressList[]
  height: string | number
  defaultIcon: React.ReactNode
  selectIcon: React.ReactNode
  closeIcon: React.ReactNode
  backIcon: React.ReactNode
  onClose?: (data: ResultData) => void
  onSwitch?: (data: { type: string }) => void
  // 仅用于选择级联地址。
  onChange?: (data: ChangeData) => void
  onTabChecked?: (data: string) => void
  // 仅用于选择已有地址
  onExistSelect?: (data: AddressList) => void
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  defaultValue: [],
  type: 'custom',
  title: '',
  province: [],
  city: [],
  country: [],
  town: [],
  custom: false,
  existList: [],
  height: '200px',
  defaultIcon: null,
  selectIcon: null,
  closeIcon: null,
  backIcon: null,
} as AddressProps

export const Address: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'title' | 'defaultValue'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    visible,
    defaultValue,
    children,
    type,
    height,
    title,
    existList,
    province,
    city,
    country,
    town,
    custom,
    selectIcon,
    defaultIcon,
    closeIcon,
    backIcon,
    onChange,
    onExistSelect,
    onClose,
    onSwitch,
    onTabChecked,
    style,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-address'
  const [currentType, setCurrentType] = useState<string>(type)
  const [showPopup, setShowPopup] = useState(visible)
  const [selectedRegion, setSelectedRegion] = useState<Regions>({
    province: { name: '' },
    city: { name: '' },
    country: { name: '' },
    town: { name: '' },
  })

  const handClose = () => {
    setShowPopup(false)
  }
  const nextAreaList = (item: NextList) => {
    const callbackParams = {
      next: item.next,
      value: item.value,
      custom: item.custom,
    }

    setSelectedRegion({
      ...(item.selectedRegion as typeof selectedRegion),
    })

    onChange && onChange(callbackParams)
  }

  const initAddress = () => {
    const tabName = ['province', 'city', 'country', 'town']
    for (let i = 0; i < tabName.length; i++) {
      setSelectedRegion({
        ...selectedRegion,
        [tabName[i]]: {},
      })
    }
  }
  const close = () => {
    const resCopy = {
      addressIdStr: '',
      addressStr: '',
      ...selectedRegion,
    }
    const res: ResultData = {
      data: {
        addressIdStr: '',
        addressStr: '',
        ...selectedRegion,
      },
      type: currentType,
    }
    if (currentType === 'custom' || currentType === 'custom2') {
      const { province, city, country, town } = resCopy
      resCopy.addressIdStr = [
        (province as RegionData).id || 0,
        (city as RegionData).id || 0,
        (country as RegionData).id || 0,
        (town as RegionData).id || 0,
      ].join('_')
      resCopy.addressStr = [
        (province as RegionData).name,
        (city as RegionData).name,
        (country as RegionData).name,
        (town as RegionData).name,
      ].join('')
      res.data = resCopy
    }

    initAddress()

    onClose && onClose(res)
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
    initAddress()
    onSwitch && onSwitch({ type: currentType })
  }

  const headerRender = () => {
    return (
      <div className={`${classPrefix}-header`}>
        <div className="arrow-back" onClick={onSwitchModule}>
          {currentType === 'custom' &&
            custom &&
            (React.isValidElement(backIcon) ? (
              backIcon
            ) : (
              <Left color="#cccccc" />
            ))}
        </div>

        <div className={`${classPrefix}-header-title`}>
          {title || locale.address.selectRegion}
        </div>

        <div onClick={() => handClose()}>
          {React.isValidElement(closeIcon) ? (
            closeIcon
          ) : (
            <CircleClose width={18} height={18} color="#ccc" />
          )}
        </div>
      </div>
    )
  }

  useEffect(() => {
    setShowPopup(visible)
  }, [visible])

  return (
    <Popup visible={showPopup} position="bottom">
      <div
        className={`${classPrefix} ${className || ''}`}
        style={{ ...style }}
        {...rest}
      >
        {headerRender()}
        {(currentType === 'custom' || currentType === 'custom2') && (
          <CustomRender
            defaultValue={defaultValue}
            type={currentType}
            province={province}
            city={city}
            country={country}
            town={town}
            height={height}
            onNextArea={(cal) => {
              nextAreaList && nextAreaList(cal)
            }}
            onTabClick={(type) => {
              onTabChecked && onTabChecked(type)
            }}
            onClose={handClose}
          />
        )}
        {currentType === 'exist' && (
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
        )}
      </div>
    </Popup>
  )
}

Address.defaultProps = defaultProps
Address.displayName = 'NutAddress'
