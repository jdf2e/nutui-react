#  ImagePreview组件

### 介绍

支持全屏预览视频和图片，可函数式调用

### 安装


```js
import { ImagePreview } from '@nutui/nutui-react'
```


## 代码演示

### 基础用法

:::demo
```tsx
import  React from "react";
import { ImagePreview, Cell } from '@nutui/nutui-react';

const App = () => {
    const images = [
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
    ];
    const [showPreview1, setShowPreview1] = useState(false);

    const showFn1 = () => {
        setShowPreview1(true)
    }

    const hideFn1 =() => {
        setShowPreview1(false)
    }

  return (
    <>
        <ImagePreview images={images} show={showPreview1} onClose={hideFn1} />
        <Cell title="展示图片预览" isLink onClick={showFn1} />
    </>
  );
};
export default App;
```
:::

### 设置初始页码

:::demo
```tsx
import  React from "react";
import { ImagePreview, Cell } from '@nutui/nutui-react';

const App = () => {
    const images = [
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
    ];
    const [showPreview2, setShowPreview2] = useState(false);

    const showFn2 = () => {
        setShowPreview2(true)
    }

    const hideFn2 =() => {
        setShowPreview2(false)
    }

  return (
    <>
        <ImagePreview images={images} initNo={3} show={showPreview2} onClose={hideFn2} />
        <Cell title="设置初始页码" isLink onClick={showFn2} />
    </>
  );
};
export default App;
```
:::

### 设置轮播指示器及颜色

:::demo
```tsx
import  React from "react";
import { ImagePreview, Cell } from '@nutui/nutui-react';

const App = () => {
    const images = [
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
    ];
    const [showPreview3, setShowPreview3] = useState(false);

    const showFn3 = () => {
        setShowPreview3(true)
    }

    const hideFn3 =() => {
        setShowPreview3(false)
    }

  return (
    <>
        <ImagePreview images={images} show={showPreview3} paginationVisible paginationColor="red" onClose={hideFn3} />
        <Cell title="设置轮播指示器及颜色" isLink onClick={showFn3} />
    </>
  );
};
export default App;
```
:::

### 视频、图片预览

:::demo
```tsx
import  React from "react";
import { ImagePreview, Cell } from '@nutui/nutui-react';

const App = () => {
    const images = [
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
        },
        {
            src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
        }
    ];

    const videos = [
        {
            source: {
                src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                type: 'video/mp4'
            },
            options: {
                muted: true,
                controls: true
            }
        },
        {
            source: {
                    src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
                    type: 'video/mp4'
                },
                options: {
                muted: true,
                controls: true
            }
        }
    ]
    const [showPreview4, setShowPreview4] = useState(false);

    const showFn4 = () => {
        setShowPreview4(true)
    }

    const hideFn4 =() => {
        setShowPreview4(false)
    }

  return (
    <>
        <ImagePreview images={images} videos={videos} show={showPreview4} onClose={hideFn4} />
        <Cell title="视频、图片预览" isLink onClick={showFn4} />
    </>
  );
};
export default App;
```
:::



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| show | 是否展示预览图片 | Boolean | false
| videos | 预览的视频数组（视频自动放到图片之前、taro场景暂不支持） | Array<`Object`> | []
| images | 预览图片数组 | { src: String }[] | []
| autoplay | 自动轮播时长，0表示不会自动轮播 | Number、String  | 3000  |
| initNo | 初始页码 | Number | 1
| paginationVisible | 分页指示器是否展示    | Boolean | false |
| paginationColor   | 分页指示器选中的颜色    | String  | '#fff'  |
| contentClose   | 点击图片可以退出预览    | Boolean  | false  |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
|onClose|点击遮罩关闭图片预览时触发|无|
