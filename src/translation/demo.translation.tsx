import React from 'react'
import { BaseLang } from '../locales/base'
import { useTranslate } from '../sites/assets/locale'
import translation from './translation'
// HOC
export function withTranslation(C: React.ComponentType<any>) {
  return function WithTranslation(props: any) {
    const [t] = useTranslate(translation)

    return <C {...props} t={t} />
  }
}
// type of t
export type tType = BaseLang & { [key: string]: string }
export type propsType = {
  t: tType
}
