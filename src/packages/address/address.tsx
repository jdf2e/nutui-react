import React, { FunctionComponent, useEffect, useState } from 'react'
import { Left, Location2, Check, CircleClose } from '@nutui/icons-react'
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
  onSelect?: (data: AddressList) => void
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
      'onChange' | 'title' | 'onSelect' | 'defaultValue'
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
    onSelect,
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

  const [selectedExistAddress, setSelectedExistAddress] = useState({}) // 当前选择的地址

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
    } else {
      res.data = selectedExistAddress as AddressList
    }

    initAddress()

    onClose && onClose(res)
  }

  // exist：已有地址列表
  const selectedExistItem = (data: AddressList) => {
    setSelectedExistAddress(data)
    onSelect && onSelect(data)
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

  // useEffect(() => {
  //   if (!showPopup) {
  //     close()
  //   }
  // }, [showPopup])

  return (
    <Popup
      visible={showPopup}
      position="bottom"
      // onClose={() => {
      //   // 只需要处理关闭弹框，不需要处理任何逻辑。
      //   // 当再次打开时，以初始化数据为准。
      //   console.log('d-')
      //   // close()
      // }}
    >
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
          <ExistRender
            type={currentType}
            existList={existList}
            selectIcon={
              React.isValidElement(selectIcon) ? (
                selectIcon
              ) : (
                <Check color="#FA2C19" />
              )
            }
            defaultIcon={
              React.isValidElement(defaultIcon) ? defaultIcon : <Location2 />
            }
            custom={custom || (custom && locale.address.chooseAnotherAddress)}
            onSelect={selectedExistItem}
            onSwitchModule={onSwitchModule}
          />
        )}
      </div>
    </Popup>
  )
}

Address.defaultProps = defaultProps
Address.displayName = 'NutAddress'
