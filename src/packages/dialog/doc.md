#  Dialog 对话框

### 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

### 安装

```js
import { Dialog } from '@nutui/nutui-react'
```


## 代码演示

### 函数式调用

```tsx
<Cell title="基础弹框" onClick={() => {
    Dialog.alert({
        title: '基础弹框',
        content: '支持函数调用和组件调用两种方式。'
    });
}}></Cell>
<Cell title="无标题弹框" onClick={() => {
        Dialog.alert({
        content: '无标题弹框'
    });
}}></Cell>
<Cell title="提示弹框" onClick={() => {
    Dialog.alert({
        title: '温馨提示',
        content: '支持函数调用和组件调用两种方式。',
        noCancelBtn: true
    });
}}></Cell>
<Cell title="底部按钮 垂直调用" onClick={() => {
    Dialog.alert({
        title: '温馨提示',
        content: '支持函数调用和组件调用两种方式。',
        footerDirection: 'vertical'
    });
}}></Cell>
```

### 组件调用

```tsx
const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);

return <>
<Cell title="基础弹框" onClick={() => setVisible1(true)} />
<Dialog 
    title="组件调用"
    visible={visible1}
    onOk={() => setVisible1(false)}
    onCancel={() => setVisible1(false)}
>
    如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
</Dialog>
<Cell title="底部按钮 垂直调用" onClick={() => setVisible2(true)} />
<Dialog 
    title="组件调用"
    visible={visible2}
    lockScroll
    footerDirection='vertical'
    onOk={() => setVisible2(false)}
    onCancel={() => setVisible2(false)}
>
    如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
</Dialog>
</>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| visible         | 对话框是否可见               | boolean | -                |
| title        | 标题                         | ReactNode | -                |
| content         | 对话框的内容，适用于函数式调用 | ReactNode | -                |
| footer | 自定义页脚，传入 null 则不显示     | ReactNode | - |
| okText          | 确认按钮文案                        | ReactNode | '确定'              |
| cancelText          | 取消按钮文案                        | ReactNode | '取消'              |
| mask          | 是否展示遮罩                        | boolean | true              |
| noOkBtn          | 是否隐藏确定按钮                        | boolean | false              |
| noCancelBtn          | 是否隐藏取消按钮                        | boolean | false              |
| okBtnDisabled          | 禁用确定按钮                        | boolean | false              |
| noFooter          | 是否隐藏底部按钮栏                        | boolean | false              |
| closeOnClickOverlay          | 点击蒙层是否关闭对话框                        | boolean | true              |
| cancelAutoClose          | 取消按钮是否默认关闭弹窗                        | boolean | true              |
| textAlign          | 文字对齐方向，可选值同 css 的 text-align                        | string | 'center'              |
| footerDirection          | 使用横纵方向 可选值 horizontal、vertical                        | string | 'horizontal'              |
| lockScroll          | 背景是否锁定                        | boolean | false              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| onOk  | 确定按钮回调 | (e?: MouseEvent) => Promise | void |
| onCancel  | 取消按钮回调 | () => void |
| onClosed  | 关闭回调，任何情况关闭弹窗都会触发 | () => void |
| onClickSelf  | 点击自身回调 | () => void |
