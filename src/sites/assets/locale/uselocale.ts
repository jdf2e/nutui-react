import { useEffect, useState } from 'react'
import config from '@/sites/config/env'

export const getLocale = () => {
  let locale = 'zh-CN'
  try {
    const matched = window.parent.location.href.match(/#\/([a-z-]+)/i)
    if (matched) {
      ;[, locale] = matched
      if (config.locales.indexOf(locale) === -1) locale = 'zh-CN'
    }
  } catch (e) {}

  return locale
}

const useLocale = (): [string, any] => {
  const [locale, setLocale] = useState<string>(getLocale())
  const handlePopState = () => {
    setLocale(getLocale())
  }
  useEffect(() => {
    try {
      window.parent.addEventListener('popstate', handlePopState)
    } catch (e) {}
    return () => {
      try {
        window.parent.removeEventListener('popstate', handlePopState)
      } catch (e) {}
    }
  }, [])
  return [locale, setLocale]
}

export default useLocale
