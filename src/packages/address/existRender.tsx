import React, { FunctionComponent, ReactNode, useEffect } from 'react'
import { AddressList } from './type'

export interface ExistRenderProps {
  type: string
  existList: AddressList[] | []
  defaultIcon: ReactNode
  selectIcon: ReactNode
  custom: boolean | string
  onSelect?: (
    prevExistAdd: AddressList,
    item: AddressList,
    copyExistAdd: AddressList[]
  ) => void
  onClose?: (cal: { closeWay: string }) => void
  onSwitchModule?: (cal: { type: string }) => void
}

const defaultProps = {
  type: 'custom',
  existList: [],
  defaultIcon: null,
  selectIcon: null,
  custom: false,
} as ExistRenderProps

export const ExistRender: FunctionComponent<
  Partial<ExistRenderProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'title' | 'onSelect'
    >
> = (props) => {
  const {
    children,
    type,
    existList,
    selectIcon,
    defaultIcon,
    custom,
    onSelect,
    onClose,
    onSwitchModule,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-address'
  const selectedExist = (item: AddressList) => {
    const copyExistAdd = existList as AddressList[]
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
    onSelect && onSelect(prevExistAdd, item, copyExistAdd)
  }

  const onSwitch = () => {
    onSwitchModule &&
      onSwitchModule({ type: type === 'exist' ? 'custom' : 'exist' })
  }

  useEffect(() => {}, [existList])

  return (
    <>
      <ul className={`${classPrefix}-exist`}>
        {existList.map((item: AddressList, index: number) => {
          return (
            <li
              className={`${classPrefix}-exist-item ${
                item.selectedAddress ? 'active' : ''
              }`}
              key={index}
              onClick={() => selectedExist(item)}
            >
              {item.selectedAddress ? selectIcon : defaultIcon}
              <div className={`${classPrefix}-exist-item-info`}>
                {item.name && item.phone && (
                  <>
                    <div>{item.name}</div>
                    <div>{item.phone}</div>
                  </>
                )}
                <div>
                  {item.provinceName +
                    item.cityName +
                    item.countyName +
                    item.townName +
                    item.addressDetail}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {custom && (
        <div className={`${classPrefix}-footer`} onClick={onSwitch}>
          <div className={`${classPrefix}-footer-btn`}>{custom}</div>
        </div>
      )}
    </>
  )
}
