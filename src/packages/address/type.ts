export interface RegionData {
  name?: string
  [key: string]: any
}

export interface ChangeCallBack {
  next: string
  value: string | RegionData
  custom: string
}
export interface CloseCallBackData extends SelectedRegionObj {
  addressIdStr: string
  addressStr: string
}

export interface CloseCallBack {
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
export interface NextListObj {
  next: string
  value: string | RegionData
  custom: string
  selectedRegion?: SelectedRegionObj
}
// 已选地址
export interface SelectedRegionObj {
  province: RegionData
  city: RegionData
  country: RegionData
  town: RegionData
}
