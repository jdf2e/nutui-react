import React, { ReactNode } from 'react'
import { harmony } from './platform-taro'

function addColorForHarmony(maybeElement: ReactNode, color: string) {
  if (React.isValidElement(maybeElement) && harmony()) {
    return React.cloneElement<any>(maybeElement, {
      color,
    })
  }
  return maybeElement
}

export default addColorForHarmony
