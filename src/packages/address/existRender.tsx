import React, { FunctionComponent, ReactNode } from 'react'
import { AddressList } from './type'

export interface ExistRenderProps {
  type: string
  existList: AddressList[] | []
  defaultIcon: ReactNode
  selectIcon: ReactNode
  custom: boolean | string
  onSelect?: (item: AddressList) => void
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
    existList.forEach((list: AddressList, index) => {
      ;(list as AddressList).selectedAddress = false
    })

    item.selectedAddress = true
    onSelect && onSelect(item)
  }

  const onSwitch = () => {
    onSwitchModule &&
      onSwitchModule({ type: type === 'exist' ? 'custom' : 'exist' })
  }

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
