import commonStyleModify from '../plugin-platform-harmony-ets/dist/components-harmony-ets/style'

import type { TaroOtherElement, TaroAny } from '../runtime'

@Reusable
@Component
export struct TaroWaterFlowView {
  @Builder customBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroAny, layer?: number) => void = this.customBuilder
  @BuilderParam createChildItem: (node: TaroAny, fn: (node: TaroAny) => void) => void
  @ObjectLink node: TaroOtherElement
  @State overwriteStyle: Record<string, TaroAny> = {}

  aboutToAppear(): void {
    if (this.node) {
      this.node._instance = this
    }
  }

  aboutToReuse(params: TaroAny): void {
    // this.node = params.node;
  }

  build() {
    FlowItem() {
      Stack() {
        this.createLazyChildren(this.node, 0)
      }
    }
    .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
  }
}
