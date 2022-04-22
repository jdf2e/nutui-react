import React, { useEffect, useState } from 'react'
import useLocale from '@/sites/assets/locale/uselocale'

interface LanguagesPackage {
  [key: string]: {
    [key: string]: string
  }
}
interface LanguagePackage {
  [key: string]: string
}

export const useTranslate = (languagesPackage: LanguagesPackage) => {
  const [locale] = useLocale()
  const [translated, setLanguagesPackage] = useState<LanguagePackage>({})
  useEffect(() => {
    if (languagesPackage) setLanguagesPackage(languagesPackage[locale])
  }, [])
  return [translated]
}
