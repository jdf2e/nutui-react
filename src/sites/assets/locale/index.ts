import React, { useEffect, useState } from 'react'
import useLocale from './uselocale'
import { BaseLang } from '../../../locales/base'

type Keys = keyof BaseLang
interface LanguagesPackage<A = {}> {
  [key: string]: {
    [k in Keys]?: string
  } & A
}

export const useTranslate = <T>(languagesPackage: LanguagesPackage<T>) => {
  const [locale] = useLocale()
  const [translated, setLanguagesPackage] = useState<BaseLang & T>(
    languagesPackage[locale || 'zh-CN'] as any
  )
  return [translated]
}
