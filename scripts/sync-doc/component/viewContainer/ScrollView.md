# ScrollView 滚动视图

用于创建可滚动区域的容器。

> Tips：H5 中 ScrollView 组件是通过一个高度（或宽度）固定的容器内部滚动来实现的，因此务必正确的设置容器的高度。例如: 如果 ScrollView 的高度将 body 撑开，就会同时存在两个滚动条（body 下的滚动条，以及 ScrollView 的滚动条）。
> 微信小程序 中 ScrollView 组件如果设置 scrollX 横向滚动时，并且子元素为多个时（单个子元素时设置固定宽度则可以正常横向滚动），需要通过 WXSS 设置 `white-space: nowrap` 来保证元素不换行，并对 ScrollView 内部元素设置 `display: inline-block` 来使其能够横向滚动。

## 类型

```tsx
ComponentType<ScrollViewProps>
```

## 示例代码

```tsx
export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }

  render() {
    const scrollStyle = {
      height: '150px',
    }
    const scrollTop = 0
    const Threshold = 20
    const vStyleA = {
      height: '150px',
      backgroundColor: 'rgb(26, 173, 25)',
    }
    const vStyleB = {
      height: '150px',
      backgroundColor: 'rgb(39,130,215)',
    }
    const vStyleC = {
      height: '150px',
      backgroundColor: 'rgb(241,241,241)',
      color: '#333',
    }
    return (
      <ScrollView
        className='scrollview'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={scrollStyle}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}>
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
      </ScrollView>
    )
  }
}
```

## ScrollViewProps

### 类型

```tsx
typeof ScrollViewProps
```

