import React from 'react'
import { CascaderOption, CascaderOptionKey, CascaderValue } from '@/types'

export interface RegionData {
  name?: string

  [key: string]: any
}

export interface ChangeData {
  next: string
  value: string | RegionData
  custom: string
}

export interface CloseCallBackData extends Regions {
  addressIdStr: string
  addressStr: string
}

export type AddressRef = {
  open: () => void
  close: () => void
}

export interface ResultData {
  data: CloseCallBackData | AddressList
  type: string
}

export interface AddressList {
  id?: string | number
  provinceName: string
  cityName: string
  countyName: string
  townName: string
  addressDetail: string
  selectedAddress: boolean
  name?: string
  phone?: string
}

export interface CurrentData {
  next: string
  value: string | RegionData
  custom: string
  selectedRegion?: Regions
}

export interface Regions {
  province: RegionData
  city: RegionData
  county: RegionData
  town: RegionData
}

export interface BaseAddress {
  visible: boolean
  defaultVisible: boolean
  value?: CascaderValue
  defaultValue?: CascaderValue
  type: string
  options: CascaderOption[]
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  custom: boolean | string
  existList: AddressList[]
  height: string | number
  defaultIcon: React.ReactNode
  selectIcon: React.ReactNode
  backIcon: React.ReactNode
  onSwitch?: (data: { type: string }) => void
  onExistSelect?: (data: AddressList) => void
}
