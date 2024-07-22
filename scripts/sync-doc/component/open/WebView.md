---
title: WebView 网页视图
sidebar_position: 1
---

用于在应用中嵌入网页内容的组件。

## 类型

```tsx
ComponentType<WebViewProps>
```

## 示例代码

```tsx
class App extends Component {
  handleMessage() {}
  render() {
    return <WebView src='https://mp.weixin.qq.com/' onMessage={this.handleMessage} />
  }
}
```

## WebViewProps

| 参数             | 类型                                        | 默认值    | 必填 | 说明                                                                                                       |
| :--------------- | :------------------------------------------ | :-------- | :--- | :--------------------------------------------------------------------------------------------------------- |
| src              | `string`                                    |           | 是   | webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。               |
| progressbarColor | `string`                                    |           | 否   | webview 的进度条颜色                                                                                       |
| type             | `string`                                    | `default` | 否   | 若使用 web-view 组件引入第三方客服，必须填写 type="im"                                                     |
| onMessage        | `CommonEventFunction<onMessageEventDetail>` |           | 否   | 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data } |
| onLoad           | `CommonEventFunction<onLoadEventDetail>`    |           | 否   | 网页加载成功时候触发此事件。e.detail = { src }                                                             |
| onError          | `CommonEventFunction<onErrorEventDetail>`   |           | 否   | 网页加载失败的时候触发此事件。e.detail = { src }                                                           |

### onMessageEventDetail

| 参数 | 类型    | 说明                                          |
| :--- | :------ | :-------------------------------------------- |
| data | `any[]` | 消息数据，是多次 postMessage 的参数组成的数组 |

### onLoadEventDetail

| 参数 | 类型     | 说明     |
| :--- | :------- | :------- |
| src  | `string` | 网页链接 |

### onErrorEventDetail

| 参数 | 类型     | 说明     |
| :--- | :------- | :------- |
| src  | `string` | 网页链接 |

<!--
## Props 与 API 支持度
| 属性 | H5  | Harmony | React Native | 微信小程序 | 京东小程序 |
| :--: | :-: | :-----: | :----------: | :--------: | :--------: |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
-->