| 属性                             | 类型                                         | 默认值      | 必填 | 说明                                                                                                                                                                                                                                    |
| :------------------------------- | :------------------------------------------- | :---------- | :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scrollX                          | `boolean`                                    | `false`     | 否   | 允许横向滚动                                                                                                                                                                                                                            |
| scrollY                          | `boolean`                                    | `false`     | 否   | 允许纵向滚动                                                                                                                                                                                                                            |
| upperThreshold                   | `number`                                     | `50`        | 否   | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件                                                                                                                                                                                   |
| lowerThreshold                   | `number`                                     | `50`        | 否   | 距底部/右边多远时（单位 px），触发 scrolltolower 事件                                                                                                                                                                                   |
| scrollTop                        | `number`                                     |             | 否   | 设置竖向滚动条位置                                                                                                                                                                                                                      |
| scrollLeft                       | `number`                                     |             | 否   | 设置横向滚动条位置                                                                                                                                                                                                                      |
| scrollIntoView                   | `string`                                     |             | 否   | 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素                                                                                                                                                    |
| scrollWithAnimation              | `boolean`                                    | `false`     | 否   | 在设置滚动条位置时使用动画过渡                                                                                                                                                                                                          |
| enableBackToTop                  | `boolean`                                    | `false`     | 否   | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向                                                                                                                                                                        |
| enableFlex                       | `boolean`                                    | `false`     | 否   | 启用 flexbox 布局。开启后，当前节点声明了 `display: flex` 就会成为 flex container，并作用于其孩子节点。                                                                                                                                 |
| scrollAnchoring                  | `boolean`                                    | `false`     | 否   | 开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS `overflow-anchor` 属性。                                                                                                                |
| refresherEnabled                 | `boolean`                                    | `false`     | 否   | 开启自定义下拉刷新                                                                                                                                                                                                                      |
| refresherThreshold               | `number`                                     | `45`        | 否   | 设置自定义下拉刷新阈值                                                                                                                                                                                                                  |
| refresherDefaultStyle            | `string`                                     | `'black'`   | 否   | 设置自定义下拉刷新默认样式，支持设置 `black or white or none`， none 表示不使用默认样式                                                                                                                                                 |
| refresherBackground              | `string`                                     | `'#FFF'`    | 否   | 设置自定义下拉刷新区域背景颜色                                                                                                                                                                                                          |
| refresherTriggered               | `boolean`                                    | `false`     | 否   | 设置当前下拉刷新状态，true 表示下拉刷新已经被触发，false 表示下拉刷新未被触发                                                                                                                                                           |
| enhanced                         | `boolean`                                    | `false`     | 否   | 启用 scroll-view 增强特性                                                                                                                                                                                                               |
| bounces                          | `boolean`                                    | `true`      | 否   | iOS 下 scroll-view 边界弹性控制 (同时开启 enhanced 属性后生效)                                                                                                                                                                          |
| showScrollbar                    | `boolean`                                    | `true`      | 否   | 滚动条显隐控制 (同时开启 enhanced 属性后生效)                                                                                                                                                                                           |
| pagingEnabled                    | `boolean`                                    | `false`     | 否   | 分页滑动效果 (同时开启 enhanced 属性后生效)                                                                                                                                                                                             |
| fastDeceleration                 | `boolean`                                    | `false`     | 否   | boolean false 滑动减速速率控制 (同时开启 enhanced 属性后生效)                                                                                                                                                                           |
| scrollAnimationDuration          | `string`                                     |             | 否   | 当 scroll-with-animation 设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位 ms。                                                                                                                             |
| trapScroll                       | `string`                                     | `false`     | 否   | 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动。                                                                                                                                             |
| disableLowerScroll               | `string`                                     |             | 否   | 发生滚动前，对滚动方向进行判断，当方向是顶部/左边时，如果值为  always  将始终禁止滚动，如果值为  out-of-bounds 且当前已经滚动到顶部/左边，禁止滚动。                                                                                    |
| disableUpperScroll               | `string`                                     |             | 否   | 发生滚动前，对滚动方向进行判断，当方向是底部/右边时，如果值为  always  将始终禁止滚动，如果值为  out-of-bounds 且当前已经滚动到底部/右边，禁止滚动。                                                                                    |
| ariaLabel                        | `string`                                     |             | 否   | 无障碍访问，（属性）元素的额外描述                                                                                                                                                                                                      |
| enablePassive                    | `boolean`                                    | `false`     | 否   | 开启 passive 特性，能优化一定的滚动性能                                                                                                                                                                                                 |
| type                             | "list" or "custom"                           | `'list'`    | 否   | 渲染模式<br />list - 列表模式。只会渲染在屏节点，会根据直接子节点是否在屏来按需渲染，若只有一个直接子节点则性能会退化<br />custom - 自定义模式。只会渲染在屏节点，子节点可以是 sticky-section list-view grid-view 等组件                |
| reverse                          | `boolean`                                    | `false`     | 否   | 是否反向滚动。一般初始滚动位置是在顶部，反向滚动则是在底部。                                                                                                                                                                            |
| clip                             | `boolean`                                    | `true`      | 否   | 是否对溢出进行裁剪，默认开启                                                                                                                                                                                                            |
| cacheExtent                      | `number`                                     |             | 否   | 指定视口外渲染区域的距离，默认情况下视口外节点不渲染。指定 cache-extent 可优化滚动体验和加载速度，但会提高内存占用且影响首屏速度，可按需启用。                                                                                          |
| minDragDistance                  | `number`                                     | `18`        | 否   | 指定 scroll-view 触发滚动的最小拖动距离。仅在 scroll-view 和其他组件存在手势冲突时使用，可通过调整该属性使得滚动更加灵敏。                                                                                                              |
| padding                          | `[number, number, number, number]`           | `[0,0,0,0]` | 否   | 长度为 4 的数组，按 top、right、bottom、left 顺序指定内边距                                                                                                                                                                             |
| scrollIntoViewWithinExtent       | `boolean`                                    | `false`     | 否   | 只 scroll-into-view 到 cacheExtent 以内的目标节点，性能更佳                                                                                                                                                                             |
| scrollIntoViewAlignment          | "start" or "center" or "end" or "nearest"    | `'start'`   | 否   | 指定 scroll-into-view 目标节点在视口内的位置。<br />start - 目标节点显示在视口开始处<br />center - 目标节点显示在视口中间<br />end - 目标节点显示在视口结束处<br />nearest - 目标节点在就近的视口边缘显示，若节点已在视口内则不触发滚动 |
| refresherTwoLevelEnabled         | `boolean`                                    | `false`     | 否   | 开启下拉二级能力                                                                                                                                                                                                                        |
| refresherTwoLevelTriggered       | `boolean`                                    | `false`     | 否   | 设置打开/关闭二级                                                                                                                                                                                                                       |
| refresherTwoLevelThreshold       | `number`                                     | `150`       | 否   | 下拉二级阈值                                                                                                                                                                                                                            |
| refresherTwoLevelCloseThreshold  | `number`                                     | `80`        | 否   | 滑动返回时关闭二级的阈值                                                                                                                                                                                                                |
| refresherTwoLevelScrollEnabled   | `boolean`                                    | `false`     | 否   | 处于二级状态时是否可滑动                                                                                                                                                                                                                |
| refresherBallisticRefreshEnabled | `boolean`                                    | `false`     | 否   | 惯性滚动是否触发下拉刷新                                                                                                                                                                                                                |
| refresherTwoLevelPinned          | `boolean`                                    | `false`     | 否   | 即将打开二级时否定住                                                                                                                                                                                                                    |
| onScrollToUpper                  | `CommonEventFunction`                        |             | 否   | 滚动到顶部/左边，会触发 scrolltoupper 事件                                                                                                                                                                                              |
| onScrollToLower                  | `CommonEventFunction`                        |             | 否   | 滚动到底部/右边，会触发 scrolltolower 事件                                                                                                                                                                                              |
| onScroll                         | `BaseEventOrigFunction<onScrollDetail>`      |             | 否   | 滚动时触发                                                                                                                                                                                                                              |
| onScrollStart                    | `BaseEventOrigFunction<onScrollDetail>`      |             | 否   | 滚动开始事件                                                                                                                                                                                                                            |
| onScrollEnd                      | `BaseEventOrigFunction<onScrollDetail>`      |             | 否   | 滚动结束事件                                                                                                                                                                                                                            |
| onRefresherPulling               | `CommonEventFunction`                        |             | 否   | 自定义下拉刷新控件被下拉                                                                                                                                                                                                                |
| onRefresherRefresh               | `CommonEventFunction`                        |             | 否   | 自定义下拉刷新被触发                                                                                                                                                                                                                    |
| onRefresherRestore               | `CommonEventFunction`                        |             | 否   | 自定义下拉刷新被复位                                                                                                                                                                                                                    |
| onRefresherAbort                 | `CommonEventFunction`                        |             | 否   | 自定义下拉刷新被中止                                                                                                                                                                                                                    |
| onRefresherWillRefresh           | `CommonEventFunction`                        |             | 否   | 自定义下拉刷新即将触发刷新（拖动超过 refresher-threshold 时）的事件                                                                                                                                                                     |
| onRefresherStatusChange          | `CommonEventFunction<RefresherStatusChange>` |             | 否   | 下拉刷新状态回调                                                                                                                                                                                                                        |
| onDragStart                      | `CommonEventFunction<onDragDetail>`          |             | 否   | 滑动开始事件 (同时开启 enhanced 属性后生效)                                                                                                                                                                                             |
| onDragging                       | `CommonEventFunction<onDragDetail>`          |             | 否   | 滑动事件 (同时开启 enhanced 属性后生效)                                                                                                                                                                                                 |
| onDragEnd                        | `CommonEventFunction<onDragDetail>`          |             | 否   | 滑动结束事件 (同时开启 enhanced 属性后生效)                                                                                                                                                                                             |
| onTouchStart                     | `CommonEventFunction`                        |             | 否   | 触摸动作开始。                                                                                                                                                                                                                          |
| onTouchMove                      | `CommonEventFunction`                        |             | 否   | 触摸后移动。                                                                                                                                                                                                                            |
| onTouchEnd                       | `CommonEventFunction`                        |             | 否   | 触摸动作结束。                                                                                                                                                                                                                          |
| onTouchCancel                    | `CommonEventFunction`                        |             | 否   | 触摸动作被打断，如来电提醒、弹窗。                                                                                                                                                                                                      |

