// @ts-nocheck

import { TaroElement } from './element'

import type { ProgressProps } from '../../../components/types'

@Observed
export class TaroProgressElement extends TaroElement<ProgressProps> {
  constructor() {
    super('Progress')
  }
}
