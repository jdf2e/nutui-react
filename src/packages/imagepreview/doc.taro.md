#  ImagePreview组件

## 介绍

支持全屏预览视频和图片，可函数式调用

## 安装


```tsx
import { ImagePreview } from '@nutui/nutui-react-taro'
```


## 代码演示

### 基础用法

:::demo
```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
        <ImagePreview images={images} visible={showPreview1} onClose={hideFn1} />
        <Cell title="展示图片预览"  onClick={showFn1} />
    </>
  );
};
export default App;
```

:::

### 点击缩略图切换

:::demo

```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
  const [init, setInit] = useState(0);

  return (
    <>
      <Cell style={{ position: 'relative', zIndex: 10000 }}>
        {images.map((image, index) =>
          (<span
            key={image.src}
            onClick={() => setInit(index + 1)}
            style={{ marginRight: '10px' }}
          >
              <img width={30}
                   height={30}
                   src={image.src}
                   alt={image.src}
              />
            </span>)
        )}
      </Cell>
      <ImagePreview
        images={images}
        visible={init}
        defaultValue={init}
        onClose={hideFn2}
      />
    </>
  );
};
export default App;
```

:::

### 设置初始页码

:::demo
```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
        <ImagePreview images={images} defaultValue={3} visible={showPreview2} onClose={hideFn2} />
        <Cell title="设置初始页码"  onClick={showFn2} />
    </>
  );
};
export default App;
```
:::


### 受控模式

:::demo

```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
  const [init5, setInit5] = useState<any>(1)
  const [showPreview5, setShowPreview5] = useState(false);

  const showFn5 = () => {
    setShowPreview5(true)
  }

  const hideFn5 = () => {
    setShowPreview5(false)
  }

  return (
    <>
        <ImagePreview
          images={images}
          visible={showPreview5}
          value={init5}
          indicator
          onChange={(value) => setInit5(value)}
          onClose={hideFn5}
        />
        <Cell
          title="受控模式"
          onClick={() => {
            showFn5()
          }}
        />
    </>
  );
};
export default App;
```

:::


### 设置轮播指示器及颜色

:::demo
```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
        <ImagePreview images={images} visible={showPreview3} indicator indicatorColor="red" onClose={hideFn3} />
        <Cell title="设置轮播指示器及颜色"  onClick={showFn3} />
    </>
  );
};
export default App;
```
:::

### 视频、图片预览

:::demo
```tsx
import React, { useState } from 'react';
import { ImagePreview, Cell } from '@nutui/nutui-react-taro';

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
        <ImagePreview images={images} visible={showPreview4} onClose={hideFn4} />
        <Cell title="视频、图片预览"  onClick={showFn4} />
    </>
  );
};
export default App;
```
:::


## ImagePreview

### Props

| 属性         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| visible | 是否展示预览图片 | `boolean` | `false` |
| videos | 预览的视频数组（视频自动放到图片之前） | `Array<Object>` | `[]` |
| images | 预览图片数组 | `{ src: string }[]` | `[]` |
| autoPlay | 自动轮播时长，0表示不会自动轮播 | `number` \| `string`  | `3000`  |
| defaultValue | 初始页码 | `number` | `1` |
| value | 页码，受控 | `number` | `1` |
| indicator | 分页指示器是否展示    |  `boolean` | `false` |
| indicatorColor   | 分页指示器选中的颜色    | `string`  | `#fff`  |
| showMenuByLongpress   | 开启长按图片显示识别小程序码菜单    | `boolean`  | `false`  |
| closeOnContentClick   | 点击图片可以退出预览    |  `boolean`  | `false`  |
| onClose | 点击遮罩关闭图片预览时触发| `() => void` | `-` | 
