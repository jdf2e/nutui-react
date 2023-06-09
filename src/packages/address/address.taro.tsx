import React, { FunctionComponent, useEffect, useState } from 'react'
import { Left, Location2, Check, CircleClose } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import { ExistRender } from './existRender'
import { CustomRender } from './customRender.taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import {
  RegionData,
  NextList,
  Regions,
  ChangeCallBack,
  CloseCallBack,
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
  onSelect?: (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => void
  onClose?: (cal: CloseCallBack) => void
  onCancel?: (cal: { closeWay: string }) => void
  onSwitch?: (cal: { type: string }) => void
  onChange?: (cal: ChangeCallBack) => void
  onTabChecked?: (cal: string) => void
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
    onCancel,
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

  const [privateType, setPrivateType] = useState<string>(type)
  const [tabName] = useState<string[]>(['province', 'city', 'country', 'town'])
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
  const clickOverlay = () => {
    onCancel && onCancel({ closeWay: 'mask' })
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
  const selectedExist = (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => {
    setSelectedExistAddress(item)
    onSelect && onSelect(prevExistAdd, item, copyExistAdd)
    handClose()
  }
  const initAddress = () => {
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
    const res: CloseCallBack = {
      data: {
        addressIdStr: '',
        addressStr: '',
        ...selectedRegion,
      },
      type: privateType,
    }
    if (privateType === 'custom' || privateType === 'custom2') {
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
  // 选择其他地址
  const onSwitchModule = () => {
    if (privateType === 'exist') {
      setPrivateType('custom')
    } else {
      setPrivateType('exist')
    }
    initAddress()
    onSwitch && onSwitch({ type: privateType })
  }

  const headerRender = () => {
    return (
      <div className={`${classPrefix}-header`}>
        <div className="arrow-back" onClick={onSwitchModule}>
          {privateType === 'custom' &&
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
            <CircleClose size={18} color="#ccc" />
          )}
        </div>
      </div>
    )
  }

  useEffect(() => {
    setShowPopup(visible)
  }, [visible])

  useEffect(() => {
    if (!showPopup) {
      close()
    }
  }, [showPopup])

  return (
    <>
      {showPopup && (
        <Popup
          visible={showPopup}
          position="bottom"
          onClickOverlay={clickOverlay}
          onClose={() => {
            close()
          }}
        >
          <div
            className={`${classPrefix} ${className || ''}`}
            style={{ ...style }}
            {...rest}
          >
            {headerRender()}
            {(privateType === 'custom' || privateType === 'custom2') && (
              <CustomRender
                defaultValue={defaultValue}
                type={privateType}
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
            {privateType === 'exist' && (
              <ExistRender
                type={privateType}
                existList={existList}
                selectIcon={
                  React.isValidElement(selectIcon) ? (
                    selectIcon
                  ) : (
                    <Check color="#FA2C19" />
                  )
                }
                defaultIcon={
                  React.isValidElement(defaultIcon) ? (
                    defaultIcon
                  ) : (
                    <Location2 />
                  )
                }
                custom={
                  custom || (custom && locale.address.chooseAnotherAddress)
                }
                onSelect={selectedExist}
                onSwitchModule={onSwitchModule}
              />
            )}
          </div>
        </Popup>
      )}
    </>
  )
}

Address.defaultProps = defaultProps
Address.displayName = 'NutAddress'
