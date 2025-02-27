# ShortPassword 短密码

短密码输入框，可用于输入密码、短信验证码等

## 引入

```tsx
import { ShortPassword } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 显示明文

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 显示按钮组

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义密码长度4

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 忘记密码提示语事件回调

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自动聚焦

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## ShortPassword

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 密码字符串 | `string` | `-` |
| visible | 是否展示短密码框 | `boolean` | `false` |
| plain | 是否展示明文 | `boolean` | `false` |
| title | 标题 | `ReactNode` | `请输入密码` |
| description | 密码框描述 | `ReactNode` | `您使用了虚拟资产，请进行验证` |
| tips | 提示语 | `ReactNode` | `忘记密码` |
| hideFooter | 是否隐藏底部按钮 | `boolean` | `true` |
| length | 密码长度，取值为4~6 | `number` | `6` |
| error | 错误信息提示 | `ReactNode` | `-` |
| autoFocus | 自动聚焦 | `boolean` | `false` |
| onChange | 输入密码时触发事件 | `(value) => void` | `-` |
| onConfirm | 点击确认时触发事件 | `(value) => void` | `-` |
| onCancel | 点击取消时触发事件 | `() => void` | `-` |
| onClose | 点击关闭图标和遮罩时触发事件 | `() => void` | `-` |
| onTips | 点击忘记密码时触发事件 | `() => void` | `-` |
| onComplete | 输入完成的回调 | `(value) => void` | `-` |
| onFocus | 输入框聚焦 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | 背景颜色 | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | 边框颜色 | `#ddd` |
| \--nutui-shortpassword-error | 错误提示字体颜色 | `$color-primary` |
| \--nutui-shortpassword-forget | 忘记密码字体颜色 | `rgba(128, 128, 128, 1)` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20ShortPassword)

### Component Logs

- 🐛 fix(shortpassword): demo拆解与规范 ([#2102](https://github.com/jdf2e/nutui-react/pull/2102)) @Alex-huxiyang `v2.5.0`
- ✨ feat(shortpassword): support ref for form ([#1930](https://github.com/jdf2e/nutui-react/pull/1930)) @oasis-cloud `v2.3.10`
- 💡 📖 docs(shortpassword): 增加onComplete的demo及文档 ([#1860](https://github.com/jdf2e/nutui-react/pull/1860)) @xiaoyatong `v2.3.7`
- 💡 🛠 refactor: shortPassword ([#1046](https://github.com/jdf2e/nutui-react/pull/1046)) @Eiinu `v2.0.0-alpha.12`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=shortpassword&expanded=true)
