import { BaseProps } from '../../base/props'
import { BaseLang, PageDirection } from '../../base/locales'

export interface BaseConfigProvider extends BaseProps {
  locale: BaseLang
  direction: PageDirection
  theme: Record<string, string>
}
