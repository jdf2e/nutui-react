// @ts-nocheck

import { TaroElement } from './element'

import type { MovableAreaProps } from '../../../components/types'

@Observed
export class TaroMovableAreaElement extends TaroElement<MovableAreaProps> {
  constructor() {
    super('MovableArea')
  }
}
