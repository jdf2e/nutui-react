import { useEffect, useState } from 'react'
import config from '@/sites/config/env'

const getLocale = () => {
  let locale = ''
  const matched = window.parent.location.href.match(/#\/([a-z-]+)/i)
  if (matched) {
    ;[, locale] = matched
    if (config.locales.indexOf(locale) === -1) locale = ''
  }
  return locale
}

const useLocale = () => {
  const [locale, setLocale] = useState(getLocale())
  const handlePopState = () => {
    setLocale(getLocale())
  }
  useEffect(() => {
    window.parent.addEventListener('popstate', handlePopState)
    return () => {
      window.parent.removeEventListener('popstate', handlePopState)
    }
  }, [])
  return [locale, setLocale]
}

export default useLocale
