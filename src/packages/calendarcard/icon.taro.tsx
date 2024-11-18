import React, { FC } from 'react'
import { Image, View } from '@tarojs/components'

let left =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNi42MDUgOS40OWEuNzcxLjc3MSAwIDAgMSAwLS45OGwzLjYtNC4zNzJhLjc3MS43NzEgMCAwIDEgMS4xOS45ODFMOC4yIDlsMy4xOTcgMy44ODFhLjc3MS43NzEgMCAxIDEtMS4xOTEuOThsLTMuNi00LjM3eiIvPjwvc3ZnPg=='

let right =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTEuMzk2IDkuNDlhLjc3MS43NzEgMCAwIDAgMC0uOThsLTMuNi00LjM3MmEuNzcxLjc3MSAwIDAgMC0xLjE5MS45ODFMOS44IDlsLTMuMTk2IDMuODgxYS43NzEuNzcxIDAgMCAwIDEuMTkuOThsMy42LTQuMzd6Ii8+PC9zdmc+'

let doubleLeft =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNMTMuODUzIDQuMDI2YS43NzEuNzcxIDAgMCAxIC4xMiAxLjA4NUwxMC44NjQgOWwzLjExIDMuODg5YS43NzEuNzcxIDAgMSAxLTEuMjA0Ljk2M2wtMy40OTgtNC4zN2EuNzcxLjc3MSAwIDAgMSAwLS45NjRsMy40OTctNC4zNzFhLjc3MS43NzEgMCAwIDEgMS4wODQtLjEyem0tNS4yNDUgMGEuNzcxLjc3MSAwIDAgMSAuMTIgMS4wODVMNS42MTcgOWwzLjExMSAzLjg4OWEuNzcxLjc3MSAwIDAgMS0xLjIwNS45NjNsLTMuNDk3LTQuMzdhLjc3MS43NzEgMCAwIDEgMC0uOTY0bDMuNDk3LTQuMzcxYS43NzEuNzcxIDAgMCAxIDEuMDg1LS4xMnoiLz48L3N2Zz4='

let doubleRight =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNC4xNDcgMTMuOTc0YS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUw3LjEzNiA5IDQuMDI4IDUuMTFhLjc3MS43NzEgMCAxIDEgMS4yMDQtLjk2M2wzLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMSAwIC45NjRsLTMuNDk3IDQuMzcxYS43NzEuNzcxIDAgMCAxLTEuMDg0LjEyem01LjI0NSAwYS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUwxMi4zODMgOSA5LjI3MiA1LjExYS43NzEuNzcxIDAgMSAxIDEuMjA1LS45NjNsMy40OTcgNC4zNzFhLjc3MS43NzEgMCAwIDEgMCAuOTY0bC0zLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMS0xLjA4NS4xMnoiLz48L3N2Zz4='

interface IconProps {
  url: string
}

if (process.env.TARO_ENV === 'jdharmony_cpp') {
  left =
    'https://img11.360buyimg.com/imagetools/jfs/t1/187031/35/51586/196/6731c464F9b9f8f00/5506e32bf15e29dc.png'
  right =
    'https://img12.360buyimg.com/imagetools/jfs/t1/181006/25/51824/185/6731c452F9e252322/7493147dd6b4a88d.png'
  doubleLeft =
    'https://img13.360buyimg.com/imagetools/jfs/t1/221244/29/45876/259/6731c6bdF515df0a2/624e8eee3c8494a2.png'
  doubleRight =
    'https://img11.360buyimg.com/imagetools/jfs/t1/238382/25/24000/235/6731c6bdF0153286c/4a57e60b6e889af3.png'
}

const Icon: FC<IconProps> = ({ url }) => {
  const style = {
    background: `url('${url}') no-repeat center`,
    backgroundSize: '100% 100%',
    width: 18,
    height: 18,
  }
  if (process.env.TARO_ENV === 'jdharmony_cpp') {
    return <Image src={url} style={style} />
  }
  return <View style={style} />
}

export const ArrowLeft: FC = () => <Icon url={left} />

export const ArrowRight: FC = () => <Icon url={right} />

export const DoubleLeft: FC = () => <Icon url={doubleLeft} />

export const DoubleRight: FC = () => <Icon url={doubleRight} />
