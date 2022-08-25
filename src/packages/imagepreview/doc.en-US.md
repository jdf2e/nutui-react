#  ImagePreview

### Intro

Support full screen preview videos and images, support functional call.

### Install


```js
import { ImagePreview } from '@nutui/nutui-react'
```


## Code demonstration

### Basic Usage

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
        <ImagePreview images={images} show={showPreview1} onClose={hideFn1}></ImagePreview>
        <Cell title="展示图片预览" isLink={true} onClick={showFn1}></Cell>
    </>
  );
};
export default App;
```
:::

### With Init No

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
        <ImagePreview images={images} initNo={3} show={showPreview2} onClose={hideFn2}></ImagePreview>
        <Cell title="设置初始页码" isLink={true} onClick={showFn2}></Cell>
    </>
  );
};
export default App;
```
:::

### With Pagination

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
        <ImagePreview images={images} show={showPreview3} paginationVisible={true} paginationColor="red" onClose={hideFn3}></ImagePreview>
        <Cell title="设置轮播指示器及颜色" isLink={true} onClick={showFn3}></Cell>
    </>
  );
};
export default App;
```
:::

### With Videos

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
        <ImagePreview images={images} videos={videos} show={showPreview4} onClose={hideFn4}></ImagePreview>
        <Cell title="视频、图片预览" isLink={true} onClick={showFn4}></Cell>
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
| show | Whether to show preview | Boolean | false
| videos | Videos Array(Videos are before images, not support in taro) | Array<`Object`> | []
| images | Images array | Array<`String`> | []
| autoplay | Autoplay time, zero means not autoplay | Number、String  | 3000  |
| init-no | Init no | Number | 1
| pagination-visible | Whether to show pagination    | Boolean | false |
| pagination-color   | Pagination color    | String  | '#fff'  |
| content-close   | Click image to exit preview    | Boolean  | false  |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
|close|Emitted when closing ImagePreview|-|
