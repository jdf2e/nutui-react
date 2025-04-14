import { BaseConfigProvider } from './base'
import { Locales } from '../../base/locales'

export interface TaroConfigProviderProps<T extends Locales>
  extends BaseConfigProvider<T> {}
