import React, { FunctionComponent } from 'react'

import { useConfig } from '@/packages/configprovider'

export interface StickyProps {}
const defaultProps = {} as StickyProps
export const Sticky: FunctionComponent<
  Partial<StickyProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-sticky">Sticky</div>
}

Sticky.defaultProps = defaultProps
Sticky.displayName = 'NutSticky'
