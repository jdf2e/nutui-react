import { View } from '@tarojs/components'
import React, { FunctionComponent } from 'react'

export interface LayoutProps {}
export const Layout: FunctionComponent<
  Partial<LayoutProps> & React.HTMLAttributes<HTMLDivElement>
> = () => {
  return <View className="nut-layout">Layout</View>
}

Layout.displayName = 'NutLayout'
