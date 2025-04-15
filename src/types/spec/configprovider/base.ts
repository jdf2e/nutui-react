import { BaseProps } from '../../base/props'
import { Locales, PageDirection } from '../../base/locales'

export interface BaseConfigProvider<T = Locales> extends BaseProps {
  locale: T
  direction: PageDirection
  theme?: Record<string, string>
}
