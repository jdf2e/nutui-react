# Tabbar 标签栏

底部导航常用场景。导航背板左右各留 12px、内部四周留 4px，以 16px 圆角矩形和悬浮阴影承载内容；组件外层保持透明。

## 引入

```tsx
import { Tabbar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 徽标提示

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 只配图标

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 只配文字

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 首坑品牌+营销态

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义颜色+数量

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 再次点击当前项支持回调

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 固定底部与返顶

`fixed` 或 `safeArea` 开启时，底部安全区使用系统 `env(safe-area-inset-bottom)`。组件总高为 52px 加设备实际安全区，不固定为 69px 或 74px。

该示例沿用固定底部导航。示例页从外层 `ScrollView` 的 `onScroll` 读取 `event.detail.scrollTop` 并传入 `demo9`；滚动超过 160px（仅为演示阈值）且首页已选中时，首页图标切换为返顶图标。首次从其他项点击首页只切换选中，再次点击当前首页才通过同一 `ScrollView` 的 `scrollTop` 和 `scrollWithAnimation` 返顶，不使用页面级滚动 API。返顶由调用方组合 `icon(active)`、`onActiveClick` 和滚动状态实现，无新增 Tabbar 属性。标题“首页”是示例用语。

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### Agent 组合入口

通过 `agent` 传入 Taro `Image` 或自定义节点。组件只提供 52×52px 的定位容器，图片、外观和点击行为由调用方负责；Agent 不参与普通标签的索引，也不触发 `onSwitch`。示例使用设计稿 `1545:72` 导出的 132×132px 透明 PNG，图片居中覆盖源盒，包含阴影，点击只打印控制台日志。

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 灵动岛与 Agent 联动

`island` 是独立内容插槽，不占普通标签索引。`islandVariant` 的常规和大促外框分别为 131×44px、144×52px；示例内的图文、点击和展开状态由调用方提供。`islandExpanded` 隐藏普通标签选中托底；同时传入 Agent 时，Agent 外抽距离由 16px 变为 28px，导航背板同步移动。示例共 5 个坑位：灵动岛居中，左右各 2 个普通标签。窄屏仍需检查图文可读性。大促红包图取自设计稿；常规商品和运营活动图标仅为示意，正式业务图片或 GIF 由调用方提供。非零安全区下的大促底距、红色禁放区与目标端视觉仍待设计量尺确认。

Taro H5 组合需让每个普通标签的点击盒至少宽 44px。下表是按当前 H5 尺寸计算的普通标签最多项数（常规/大促岛；有 Agent 时分别列收起/展开），44px 是本次验收阈值，并非设计稿给出的最小宽度。超出时由调用方减少普通项或不显示 Agent/岛；组件不会自动降级。原生端需另行量测单位换算与点击区域。

| H5 视口宽度 | 无 Agent：常规/大促 | 有 Agent：常规收起/展开 | 有 Agent：大促收起/展开 |
| --- | --- | --- | --- |
| 375px | 4/4 | 4/4 | 3/4 |
| 320px | 3/3 | 2/3 | 2/2 |

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 毛玻璃材质

Taro H5 在浏览器支持 `backdrop-filter` 时，仅对 52px 高的导航背板使用 3px 模糊和 80% 明暗叠加色；不支持时使用 `--nutui-tabbar-background` 的实色。原生端将材质参数透传给对应 Taro `View`：iOS 默认使用 `gradientBlur`（0.5～0.8、90% 叠色）；设置 `iosMaterial="liquid-glass"` 后，iOS 26+ 使用参考 biz 悬浮容器的 `regular` 液态玻璃（浅色白色 45% 染色、明暗跟随系统），并保留渐变模糊参数作运行时降级；iOS 26 以下直接使用渐变模糊。Android 使用 50px `backdropFilter` 和 `overlayColor`，Harmony 使用 `blurScale: 0.2`、系统明暗模式与渐变蒙层。原生明暗色跟随系统主题。外层和 SafeArea 保持透明，页面背景应延伸到安全区；原生视觉效果仍需在具备相应 View 能力的目标运行时验收。

Android 模糊需要配对采样源：将页面内容放入带 `blurId="page-content"` 的原生 `View`，并向 Tabbar 传入相同值的 `materialTargetId="page-content"`。未传 `materialTargetId` 时背板使用明暗实色；H5 和其它端忽略该属性。下方示例在竖向彩色背景图上展示 Agent 与 Tabbar，随页面主题切换明暗；Android 原生端配对背景采样源，iOS 保持默认渐变模糊。液态玻璃仍可通过 `iosMaterial="liquid-glass"` 单独启用。

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

### 换肤背景与双状态图标

传入 `skinBackground`（Taro `View`/`Image`）后，背板使用业务实色、渐变或弱底纹资源，Taro H5 关闭整板 `backdrop-filter`，原生端不再传 iOS `gradientBlur`/`liquidGlass`、Android `targetId`/`overlayColor`/模糊或 Harmony `blurScale`/渐变材质参数。未传入时继续使用上述平台材质。背景节点不参与标签索引和点击，资源加载失败由业务准备替代资源。下方示例接入一套换肤素材：240×52px 背板图铺满 375px 画布下的 351×52px 背板，五项始终显示“文案”，第一、第五项默认态共用一张图片。

每项通过 `icon(active)` 返回带 `nut-tabbar-skin-icon` 类的 Taro `Image` 或包装 `View`，从 `normal/pressed` 两张透明 PNG 中选择；图片使用 `mode="aspectFit"`，标题仍由 `title` 渲染。192×195PX 原稿按高度 48px 等比缩放，切图盒距背板底部 7px，可见装饰上溢不得超过 3px。每套五项需五对图片，单图按设计要求控制在 50K 以内；平台资源路径和正式色值由业务提供。新图标高度/底距变量可覆盖，背板沿用 16px 圆角。

示例在选中人物图标下方单独叠放 120×120px 原稿的渐变底图，按 192×195px 图标画布同比例显示为 29.4×29.4px，距图标盒顶部 5.8px；默认选中托底设为透明，“文案”由独立标题节点渲染，不进入渐变图。图片直接使用业务提供的 HTTPS 链接；Taro 原生端需在目标环境验证图片域名可访问。

:::demo

<CodeBlock src='taro/demo13.tsx'></CodeBlock>

:::

## Tabbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的标签的索引值 | `number` | `0` |
| value | 选中的标签的索引值 | `number` | `-` |
| fixed | 是否固定在页面底部，为 true 时默认开启 safeArea | `boolean` | `false` |
| activeColor | icon激活的颜色 | `string` | `#0073ff` |
| inactiveColor | icon未激活的颜色 | `string` | `#7d7e80` |
| safeArea | 是否开启iphone系列全面屏底部安全区适配 | `boolean` | `false` |
| skinBackground | 换肤背板节点；传入后关闭默认整板模糊材质 | `ReactNode` | `-` |
| materialTargetId | Android 原生背板采样目标，须与背景 View 的 `blurId` 相同 | `string` | `-` |
| iosMaterial | iOS 背板材质；`liquid-glass` 仅 iOS 26+ 生效，旧版回退渐变模糊 | `gradient-blur` \| `liquid-glass` | `gradient-blur` |
| agent | 独立 Agent 入口内容，图片与点击由调用方提供 | `ReactNode` | `-` |
| island | 独立灵动岛内容，图文及点击由调用方提供 | `ReactNode` | `-` |
| islandVariant | 岛尺寸：常规 131×44px，大促 144×52px | `regular` \| `promotion` | `regular` |
| islandExpanded | 隐藏普通项选中托底并联动 Agent 位置 | `boolean` | `false` |
| onSwitch | 切换页签时触发事件 | `(value) => void` | `-` |

