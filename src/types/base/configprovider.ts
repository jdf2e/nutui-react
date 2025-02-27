import { BaseProps } from '@/types/base/baseprops'
import { BaseLang, PageDirection } from './locales'

export interface ConfigProviderProps extends BaseProps {
  locale: BaseLang
  direction: PageDirection
  theme: Record<string, string>
}
