import { View } from '@tarojs/components'
import React, { FunctionComponent } from 'react'

export interface LayoutProps {}
const defaultProps = {} as LayoutProps
export const Layout: FunctionComponent<
  Partial<LayoutProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <View className="nut-layout">Layout</View>
}

Layout.displayName = 'NutLayout'
