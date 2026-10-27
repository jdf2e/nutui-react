# SearchBar組件

用於搜索場景的輸入框組件。

## 引入

```tsx
import { SearchBar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

`SearchBar` 的 `placeholder` 屬性支持自定義。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 默認值、受控

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 搜索框形狀及最大長度

`SearchBar` 的 `shape` 屬性支持定義圓角直角，`maxLength` 可控制輸入字符的最大長度。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 搜索框內外背景設置

`SearchBar` 通過 CSS 變量設置。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 搜索框文本設置

`SearchBar` 的 `left` 屬性可以設置搜索框左側內容，`right` 屬性可以設置搜索框右側內容

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義圖標設置

`SearchBar` 的 `left` `right` `rightIn` 屬性可以設置自定義圖標

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義設置

`SearchBar` 的 `leftIn` 屬性可以設置自定義內容

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### InputProps擴展屬性

`SearchBar` 的 `inputProps` 屬性可以擴展底層輸入框的屬性，支持傳入原生input元素的所有屬性。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 數據改變監聽

`SearchBar` 的 `onChange` 可獲取輸入的內容。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 玻璃態搜索

範例使用 MaterialView 組合玻璃效果，透過現有 CSS 變量設定 40px 搜索欄；搜索按鈕由 `rightIn` 自定義。

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 二級搜索

透過現有 CSS 變量設定 36px 二級搜索及 32px 輕量搜索。

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### AI搜索

`mode="ai"` 切換為 86px 雙行佈局：上方為輸入及清除區域，下方透過 `leftIn`、`rightIn` 設定操作內容。智能模式開關、識圖圖標與搜索按鈕由業務按需組合，組件不內建 AI 檢索邏輯。默認 `normal` 保持單行佈局。

左側內容在聚焦及輸入時保持顯示，需要隱藏默認搜索圖標時設定 `leftIn={null}`；聚焦時隱藏占位提示。透過 `tag` 展示關鍵詞膠囊。點擊膠囊（包含 × 圖標）會觸發 `onItemClick`，需在回調中更新輸入值以刪除關鍵詞，組件不會自動刪除。

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## SearchBar

### Props

未設定 `placeholder` 或傳入空字串時，使用 `ConfigProvider` 的 `locale.placeholder`；默認語言包為 zh-CN（「请输入内容」），配置 zh-TW 後為「請輸入內容」。

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前輸入的值，受控 | `string` | `-` |
| defaultValue | 非受控初始值；開啟tag時，以逗號分隔多個關鍵詞膠囊 | `string` | `-` |
| placeholder | 占位提示，未設定時使用配置的locale.placeholder | `string` | `locale.placeholder` |
| shape | 搜索框形狀，可選值為 `round` | `string` | `square` |
| mode | 布局模式；AI 模式的 leftIn/rightIn 位於底部操作區 | `'normal' \| 'ai'` | `normal` |
| disabled | 是否禁用輸入框 | `boolean` | `false` |
| readOnly | 輸入框只讀 | `boolean` | `false` |
| maxLength | 最大輸入長度 | `number` | `9999` |
| clearable | 有內容且未展示膠囊時，是否顯示清除按鈕 | `boolean` | `true` |
| tag | 是否以膠囊展示關鍵詞，聚焦時編輯、失焦後恢復 | `boolean` | `false` |
| autoFocus | 是否自動聚焦 | `boolean` | `false` |
| backable | 是否展示返回按鈕 | `boolean` | `false` |
| left | 搜索框左側區域 | `ReactNode` | `-` |
| right | 搜索框右側區域 | `ReactNode` | `-` |
| leftIn | 輸入框內左側區域 | `ReactNode` | `<Search />` |
| rightIn | 輸入框內右側區域 | `ReactNode` | `-` |
| inputProps | 擴展底層輸入框屬性，支持傳入原生input元素的所有屬性 | `Partial<InputHTMLAttributes<HTMLInputElement>>` | `-` |
| onChange | 輸入或清空時觸發；清空時不傳event | `(value: string, event?: ChangeEvent<HTMLInputElement>) => void` | `-` |
| onFocus | 聚焦時觸發 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onBlur | 失焦時觸發 | `(value: string, event: FocusEvent<HTMLInputElement>) => void` | `-` |
| onClear | 點擊清空時觸發 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |
| onSearch | 鍵盤確認搜索時觸發；rightIn自定義按鈕需自行綁定 | `(val: string) => void` | `-` |
| onInputClick | 點擊輸入區域時觸發 | `(event: MouseEvent<HTMLInputElement>) => void` | `-` |
| onItemClick | 點擊關鍵詞膠囊（包含×）時觸發，需自行更新值以刪除 | `(value: string, event: any) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-searchbar-width | 搜索框的寬度 | `100%` |
| \--nutui-searchbar-padding | 搜索框的padding值 | `1px 8px` |
| \--nutui-searchbar-background | 搜索框背景色 | `$color-background-sunken` |
| \--nutui-searchbar-color | 搜索框字色 | `$color-title` |
| \--nutui-searchbar-gap | 搜索框外部/大間距 | `12px` |
| \--nutui-searchbar-inner-gap | 搜索框內部元素間的間距 | `8px` |
| \--nutui-searchbar-font-size | 搜索框字號 | `$font-size-base` |
| \--nutui-searchbar-content-background | 搜索框中間內容區的背景色 | `$color-background-overlay` |
| \--nutui-searchbar-content-border-radius | 搜索框內容區圓角 | `$radius-l` |
| \--nutui-searchbar-content-round-border-radius | 搜索框內容區在round模式下的圓角 | `19px` |
| \--nutui-searchbar-input-height | 搜索框輸入區高度 | `36px` / AI `86px` |
| \--nutui-searchbar-input-text-color | 搜索框輸入區字色 | `$color-title` |
| \--nutui-searchbar-input-curror-color | 輸入框光標顏色 | `$color-primary` |
| \--nutui-searchbar-input-text-align | 搜索框輸入區對齊方式 | `left` |

輸入控件的內邊距可透過 `inputProps.style.padding` 設定。

<Contribution name="SearchBar" />
