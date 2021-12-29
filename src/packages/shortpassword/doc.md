#  ShortPassword组件

### 介绍

短密码输入框，可用于输入密码、短信验证码等

### 安装
import { Shortpassword } from '@nutui/nutui-react';


## 代码演示

### 基础用法
```tsx
const Shortpassword = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  cosnt change = (value)=>{
     setValue(value)
  }
  return 
    <>
        <Shortpassword visible={visible} modelValue={value} onClose={()=>setVisible(false)} change={(value)=>change(value)}></Shortpassword>
    </>
}

```

### 显示按钮组
```tsx
const Shortpassword = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  cosnt change = (value)=>{
     setValue(value)
  }
  return
     <>
        <Shortpassword visible={visible} modelValue={value} onClose={()=>setVisible(false)} change={(value)=>change(value)} noButton={false}></Shortpassword>
    </>
}

```

### 自定义密码长度4
```tsx
const Shortpassword = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
  cosnt change = (value)=>{
     setValue(value)
  }
  return 
    <>
        <Shortpassword visible={visible} modelValue={value} onClose={()=>setVisible(false)} change={(value)=>change(value)} length={4}></Shortpassword>
    </>
}

```
### 忘记密码提示语事件回调
```tsx
const Shortpassword = () => {
  const [visible,setVisible] = useState(false)
  const [value,setValue] = useState('')
   const onTips = ()=>{
    Toast.text('执行忘记密码提示语')
  }
  cosnt change = (value)=>{
     setValue(value)
  }
  return 
    <>
        <Shortpassword visible={visible} modelValue={value} onClose={()=>setVisible(false)} change={(value)=>change(value)} onTips={()=>onTips()}></Shortpassword>
    </>
}

```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| modelValue         | 密码初始值               | String｜Number | -                |
| visible        | 是否展示短密码框                         | Boolean | false              |
| title                  | 标题                | String         | 请输入密码                   |
| desc                   | 密码框描述          | String         | 您使用了虚拟资产，请进行验证 |
| tips                   | 提示语              | String         | 忘记密码                     |
| closeOnClickOverlay | 是否点击遮罩关闭    | Boolean        | true                         |
| noButton              | 是否隐藏底部按钮    | Boolean        | true                         |
| length                 | 密码长度，取值为4~6 | String｜Number | 6                            |
| errorMsg              | 错误信息提示        | String         | ''                           |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change   | 输入密码时触发事件     |  当前输入框值value    |
| onOk       | 点击确实时触发事件     | 当前输入框值value    |
| onCancel   | 点击取消时触发事件     | -    |
| onClose    | 点击关闭图标和遮罩时触发事件 | -    |
| onTips    | 点击忘记密码时触发事件 | -    |
| complete | 输入完成的回调         | 当前输入框值value    |
