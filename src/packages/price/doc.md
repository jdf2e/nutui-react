# Price 价格

### 介绍

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

### 安装

```javascript
import { Price } from '@nutui/nutui-react'
```


## 代码演示

### 基本用法

```tsx
<Price price={1010} needSymbol={false} thousands={true} />
```

### 有人民币符号，无千位分隔

```tsx
<Price price={10010.01} needSymbol={true} thousands={false} />
```

### 带人民币符号，有千位分隔，保留小数点后三位

```tsx
<Price price={15213.1221} decimalDigits={3} needSymbol={true} thousands={true} />
```

### 异步随机变更

```tsx
const [price, setPrice] = useState(Math.random() * 10000000)
useEffect(() => {
const timer = setInterval(() => {
    setPrice(Math.random() * 10000000)
}, 1000)
return () => {
    clearInterval(timer)
}
}, [])

<Price price={price} decimal-digits={3} need-symbol={true} thousands={true} />
```

## API

### Props

| 参数           | 说明                     | 类型    | 默认值 |
| -------------- | ------------------------ | ------- | ------ |
| price          | 价格数量                 | Number  | 0      |
| need-symbol    | 是否需要加上 symbol 符号 | Boolean | true   |
| symbol         | 符号类型                 | String  | &yen;  |
| decimal-digits | 小数位位数               | Number  | 2      |
| thousands      | 是否按照千分号形式显示   | Boolean | false  |
