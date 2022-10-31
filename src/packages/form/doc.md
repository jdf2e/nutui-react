# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Cell 组件搭配使用。

### 安装



## 代码演示

### 基础用法

### 动态表单

:::demo
```
```
:::

### 表单校验
:::demo
```
```
:::

### 表单类型
:::demo
```
```
:::
## API

### Form Props

| 参数        | 说明                                 | 类型   | 默认值 |
|-------------|--------------------------------------|--------|--------|
| modelValue | 表单数据对象(使用表单校验时，_必填_) | object |        |

### Form Events

| 事件名   | 说明                       | 回调参数                                                   |
|----------|----------------------------|------------------------------------------------------------|
| onValidate | 任一表单项被校验失败后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### FormItem Props

| 参数                | 说明                                                             | 类型             | 默认值  |
|---------------------|------------------------------------------------------------------|------------------|---------|
| required            | 是否显示必填字段的标签旁边的红色星号                             | boolean          | `false` |
| prop                | 表单域 v-model 字段， 在使用表单校验功能的情况下，该属性是必填的 | string           | -       |
| labelWidth         | 表单项 label 宽度，默认单位为`px`                                | number \| string | `90px`  |
| labelAlign         | 表单项 label 对齐方式，可选值为 `center` `right`                 | string           | `left`  |
| bodyAlign          | 输入框对齐方式，可选值为 `center` `right`                        | string           | `left`  |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right`                  | string           | `left`  |
| showErrorLine     | 是否在校验不通过时标红输入框                                     | boolean          | `true`  |
| showErrorMessage  | 是否在校验不通过时在输入框下方展示错误提示                       | boolean          | `true`  |

### FormItem Rule 数据结构

使用 FormItem 的`rules`属性可以定义校验规则，可选属性如下:

| 键名      | 说明                   | 类型                                    |
|-----------|------------------------|-----------------------------------------|
| required  | 是否为必选字段         | boolean                                 |
| message   | 错误提示文案           | string                                  |
| onValidator | 通过函数进行校验       | (value) => boolean \| string \| Promise |
| regex     | 通过正则表达式进行校验 | RegExp                                  |

### FormItem Slots

| 名称            | 说明              |
|-----------------|-------------------|
| default         | 自定义内容        |
| label | 自定义`label`区域 |


``` html
  插槽使用方式
  <nut-form-item>
    <template v-slot:label>slot label</template>
  </nut-form-item>
```

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 Form 实例并调用实例方法

| 方法名            | 说明                                                               | 参数                | 返回值  |
|-------------------|--------------------------------------------------------------------|---------------------|---------|
| submit            | 提交表单进行校验的方法                                             | -                   | Promise |
| reset             | 清空校验结果                                                       | -                   | -       |
| validate`v3.1.13` | 用户主动触发校验，用于用户自定义场景时触发，例如 blur、change 事件 | 同 FormItem prop 值 | -       |