import { BaseConfigProvider } from './base'
import { Locales } from '../../base/locales'

export interface TaroConfigProviderProps<T extends Partial<Locales>>
  extends BaseConfigProvider<T> {}
