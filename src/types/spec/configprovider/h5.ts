import { BaseConfigProvider } from './base'
import { Locales } from '../../base/locales'

export interface WebConfigProviderProps<T extends Partial<Locales>>
  extends BaseConfigProvider<T> {}
