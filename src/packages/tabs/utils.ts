import { PositionX } from '@/types'
import { calcByProfile } from '@/utils/scale-f'

/**
 * 卡片模式下激活卡片左右外边距之和(设计稿基准值:24px * 2),
 * 对应 tabs.scss 中激活项的 `margin: 0 24px`。
 * boundingClientRect/offsetWidth 不含外边距,估算可滑动性时需按此回补。
 */
export const CARD_ACTIVE_MARGIN_TOTAL = 48

/** 按当前缩放换算激活卡片预留的总外边距,与 SCSS 的 scale-px 共用同一缩放系数 */
export const getCardActiveMarginTotal = () =>
  calcByProfile(CARD_ACTIVE_MARGIN_TOTAL)

/**
 * 内容是否超出容器而需要横向滑动。
 * H5 与 Taro 共用同一判定口径,避免临界宽度下两端得出不同结论、出现一端贴边一端留肩。
 *
 * @param contentWidth 内容总宽度(各项宽度之和 + 激活卡片预留外边距)
 * @param containerWidth 标题容器可视宽度
 */
export const isContentScrollable = (
  contentWidth: number,
  containerWidth: number
) => contentWidth - containerWidth > 1

export interface CardFlushSides {
  left: boolean
  right: boolean
}

const NO_FLUSH: CardFlushSides = { left: false, right: false }

/**
 * 计算卡片模式下激活卡片应贴靠的物理边。
 *
 * 贴边侧需取消该侧外边距并隐藏对应肩部装饰(另一侧保留肩部与留白)。
 * 样式层只按 `nut-tabs-titles-item-active--flush-left/right` 两个修饰类渲染,
 * 可滑动性与 RTL 镜像关系全部在此处收敛,避免 SCSS 里四套选择器各自维护。
 *
 * @param index 当前项在标题列表中的下标
 * @param count 标题总数
 * @param options scrollable 是否可横向滑动,rtl 是否书写方向为右到左,align 对齐方式
 */
export const getCardFlushSides = (
  index: number,
  count: number,
  options: { scrollable: boolean; rtl: boolean; align?: PositionX }
): CardFlushSides => {
  if (count <= 0 || index < 0 || index >= count) return NO_FLUSH

  // 起始边/结束边:书写方向决定其在物理方向上的映射(RTL 呈镜像)
  const startSide: PositionX = options.rtl ? 'right' : 'left'
  const endSide: PositionX = options.rtl ? 'left' : 'right'
  const isFirst = index === 0
  const isLast = index === count - 1

  // 内容可滑动时,DOM 首/末项分别贴住起始/结束边
  if (options.scrollable) {
    return {
      left: (isFirst && startSide === 'left') || (isLast && endSide === 'left'),
      right:
        (isFirst && startSide === 'right') || (isLast && endSide === 'right'),
    }
  }

  // 不可滑动时(仅在设置了 align 时出现),内容整体靠向 align 指定的一侧,
  // 只有贴靠该侧的那一项才是贴边项
  const packedSide = options.align === 'right' ? endSide : startSide
  const packedItem = packedSide === startSide ? isFirst : isLast

  return {
    left: packedItem && packedSide === 'left',
    right: packedItem && packedSide === 'right',
  }
}
