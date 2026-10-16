# SearchBar组件

用于搜索场景的输入框组件。

## 引入

```tsx
import { SearchBar } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 默认值、受控模式

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 搜索框形状及最大长度

`SearchBar` 的 `shape` 属性支持定义圆角直角，`maxLength` 可控制输入字符的最大长度。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 搜索框内外背景设置

`SearchBar` 通过 CSS 变量设置。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 搜索框文本设置

`SearchBar` 的 `left` 属性可以设置搜索框左侧内容，`right` 属性可以设置搜索框右侧内容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定义图标设置

`SearchBar` 的 `left` `right` `rightIn` 属性可以设置自定义图标

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义设置

`SearchBar` 的 `leftIn` 属性可以设置自定义内容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### InputProps扩展属性

`SearchBar` 的 `inputProps` 属性可以扩展底层输入框的属性，支持传入原生input元素的所有属性。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 数据改变监听

`SearchBar` 的 `onChange` 可获取输入的内容。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 玻璃态搜索

示例使用 MaterialView 组合玻璃效果，通过现有 CSS 变量配置 40px 搜索栏；搜索按钮由 `rightIn` 自定义。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 二级搜索

通过现有 CSS 变量配置 36px 二级搜索及 32px 轻量搜索。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### AI搜索

`mode="ai"` 切换为 86px 双行布局：上方为输入及清除区域，下方通过 `leftIn`、`rightIn` 配置操作内容。智能模式开关、识图图标与搜索按钮由业务按需组合，组件不内置 AI 检索逻辑。默认 `normal` 保持单行布局。

左侧内容在聚焦及输入时保持显示，需要隐藏默认搜索图标时设置 `leftIn={null}`；聚焦时隐藏占位提示。通过现有 `tag` 展示失焦后的关键词胶囊，通过 `onItemClick` 删除关键词。

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## SearchBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值，受控 | `string` | `-` |
| defaultValue | 当前默认值，支持通过','分割成多个 | `string` | `-` |
| placeholder | 输入框默认暗纹 | `string` | `请输入` |
| shape | 搜索框形状，可选值为 `round` | `string` | `square` |
| mode | 布局模式；AI 模式的 leftIn/rightIn 位于底部操作区 | `'normal' \| 'ai'` | `normal` |
| disabled | 是否禁用输入框 | `boolean` | `false` |
| readOnly | 输入框只读 | `boolean` | `false` |
| maxLength | 最大输入长度 | `number` | `9999` |
| clearable | 是否展示清除按钮 | `boolean` | `true` |
| tag | 失焦后以胶囊展示关键词 | `boolean` | `false` |
| autoFocus | 是否自动聚焦 | `boolean` | `false` |
| backable | 是否展示返回按钮 | `boolean` | `false` |
| left | 搜索框左侧区域 | `ReactNode` | `-` |
| right | 搜搜框右侧区域 | `ReactNode` | `-` |
| leftIn | 输入框内左侧区域 | `ReactNode` | `<Search />` |
| rightIn | 输入框内右侧区域 | `ReactNode` | `-` |
| inputProps | 扩展底层输入框属性，支持传入原生input元素的所有属性 | `Partial<InputHTMLAttributes<HTMLInputElement>>` | `-` |
| onChange | 输入内容时触发 | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 聚焦时触发 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 失焦时触发 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | 点击清空时触发 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | 确定搜索时触发 | `(val: string) => void` | `-` |
| onInputClick | 点击输入区域时触发 | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |
| onItemClick | 点击默认值的x号触发 | `(value: string) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-searchbar-width | 搜索框的宽度 | `100%` |
| \--nutui-searchbar-padding | 搜索框的padding值 | `1px 8px` |
| \--nutui-searchbar-background | 搜索框背景色 | `$color-background-sunken` |
| \--nutui-searchbar-color | 搜索框字色 | `$color-title` |
| \--nutui-searchbar-gap | 搜索框外部/大间距 | `12px` |
| \--nutui-searchbar-inner-gap | 搜索框内部元素间的间距 | `12px` |
| \--nutui-searchbar-font-size | 搜索框字号 | `$font-size-base` |
| \--nutui-searchbar-content-background | 搜索框中间内容区的背景色 | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | 搜索框内容区圆角 | `$radius-l` |
| \--nutui-searchbar-content-round-border-radius | 搜索框内容区在round模式下的圆角 | `19px` |
| \--nutui-searchbar-input-height | 搜索框输入区高度 | `36px` / AI `86px` |
| \--nutui-searchbar-input-padding | 搜索框输入区padding | `0 0 0 8px` |
| \--nutui-searchbar-input-text-color | 搜索框输入区字色 | `$color-title` |
| \--nutui-searchbar-input-curror-color | 搜索框输入区输入色 | `$color-title` |
| \--nutui-searchbar-input-text-align | 搜索框输入区对齐方式 | `left` |

<Contribution name="SearchBar" />
