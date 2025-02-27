# SideNavBar組件

> **⚠️ 注意：** 該組件即將被廢棄。請使用 [SideBar](#/zh-CN/component/sidebar) 代替。

用於內容選擇和切換

## 引入

```tsx
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 導航嵌套（建議最多三層）

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## SideNavBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 組件是否顯示 | `boolean` | `false` |
| title | 整體標題 | `string` | `-` |
| width | 遮罩寬度百分比 | `string` | `80%` |
| position | 彈出位置 | `left` \| `right` | `left` |
| offset | 縮進寬度 | `number` | `20` |
| onClose | 關閉遮罩時觸發 | `-` | `-` |

## SubSideNavBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 導航唯一標識 | `string` \| `number` | `-` |
| title | 整體標題 | `string` | `-` |
| open | 導航是否默認展開 | `boolean` | `true` |
| onClick | 導航點擊 | `({title: string, value: string \| number, isShow: boolean}) => void` | `-` |

## SideNavBarItem

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 導航唯一標識 | `string` \| `number` | `-` |
| title | 整體標題 | `string` | `-` |
| onClick | 導航點擊 | `({title: string, value: string \| number}) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | 側邊欄導航背景色 | `$white` |
| \--nutui-sidenavbar-item-height | 側邊欄每項的高度 | `40px` |
| \--nutui-sidenavbar-title-padding | 標題的內邊距 | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | 標題的背景色 | `$color-background` |
| \--nutui-sidenavbar-title-color | 標題的字體顏色 | `$color-title` |
| \--nutui-sidenavbar-sub-title-padding | 子標題的內邊距 | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | 子標題背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-title-color | 子標題字體顏色 | `$color-title` |
| \--nutui-sidenavbar-sub-list-background | 選項列表背景色 | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-list-color | 選項列表字體顏色 | `$color-title` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20SideNavBar)

### Component Logs

- 🐛 fix(sideNavBar): demo拆解与规范 ([#2058](https://github.com/jdf2e/nutui-react/pull/2058)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs(sidenavbar): 文档可读性优化 ([#1920](https://github.com/jdf2e/nutui-react/pull/1920)) @Alex.huxiyang `v2.3.9`
- 💡 📖 docs(sideNavBar): handleClose 改为 onClose ([#1635](https://github.com/jdf2e/nutui-react/pull/1635)) @haitao `v2.1.0`
- 💡 🛠 refactor: sidenavbar ([#1057](https://github.com/jdf2e/nutui-react/pull/1057)) @oasis-cloud `v2.0.0-alpha.14`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=sidenavbar&expanded=true)