| 属性          | 类型                   |
| :------------ | :--------------------- |
| RefreshStatus | `typeof RefreshStatus` |

### onScrollDetail

| 属性         | 类型      | 必填 | 说明           |
| :----------- | :-------- | :--- | :------------- |
| scrollLeft   | `number`  | 是   | 横向滚动条位置 |
| scrollTop    | `number`  | 是   | 竖向滚动条位置 |
| scrollHeight | `number`  | 是   | 滚动条高度     |
| scrollWidth  | `number`  | 是   | 滚动条宽度     |
| deltaX       | `number`  | 是   |                |
| deltaY       | `number`  | 是   |                |
| isDrag       | `boolean` | 否   |                |

### onDragDetail

| 属性       | 类型     | 说明           |
| :--------- | :------- | :------------- |
| scrollLeft | `number` | 横向滚动条位置 |
| scrollTop  | `number` | 竖向滚动条位置 |
| velocity   | `number` | 滚动速度       |

### RefresherStatusChange

| 属性   | 类型            |
| :----- | :-------------- |
| status | `RefreshStatus` |
| dy     | `number`        |

<!-- 
## Props 与 API 支持度

| 属性 | H5  | Harmony | React Native | 微信小程序 | 京东小程序 |
| :--: | :-: | :-----: | :----------: | :--------: | :--------: |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
-->
