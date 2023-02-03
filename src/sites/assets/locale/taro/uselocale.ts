import { useEffect, useState } from 'react'

const getLocale = () => {
  let locale = ''
  return locale
}

const useLocale = () => {
  const [locale, setLocale] = useState(getLocale())
  const handlePopState = () => {
    setLocale(getLocale())
  }
  useEffect(() => {
    // if(window.parent) {
    //   window.parent.addEventListener('popstate', handlePopState)
    //   return () => {
    //     window.parent.removeEventListener('popstate', handlePopState)
    //   }
    // }
  }, [])
  return [locale, setLocale]
}

export default useLocale
