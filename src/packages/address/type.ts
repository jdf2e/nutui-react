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
export interface NextList {
  next: string
  value: string | RegionData
  custom: string
  selectedRegion?: Regions
}
// 已选地址
export interface Regions {
  province: RegionData
  city: RegionData
  country: RegionData
  town: RegionData
}
