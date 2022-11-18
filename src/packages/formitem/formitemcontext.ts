import { createContext } from 'react'

interface ConfigConsumerProps {
  [propName: string]: any
}
export const FormItemContext = createContext<ConfigConsumerProps>({})
