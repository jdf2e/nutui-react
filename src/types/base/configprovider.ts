import { BaseProps } from './baseprops'
import { BaseLang, PageDirection } from './locales'

export interface BaseConfigProvider extends BaseProps {
  locale: BaseLang
  direction: PageDirection
  theme: Record<string, string>
}
