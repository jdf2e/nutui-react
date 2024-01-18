# ImagePreview組件

## 介紹

支持全屏預覽視頻和圖片，可函數式調用

## 安裝

```tsx
import { ImagePreview } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from 'react';
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

  const hideFn1 = () => {
    setShowPreview1(false)
  }

  return (
    <>
        <ImagePreview images={images} visible={showPreview1} onClose={hideFn1} />
        <Cell title="展示圖片預覽"  onClick={showFn1} />
    </>
  );
};
export default App;
```

:::

### 點擊縮略圖切換

:::demo

```tsx
import React, { useState } from 'react';
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

### 設置初始頁碼

:::demo

```tsx
import React, { useState } from 'react';
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

  const hideFn2 = () => {
    setShowPreview2(false)
  }

  return (
    <>
        <ImagePreview images={images} defaultValue={3} visible={showPreview2} onClose={hideFn2} />
        <Cell title="設置初始頁碼"  onClick={showFn2} />
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

### 設置輪播指示器及顏色

:::demo

```tsx
import React, { useState } from 'react';
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

  const hideFn3 = () => {
    setShowPreview3(false)
  }

  return (
    <>
        <ImagePreview images={images} visible={showPreview3} indicator indicatorColor="red" onClose={hideFn3} />
        <Cell title="設置輪播指示器及顏色"  onClick={showFn3} />
    </>
  );
};
export default App;
```

:::

### 視頻、圖片預覽

:::demo

```tsx
import React, { useState } from 'react';
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

  const hideFn4 = () => {
    setShowPreview4(false)
  }

  return (
    <>
        <ImagePreview images={images} videos={videos} visible={showPreview4} onClose={hideFn4} />
        <Cell title="視頻、圖片預覽"  onClick={showFn4} />
    </>
  );
};
export default App;
```

:::

### 關閉按鈕

:::demo

```tsx
import React, { useState } from 'react';
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
  const [showPreview6, setShowPreview6] = useState(false);

  const showFn6 = () => {
    setShowPreview6(true)
  }

  const hideFn6 = () => {
    setShowPreview6(false)
  }

  return (
    <>
      <ImagePreview images={images} visible={showPreview6} onClose={hideFn6} closeIcon />
      <Cell title="關閉按鈕"  onClick={showFn6} />
    </>
  );
};
export default App;
```

:::

## ImagePreview

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否展示預覽圖片 | `boolean` | `false` |
| videos | 預覽的視頻數組（視頻自動放到圖片之前） | `Array<Object>` | `[]` |
| images | 預覽圖片數組 | `{ src: string }[]` | `[]` |
| autoPlay | 自動輪播時長，0錶示不會自動輪播 | `number` \| `string` | `3000` |
| defaultValue | 初始頁碼 | `number` | `1` |
| value | 頁碼，受控 | `number` | `1` |
| indicator | 分頁指示器是否展示 | `boolean` | `false` |
| indicatorColor | 分頁指示器選中的顏色 | `string` | `#fff` |
| closeOnContentClick | 點擊圖片可以退出預覽 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `boolean` \| `ReactNode` | `false` |
| onChange | 切換時觸發 | `(value:number) => void` | `-` |
| onClose | 點擊遮罩關閉圖片預覽時觸發 | `() => void` | `-` |