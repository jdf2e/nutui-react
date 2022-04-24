import React, { useEffect, useState } from 'react'
import useLocale from '@/sites/assets/locale/uselocale'
import { BaseLang } from '@/locales/base'

type Keys = keyof BaseLang
interface LanguagesPackage<A = {}> {
  [key: string]: {
    [k in Keys]?: string
  } &
    A
}

export const useTranslate = <T>(languagesPackage: LanguagesPackage<T>) => {
  const [locale] = useLocale()
  const [translated, setLanguagesPackage] = useState<BaseLang & T>({} as any)
  useEffect(() => {
    if (languagesPackage) {
      // @ts-ignore
      setLanguagesPackage(languagesPackage[locale])
    }
  }, [])
  return [translated]
}
