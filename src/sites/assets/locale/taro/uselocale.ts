import { useState } from 'react'

const getLocale = () => {
  let locale = ''
  return locale
}

const useLocale = (): [string, any] => {
  const [locale, setLocale] = useState(getLocale())
  return [locale, setLocale]
}

export default useLocale
