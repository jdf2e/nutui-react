import { BaseProps } from '../../base/props'
import { Locales, PageDirection } from '../../base/locales'

export interface BaseConfigProvider<T extends Partial<Locales>>
  extends BaseProps {
  locale: T
  direction: PageDirection
  theme?: Record<string, string>
}
