#  ImagePreview

## Intro

Support full screen preview videos and images, support functional call.

## Install


```tsx
import { ImagePreview } from '@nutui/nutui-react'
```


## Code demonstration

### Basic Usage

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

    const hideFn1 =() => {
        setShowPreview1(false)
    }

  return (
    <>
        <ImagePreview images={images} visible={showPreview1} onClose={hideFn1} />
        <Cell title="Show preview"  onClick={showFn1} />
    </>
  );
};
export default App;
```
:::

### Click on the thumbnail to switch

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


### With Init No

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

    const hideFn2 =() => {
        setShowPreview2(false)
    }

  return (
    <>
        <ImagePreview images={images} defaultValue={3} visible={showPreview2} onClose={hideFn2} />
        <Cell title="With init no"  onClick={showFn2} />
    </>
  );
};
export default App;
```
:::


### with control

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
          title="control"
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


### With Pagination

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

    const hideFn3 =() => {
        setShowPreview3(false)
    }

  return (
    <>
        <ImagePreview images={images} visible={showPreview3} indicator indicatorColor="red" onClose={hideFn3} />
        <Cell title="With pagination"  onClick={showFn3} />
    </>
  );
};
export default App;
```
:::

### With Videos

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

    const hideFn4 =() => {
        setShowPreview4(false)
    }

  return (
    <>
        <ImagePreview images={images} videos={videos} visible={showPreview4} onClose={hideFn4} />
        <Cell title="With videos"  onClick={showFn4} />
    </>
  );
};
export default App;
```
:::



## ImagePreview

### Props

| Property | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| visible | Whether to show preview |  `boolean` | `false` |
| videos | Videos Array(Videos are before images) | `Array<Object>` | `[]`
| images | Images array | `{ src: string }[]` | `[]` |
| autoPlay | Autoplay time, zero means not autoplay | `number` \| `string`  | `3000`  |
| defaultValue | Init no |  `number` | `1` |
| value | value,controlled |  `number` | `1` |
| indicator | Whether to show pagination    |  `boolean` | `false` |
| indicatorColor   | Pagination color    |  `string`  | `#fff`  |
| closeOnContentClick   | Click image to exit preview    |  `boolean`  | `false`  |
| onClose | Emitted when closing ImagePreview|`() => void` | `-` | 