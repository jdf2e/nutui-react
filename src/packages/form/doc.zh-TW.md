# Form 錶單

用於數據錄入、校驗，支持輸入框、單選框、復選框等類型。

## 引入

```tsx
import { Form } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 錶單校驗

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 關聯展示

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 帶有初始值表單校驗

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Form.useForm 對錶單數據域進行交互

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 校驗觸發時機

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### useWatch

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 表單類型

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Form

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| form | 經 Form.useForm() 創建的 form 控制實例，不提供時會自動創建 | `FormInstance` | `-` |
| footer | 錶單底部區域，一般放置確認和重置按鈕 | `ReactNode` | `null` |
| initialValues | 錶單初始值 | `any` | `-` |
| name | 錶單名稱 | `any` | `-` |
| label | 标签名 | `ReactNode` | `-` |
| labelPosition | 錶單項 label 的位置 | `top` \| `left` \| `right` | `right` |
| starPosition | 必填錶單項 label 的紅色星標位置 | `left` \| `right` | `left` |
| validateTrigger | 統一設定字段觸發驗證的時機 | `string` \| `string[]`\| `false` | `onChange` |
| disabled | 是否禁用 | `boolean` | `false` |
| onFinish | 校驗成功後觸發 | `(values: any) => void` | `-` |
| onFinishFailed | 任一錶單項被校驗失敗後觸發 | `(values: any, errorFields: any) => void` | `-` |

## Form.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| required | 必填錶單項 label 的紅色星標,僅用於控制樣式 | `boolean` | `false` |
| name | 在使用錶單校驗功能的情況下，該屬性是必填的 | `string` | `-` |
| errorMessageAlign | 錯誤提示文案對齊方式 | `center` \| `right` \| `left` | `left` |
| initialValue | 設置子元素默認值 | `any` | `-` |
| noStyle | 不使用样式，只使用字段管理 | `boolean` | `false` |
| shouldUpdate | 更新逻辑 | `boolean` | `false` |
| trigger | 設置收集字段值變更的時機 | `string` | `-` |
| align | 對齊方式 | `flex-start` \| `center` \| `flex-end` | `flex-start` |
| valuePropName | 子節點的值的屬性，如 Checkbox 的是 'checked' | `string` | `-` |
| getValueFromEvent | 設置如何將 event 的值轉換成字段值 | `(...args: any) => any` | `-` |
| validateTrigger | 統一設定字段觸發驗證的時機 | `string \| string[]` | `onChange` |
| onClick | 點擊事件併收集子組件 Ref | `(event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void` | `-` |

### Form.Item Rule

規則校驗處理基於[async-validator](https://github.com/yiminghe/async-validator) 更多規則配置可查看 async-validator 文檔。 使用 Form.Item 的`rules`屬性可以定義校驗規則，可選屬性如下:

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| required | 是否為必選字段 | `boolean` |
| message | 錯誤提示文案 | `string` |
| len | string 類型時為字符串長度；number 類型時為確定數字； array 類型時為數組長度 | `number` |
| max | 必須設置 type：string 類型為字符串最大長度；number 類型時為最大值；array 類型時為數組最大長度 | `number` |
| min | 必須設置 type：string 類型為字符串最小長度；number 類型時為最小值；array 類型時為數組最小長度 | `number` |
| pattern | 正則錶達式匹配 | `RegExp` |
| transform | 將字段值轉換成目標值後進行校驗 | `(value) => any` |
| validator | 自定義校驗，接收 Promise 作為返回值 | `(rule, value) => Promise` |

### FormInstance

`Form.useForm()`創建 Form 實例，用於管理所有數據狀態。

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| getFieldValue | 獲取對應字段名的值 | `(name: NamePath) => any` |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值 | `(name: NamePath \| boolean) => any` |
| setFieldsValue | 設定表單的值（該值將直接傳入 form store 中。如果你不希望傳入物件被修改，請複製後傳入） | `(values) => void` |
| setFieldValue | 設定對應欄位名的值 | `<T>(name: NamePath, value: T) => void` |
| resetFields | 重置錶單提示狀態 | `(namePaths?: NamePath[]) => void` |
| submit | 提交錶單進行校驗的方法 | `Promise` |

`Form.useWatch()`此方法將監視指定的輸入並傳回其值。它對於呈現輸入值和確定根據條件呈現的內容很有用。

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | 錯誤信息邊框顏色 | `$color-primary` |
| \--nutui-form-item-required-color | 必選標識的字體顏色 | `$color-primary` |
| \--nutui-form-item-error-message-color | 錯誤信息的文本顏色 | `$color-primary` |
| \--nutui-form-item-label-font-size | label 字號 | `14px` |
| \--nutui-form-item-label-width | label 寬度 | `90px` |
| \--nutui-form-item-label-margin-right | label 右外邊距 | `10px` |
| \--nutui-form-item-label-text-align | label 文本對齊方式 | `left` |
| \--nutui-form-item-required-margin-right | label 必選的右外邊距 | `4px` |
| \--nutui-form-item-body-font-size | 錶單容器的字號 | `14px` |
| \--nutui-form-item-body-slots-text-align | 錶單項文本對齊方式 | `left` |
| \--nutui-form-item-body-input-text-align | 錶單項輸入框的文本對齊方式 | `left` |
| \--nutui-form-item-tip-font-size | 錯誤信息的字號 | `10px` |
| \--nutui-form-item-tip-text-align | 錯誤信息的文本對齊方式 | `left` |