## Tabbar.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标签页的标题 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| icon | 自定义图标 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| value | 徽标中显示的内容，支持数字、字符和自定义内容 | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 徽标是否为小点 | `boolean` | `false` |
| top | 徽标的上下偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| right | 徽标的左右偏移量，支持单位设置，可设置为：5 等 | `number` | `0` |
| onActiveClick | 用于处理当元素处于焦点时，再次点击时可增加自定义事件。 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tabbar-height | 导航层高度 | `52px` |
| \--nutui-tabbar-agent-source-size | Agent 定位容器尺寸 | `52px` |
| \--nutui-tabbar-agent-gap | Agent 与导航背板间距 | `8px` |
| \--nutui-tabbar-agent-outset | Agent 向外侧抽缩距离 | `16px` |
| \--nutui-tabbar-agent-expanded-outset | 展开期间 Agent 外抽距离 | `28px` |
| \--nutui-tabbar-island-regular-width | 常规岛宽度 | `131px` |
| \--nutui-tabbar-island-regular-height | 常规岛高度 | `44px` |
| \--nutui-tabbar-island-promotion-width | 大促岛宽度 | `144px` |
| \--nutui-tabbar-island-promotion-height | 大促岛高度 | `52px` |
| \--nutui-tabbar-content-height | 内容层高度 | `44px` |
| \--nutui-tabbar-horizontal-padding | 导航层左右间距 | `12px` |
| \--nutui-tabbar-content-padding | 导航背板内边距 | `4px` |
| \--nutui-tabbar-background | 无模糊时的导航实色背景 | 浅色 `#FFFFFF`；暗色 `#14171A` |
| \--nutui-tabbar-material-tint | 模糊可用时的背板叠加色 | 浅色 `rgba(255, 255, 255, 0.8)`；暗色 `rgba(20, 23, 26, 0.8)` |
| \--nutui-tabbar-material-blur | H5/Taro H5 背板模糊半径 | `3PX` |
| \--nutui-tabbar-skin-icon-height | 换肤切图盒高度 | `48px` |
| \--nutui-tabbar-skin-icon-bottom | 切图盒距背板底边 | `7px` |
| \--nutui-tabbar-border-radius | 导航背板圆角 | `16px` |
| \--nutui-tabbar-active-background | 选中项背景 | `#F0F2F7` |
| \--nutui-tabbar-active-border-radius | 选中项圆角 | `12px` |
| \--nutui-tabbar-active-color | 选中颜色 | `$color-primary` |
| \--nutui-tabbar-inactive-color | 未选中颜色 | `$color-title` |
| \--nutui-tabbar-border-top | 上边框 | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | 下边框 | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | 导航背板阴影 | `0 0 6px 0 rgba(0, 0, 0, 0.1)` |
| \--nutui-tabbar-text-font-size | 标题字体大小 | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | 无图标时标题字体大小 | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | 无图标时标题字体粗细 | `$font-weight` |
| \--nutui-tabbar-text-line-height | 字体行高 | `initial` |
| \--nutui-tabbar-text-margin-top | 标题上外边距 | `4px` |

<Contribution name="Tabbar" />
