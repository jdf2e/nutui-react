# AnimatingNumbers 组件

### 介绍

数字动画集合

### 安装


```javascript
import { AnimatingNumbers } from '@nutui/nutui-react'
```

## 代码演示

### AnimatingNumbers.CountUp-基础用法

```jsx
<AnimatingNumbers.CountUp endNumer="678.94" />
```

### AnimatingNumbers.CountUp-自定义样式，动态修改数据（需要指定最大位数）

```jsx
const AnimatingNumbersDemo = () => {
  const [endNumer, setEndNumer] = useState('1570.99')
  useEffect(() => {
    setInterval(() => {
      setEndNumer(`${Math.floor(Math.random() * 999999)}.${Math.floor(Math.random() * 89 + 10)}`)
    }, 30000)
  }, [])
  return (
    <AnimatingNumbers.CountUp
      endNumer={endNumer}
      easeSpeed={1.2}
      maxLen={6}
      className="custom-coutup"
    />
  )
}
```

## API

### AnimatingNumbers.CountUp Props

| 参数       | 说明                               | 类型    | 默认值 |
| ---------- | ---------------------------------- | ------- | ------ |
| maxLen     | 设置最大展示长度，长度不够按位补 0 | Number  | 0      |
| endNumer   | 结束值,必填项                      | String  | ''     |
| delaySpeed | 等待动画执行时间，单位 ms          | Number  | 300    |
| easeSpeed  | 动画执行时间，单位 s               | Number  | 1      |
| thousands  | 是否有千位分隔符                   | Boolean | false  |
