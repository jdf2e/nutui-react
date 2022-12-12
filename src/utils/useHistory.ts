import * as reactRouterDom from 'react-router-dom'

const fullClone = {
  ...reactRouterDom,
} as typeof reactRouterDom & {
  useHistory?: any
  useNavigate: any
}

export const useHistory = () => {
  if (fullClone.useHistory) {
    return reactRouterDom.useHistory()
  }
  const navigate = fullClone.useNavigate()
  return {
    push(url: string) {
      navigate(url)
    },
    replace(url: string) {
      navigate(url, { replace: true })
    },
  }
}
