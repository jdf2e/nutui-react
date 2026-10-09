# Checkbox 复选按钮

多选按钮用于选择。组件包含未勾选、已勾选、强制勾选、强制不勾选4种状态。

## 引入

```tsx
import { Checkbox } from '@nutui/nutui-react'
```

## 示例代码

### 非受控

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 基础用法

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## 半选状态

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## 禁用状态

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## 自定义尺寸

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## 自定义图标

这里建议同时设置 `icon` 和 `activeIcon` 属性

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## change事件

值发生变化时，将触发change事件

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Checkbox.Group 使用

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Checkbox.Group 禁用

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Checkbox.Group 全选/取消

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## checkboxGroup使用，限制最大可选数（3个）, 至少选择数（1个）

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## 全选/半选/取消

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## 配置 options 渲染复选按钮

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

## 列表

:::demo

<CodeBlock src='h5/demo15.tsx'></CodeBlock>

:::

## Checkbox

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| checked | 是否選中 | `boolean` | `false` |
| defaultChecked | 初始是否選中 | `boolean` | `false` |
| disabled | 是否禁用選擇 | `boolean` | `false` |
| indeterminate | 半選狀態 | `boolean` | `false` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | 選中前圖標 | `ReactNode` | `'CheckNormal'` |
| activeIcon | 選中後圖標 | `ReactNode` | `'Checked'` |
| indeterminateIcon | 半選狀態圖標 | `ReactNode` | `'CheckDisabled'` |
| label | 複選框的文本內容 | `ReactNode` | `-` |
| value | 標識值，用於 Group 模式 | `string` \| `number` | `-` |
| shape | 形狀 | `button` \| `round` | `round` |
| onChange | 值變化時觸發 | `(value: boolean) => void` | `-` |

## Checkbox.Group

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前選中項的標識符數組 | `string[]` | `-` |
| defaultValue | 初始選中項的標識符數組 | `string[]` | `-` |
| disabled | 是否禁用選擇，將用於其下的全部複選框 | `boolean` | `false` |
| max | 限制最大可選數 | `number` | `-` |
| min | 限制至少選擇数 | `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| direction | 排列方向，可選值 `horizontal`、`vertical` | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染複選按鈕 | `CheckboxGroupOption[]` | `[]` |
| list | 列表模式 | `boolean` | `false` |
| onChange | 值變化時觸發 | `(value: string[]) => void` | `-` |
| onLimit | 達到最大/最小限制時觸發 | `(type: 'max' \| 'min') => void` | `-` |

### CheckboxGroupOption

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| label | 複選框文本內容 | `string` | `-` |
| value | 複選框標識值 | `string` | `-` |
| disabled | 是否禁用 | `boolean` | `false` |
| onChange | 選項狀態變化時觸發 | `(state: boolean, label: string) => void` | `-` |

### Ref

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| toggle | 全選/取消（支持 options 與 children 模式） | 傳 `true` 表示全選，傳 `false` 表示取消全選 |
| reverse | 反選（支持 options 與 children 模式） | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-checkbox-label-color | label 的文本顏色 | `$color-title` |
| \--nutui-checkbox-label-disable-color | label 禁用的文本顏色 | `#999` |
| \--nutui-checkbox-icon-disable-color | 圖標禁用的顏色 | `#d6d6d6` |
| \--nutui-checkbox-label-margin-left | label 的左外邊距 | `$spacing-xxs` |
| \--nutui-checkbox-label-font-size | label 的字號 | `14px` |
| \--nutui-checkbox-icon-font-size | 圖標字號 | `18px` |
| \--nutui-checkbox-button-font-size | shape 為 button 時的字號 | `12px` |
| \--nutui-checkbox-button-color | shape 為 button 時的字體顏色 | `$color-text` |
| \--nutui-checkbox-button-background | shape 為 button 時的背景色 | `$color-background` |
| \--nutui-checkbox-button-active-border | shape 為 button 選中態的邊框 | `1px solid $color-primary` |
| \--nutui-checkbox-button-padding | shape 為 button 時的內邊距 | `5px 18px` |
| \--nutui-checkbox-button-border-radius | shape 為 button 時的圓角 | `15px` |
| \--nutui-checkbox-button-disabled-active-color | shape 為 button 選中且禁用時的字體顏色 | `$white` |
| \--nutui-checkbox-list-background-color | 列表背景色 | `$white` |
| \--nutui-checkbox-list-item-border | 列表項的邊框 | `1px solid $color-border` |
| \--nutui-checkbox-list-padding | 列表的內邊距 | `0 0 0 12px` |
| \--nutui-checkbox-list-item-padding | 列表項的內邊距 | `12px 12px 12px 0` |
| \--nutui-checkboxgroup-checkbox-margin | Group 模式下橫向排列時右側外邊距 | `20px` |
| \--nutui-checkboxgroup-checkbox-margin-bottom | Group 模式下縱向排列時底部外邊距 | `5px` |
| \--nutui-checkboxgroup-checkbox-label-margin | Group 模式下 RTL label 外邊距 | `0 5px` |

<Contribution name="Checkbox" />
