import React from 'react'

export const getIcon = (icon: React.ReactNode) => {
  return React.isValidElement(icon)
    ? React.cloneElement(icon, {
        // @ts-ignore
        className: 'nut-icon',
      })
    : icon
}
