// @ts-nocheck
import { TaroElement } from './element'

import type { TextProps } from '../../../components/types'

@Observed
export class TaroTextElement extends TaroElement<TextProps> {
  constructor() {
    super('Text')
  }
}
