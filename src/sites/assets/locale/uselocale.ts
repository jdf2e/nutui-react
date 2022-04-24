import { useEffect, useState } from 'react'
const getLocale = () => {
  let locale = 'en-US'
  const matched = window.location.href.match(/#\/([a-z-]+)\//i)
  console.log(window.location.href)
  if (matched) {
    ;[, locale] = matched
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
