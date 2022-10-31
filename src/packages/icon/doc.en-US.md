# Icon

### Introduce

Icon set based on IconFont fonts, which can be used through the Icon component.

### Install

``` javascript
import { Icon } from '@nutui/nutui-react';
```

## Demo

### Basic usage

The `name` attribute of `Icon` supports passing in icon names or image links.

:::demo
```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD" />
    <Icon size="40"
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />

  </>
}

export default App;
```
:::

### Color

The 'color' property of 'Icon' is used to set the color of the icon.

:::demo
```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" color="#fa2c19" />
    <Icon name="dongdong" color="#64b578" />
    <Icon name="JD" color="#fa2c19" />
  </>
}

export default App;
```
:::

### Size

The 'size' property of 'Icon' is used to set the size of the icon, with the
default unit being 'px'.

:::demo
```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="dongdong" size="24" />
    <Icon name="dongdong" size="16" />
  </>
}

export default App;
```
:::

### custom iconfont

If you need to use more icons based on the existing Icon, you can import the font file and CSS file corresponding to the third-party iconfont, and then you can use it directly in the Icon component.

> use [iconfont](https://www.iconfont.cn/)   recommend

1：first in [iconfont](https://www.iconfont.cn/) generate your custom Icon file and download it to the local project  [Docs](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

``` bash
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

2：project entry file main.js add `iconfont.css`


``` javascript
import './assets/font/iconfont.css';
```

3：use

```tsx
// fontClassName 指定类名为默认 iconfont
// classPrefix 指定默认 icon
// name 值根据 iconfont.css 中值对应填写
import React from 'react'
import Icon from '@nutui/nutui-react'

const App = () => {
return <Icon fontClassName="iconfont" classPrefix='icon' name="close"/>
}
```


> Use a third-party custom font library

```css
/* Introduce third-party or custom font icon styles */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.icon-extra::before {
  content: '\e626';
}
```

```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon fontClassName="my-icon" classPrefix="icon" name="extra" />
  </>
}

export default App;
```

## API

### Props

| Props        | Description                                                  | Type             | Default          |
|--------------|-----------------------------------------------------|------------------|------------------|
| name         | Icon name or picture link                           | String           | -                |
| color        | Icon color                                          | String           | -                |
| size         | Icon size, such as:  `20px` `2em` `2rem`            | String or Number | -                |
| class-prefix | A class name prefix that is used to use custom icons | String           | `nutui-iconfont` |
| tag          | tsx tag                                             | String           | `i`              |

### Events

| Event | Description           | callback parameters |
|-------|----------------|---------------------|
| onClick`v1.3.8` | Triggered when the icon is tapped | event: Event        |
