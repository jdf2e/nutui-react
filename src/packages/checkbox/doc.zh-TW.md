# Checkbox 複選按鈕

### 介紹

多選按鈕用於選擇。

### 安裝

``` ts
import { Checkbox, CheckBoxGroup } from '@nutui/nutui-react';

```

## 基本用法

```html
const CheckBoxDemo = () => {
  const [checked, setChecked] = useState(true)
  return (<>
    <CheckBox textPosition={'left'} label={'複選框'} checked={checked}></CheckBox>
    <CheckBox textPosition={'right'} label={'複選框'} checked={false}></CheckBox>
  </>
  )
}
```

## 禁用狀態

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      textPosition={'right'}
      label={'未選時禁用狀態'}
      checked={false}
      disabled={true}
    ></CheckBox>
    <CheckBox
      textPosition={'right'}
      label={'選中時禁用狀態'}
      checked={true}
      disabled={true}
    ></CheckBox>
  </>)
}
```

## 自訂尺寸

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox label={'自訂尺寸25'} iconSize={25}></CheckBox>
    <CheckBox label={'自訂尺寸10'} iconSize={10}></CheckBox>
  </>)
}
```

## 自訂圖示

這裏建議同時設置 『iconName』 和 『iconActiveName』 屬性

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox iconName="checklist" iconActiveName="checklist">自訂圖示</CheckBox>
  </>)
}
```


## change事件

值發生變化時，將觸發change事件

```html
const CheckBoxDemo = () => {
  return (<>
    <CheckBox
      checked={false}
      onChange={(state, label) => {
      Toast.text(`您${state ? '選中' : '取消'}了${label}`)
      }}
      >
      複選框
    </CheckBox>
  </>)
}
```

## CheckBoxGroup使用

```html
const CheckBoxDemo = () => {
  const [checkboxgroup1, setCheckboxgroup1] = useState(['1'])
  return (
    <CheckBoxGroup
      checkedValue={checkboxgroup1}
      onChange={(value) => {
    console.log(value)
    setCheckboxgroup1(value)
    }}
    >
      <CheckBox checked={false} label="1">
        組合複選框
      </CheckBox>
      <CheckBox checked={false} label="2">
        組合複選框
      </CheckBox>
      <CheckBox checked={false} label="3">
        組合複選框
      </CheckBox>
      <CheckBox checked={false} label="4">
        組合複選框
      </CheckBox>
    </CheckBoxGroup>
  )
}
```

## CheckBoxGroup 全選/取消

```html
const CheckBoxDemo = () => {
  const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
  const checkboxgroup2Ref = useRef(null)
  return (<>
    <CheckBoxGroup
      style={{}}
      ref={checkboxgroup2Ref}
      checkedValue={checkboxgroup2}
      onChange={(value) => {
    Toast.text(`${value.length === 2 ? '全選' : '取消全選'}`)
    }}
    >
    <CheckBox checked={false} label="1">
      組合複選框
    </CheckBox>
    <CheckBox checked={false} label="2">
      組合複選框
    </CheckBox>
    </CheckBoxGroup>
    <Button
      type="primary"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(true)
    }}
    >
    全選
    </Button>
    <Button
      type="info"
      onClick={() => {
    ;(checkboxgroup2Ref.current as any).toggleAll(false)
    }}
    >
    取消
    </Button>
  </>)
}
```

## Checkbox

| 屬性 | 說明 | 類型 | 預設值 |
|----- | ----- | ----- | -----  |
| checked | 是否處於選取狀態 | Boolean | `false` |
| disabled | 是否禁用選擇 | Boolean | `false` |
| textPosition | 文本所在的位置，可選值：`left`,`right` | String | `right` |
| iconSize | [图标尺寸](#/icon) | String、Number | `18` |
| iconName | [图标名称](#/icon)，选中前(建议和`iconActiveName`一起修改) | String | `'check-normal'` |
| iconActiveName | [图标名称](#/icon)，选中后(建议和`iconName`一起修改) | String | `'checked'` |
| label | 复选框的文本内容 | String | - |


## CheckBoxGroup

| 屬性 | 說明 | 類型 | 預設值 |
|----- | ----- | ----- | ----- |
| checkedValue | 當前選取的標識碼，和 'label' 相對應 | String | - |
| disabled | 是否禁用選擇，將用於其下的全部複選框 | Boolean | `false` |



## Checkbox Event

| 事件名稱 | 說明 | 回調參數 |
|----- | ----- | ----- |
| change | 值變化時觸發 | (state, label),`state`代表當前狀態，`label`表示目前選取的值 |

## CheckBoxGroup Event

| 事件名稱 | 說明 | 回調參數 |
|----- | ----- | ----- |
| change | 值變化時觸發 | label，'label'返回一個陣列，表示當前選中項的集合 |