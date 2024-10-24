import React, { FunctionComponent } from 'react'

export interface LayoutProps {}
export const Layout: FunctionComponent<
  Partial<LayoutProps> & React.HTMLAttributes<HTMLDivElement>
> = () => {
  return <div className="nut-layout">Layout</div>
}

Layout.displayName = 'NutLayout'
