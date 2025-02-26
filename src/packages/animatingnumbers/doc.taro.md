# AnimatingNumbers 数字动画

数字动画集合

## 引入

```tsx
import { AnimatingNumbers } from '@nutui/nutui-react-taro'
```

## 示例代码

### AnimatingNumbers.CountUp - 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### AnimatingNumbers.CountUp - 自定义样式，动态修改数据（需要指定最大位数）

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

## AnimatingNumbers

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| length | 设置最大展示长度，数值位数不够，数值前面按位补 0 | `number` | `0` |
| value | 结束值,必填项 | `string` | `number` |
| delay | 等待动画执行时间，单位 ms | `number` | `300` |
| duration | 动画执行时间，单位 s | `number` | `1` |
| thousands | 是否有千位分隔符 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-countup-width | 每个数字的宽度 | `auto` |
| \--nutui-countup-height | 数字高度 | `32px` |
| \--nutui-countup-base-size | 字号 | `18px` |
| \--nutui-countup-border-radius | 每个数字的边框圆角 | `4px` |
| \--nutui-countup-lr-margin | 每个数字的margin | `0` |
| \--nutui-countup-bg-color | 每个数字块的背景色 | `inherit` |
| \--nutui-countup-color | 每个数字块的字色 | `$color-title` |
| \--nutui-countup-separator-color | 分隔符的字体颜色 | `$color-title` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAnimatingNumbers)

### Component Logs

- 🐛 usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize ([#2628](https://github.com/jdf2e/nutui-react/pull/2628)) `v2.6.22`
- 🐛 fix(animatingnumbers): demo拆解与规范 ([#2109](https://github.com/jdf2e/nutui-react/pull/2109)) @Alex-huxiyang `v2.5.0`
- ✨ feat(animatingNumbers): support rtl ([#1985](https://github.com/jdf2e/nutui-react/pull/1985)) @irisSong `v2.4.0`
- 🐛 fix(animatingnumbers): 修复单元测试问题 ([#1878](https://github.com/jdf2e/nutui-react/pull/1878)) @Eiinu `v2.3.7`
- 💡 🛠 refactor: animatingNumbers ([#1048](https://github.com/jdf2e/nutui-react/pull/1048)) @拧巴的猫 `v2.0.0-alpha.13`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=animatingnumbers&expanded=true)
