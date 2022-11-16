import { createContext } from 'react'

interface ConfigConsumerProps {
  [propName: string]: any
}
export const FormFieldContext = createContext<ConfigConsumerProps>({})
