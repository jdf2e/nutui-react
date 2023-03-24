import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import bem from '@/utils/bem'
import { AddressList } from './type'

import { useConfig } from '@/packages/configprovider'

export interface ExistRenderProps {
  type: string
  existAddress: AddressList[] | []
  defaultIcon: ReactNode
  selectedIcon: ReactNode
  isShowCustomAddress: boolean
  customAndExistTitle: string
  onSelected?: (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => void
  onClose?: (cal: { closeWay: string }) => void
  onSwitchModule?: (cal: { type: string }) => void
}

const defaultProps = {
  type: 'custom',
  existAddress: [],
  defaultIcon: null,
  selectedIcon: null,
  isShowCustomAddress: true,
  customAndExistTitle: '',
} as ExistRenderProps

export const ExistRender: FunctionComponent<
  Partial<ExistRenderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    existAddress,
    selectedIcon,
    defaultIcon,
    isShowCustomAddress,
    customAndExistTitle,
    onSelected,
    onClose,
    onSwitchModule,
    ...rest
  } = { ...defaultProps, ...props }
  const b = bem('address')
  // 选择现有地址
  const selectedExist = (item: AddressList) => {
    const copyExistAdd = existAddress as AddressList[]
    let prevExistAdd: AddressList = {
      provinceName: '',
      cityName: '',
      countyName: '',
      townName: '',
      addressDetail: '',
      selectedAddress: false,
    }

    copyExistAdd.forEach((list: AddressList, index) => {
      if (list && list.selectedAddress) {
        prevExistAdd = list
      }
      ;(list as AddressList).selectedAddress = false
    })

    item.selectedAddress = true

    onSelected && onSelected(prevExistAdd, item, copyExistAdd)
  }

  // 选择其他地址
  const onSwitch = () => {
    onSwitchModule &&
      onSwitchModule({ type: type === 'exist' ? 'custom' : 'exist' })
  }

  useEffect(() => {}, [existAddress])

  return (
    <div className={b('exist')}>
      <div className={b('exist-group')}>
        <ul className={b('exist-ul')}>
          {existAddress.map((item: AddressList, index: number) => {
            return (
              <li className={b('exist-item')} key={index}>
                <div onClick={() => selectedExist(item)}>
                  {item.selectedAddress ? selectedIcon : defaultIcon}
                  <div className={b('exist-item-info')}>
                    {item.name && item.phone && (
                      <div className="exist-item-info-top">
                        <div className="exist-item-info-name">{item.name}</div>
                        <div className="exist-item-info-phone">
                          {item.phone}
                        </div>
                      </div>
                    )}
                    <div className="exist-item-info-bottom">
                      <div>
                        {item.provinceName +
                          item.cityName +
                          item.countyName +
                          item.townName +
                          item.addressDetail}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {isShowCustomAddress && (
        <div className={b('choose-other')} onClick={onSwitch}>
          <div className={b('choose-other-btn')}>
            {customAndExistTitle || locale.address.chooseAnotherAddress}
          </div>
        </div>
      )}
    </div>
  )
}
