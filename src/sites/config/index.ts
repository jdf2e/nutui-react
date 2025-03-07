import reactConfig from '../../config.json';
import {
  SiteReact,
  SiteReactTaro,
} from './baseConfig';
import ReactConfig from '../../config.json';

let config: any = {};

const guide = [
  {
    type: 'Vue',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/221256/40/8490/1929/61d64810Ec6a88d27/99270cce560545d5.png',
    data: [
      {
        link: '/h5/vue/4x/',
        language: ['Vue3'],
        app: 'App 10.0'
      },
      {
        name: '3.x',
        link: '/3x/',
        language: ['Vue3'],
        app: 'App 10.0'
      }
    ]
  }
];


const moreGuide = [
  {
    type: {
      cName: '基础组件',
      eName: 'Basic Component'
    },
    icon: '',
    datas: [
      {
        plat: {
          cName: 'H5',
          eName: 'H5'
        },
        data: [
          {
            name: 'NutUI-Vue',
            link: '/h5/vue/4x/#/zh-CN/guide/intro',
            language: ['Vue3'],
            app: 'App 10.0'
          },
          {
            name: 'NutUI-React',
            link: '/h5/react/2x/#/zh-CN/guide/intro-react',
            language: ['React18'],
            app: 'App 10.0'
          }
        ]
      },
      {
        plat: {
          cName: '小程序',
          eName: 'Applets'
        },
        data: [
          {
            name: 'NutUI-Vue',
            link: '/taro/vue/4x/#/zh-CN/guide/intro',
            language: ['Vue3', 'Taro'],
            app: 'App 10.0'
          },
          {
            name: 'NutUI-React',
            link: '/taro/react/2x/#/zh-CN/guide/intro-react',
            language: ['React18', 'Taro'],
            app: 'App 10.0'
          },
          {
            name: 'NutUI-Uni',
            link: 'https://ext.dcloud.net.cn/search?q=nutui',
            language: ['Vue3', 'uni-app'],
            app: 'App 10.0'
          }
        ]
      }
    ]
  },
  {
    type: {
      cName: '高级组件',
      eName: 'Advanced Component'
    },
    icon: '',
    datas: [
      {
        data: [
          {
            name: 'NutUI-Biz',
            link: '/biz/h5/react/1x/#/zh-CN/guide/intro',
            language: ['React'],
            app: 'App 10.0'
          },
          {
            name: 'NutUI-Bingo',
            link: '/bingo/index.html#/',
            language: ['Vue3', 'Taro'],
            app: 'App 10.0'
          },
          {
            name: 'NutUI-Cat',
            link: '/cat/index.html#/',
            language: ['Vue2'],
            app: 'App 10.0'
          }
        ]
      }
    ]
  }
];

const reactGuide = [
  {
    type: 'React',
    icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/93992/33/35657/10303/63c0fddbFa8977e27/8d099681ad788fc8.png',
    data: [
      {
        name: '3x',
        link: '/h5/react/3x/',
        language: ['React18'],
        app: 'App 10.0'
      },
      {
        name: '2x',
        link: '/h5/react/2x/',
        language: ['React18'],
        app: 'App 10.0'
      },
      {
        name: '1.x',
        link: '/h5/react/1x/',
        language: ['React18'],
        app: 'App 10.0'
      }
    ]
  }
];

const reactTaroGuide = [
  {
    type: 'React',
    icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/93992/33/35657/10303/63c0fddbFa8977e27/8d099681ad788fc8.png',
    data: [
      {
        name: ReactConfig.version,
        link: '/taro/react/3x/',
        language: ['React18', 'Taro'],
        app: 'App 10.0'
      },
      {
        name: '2x',
        link: '/taro/react/2x/',
        language: ['React18', 'Taro'],
        app: 'App 10.0'
      },
      {
        name: '1.x',
        link: '/taro/react/1x/',
        language: ['React18', 'Taro'],
        app: 'App 10.0'
      }
    ]
  }
];

const reactNativeGuide = [
  {
    type: 'React Native',
    icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/93992/33/35657/10303/63c0fddbFa8977e27/8d099681ad788fc8.png',
    data: [
      {
        name: '0.x',
        link: '/react-native/',
        language: ['React18'],
        app: 'App 10.0'
      }
    ]
  }
];

const businessGuide = [
  {
    data: [
      {
        name: 'NutUI-Biz',
        link: '/biz/h5/react/1x/#/zh-CN/guide/intro',
        language: ['React']
      },
      {
        name: 'NutUI-Bingo',
        link: '/bingo/index.html#/',
        language: ['Vue3', 'Taro']
      },
      {
        name: 'NutUI-Cat',
        link: '/cat/index.html#/',
        language: ['Vue2']
      }
    ]
  }

  // {
  //   type: 'React',
  //   icon: 'https://img10.360buyimg.com/imagetools/jfs/t1/93992/33/35657/10303/63c0fddbFa8977e27/8d099681ad788fc8.png',
  //   data: [
  //     {
  //       name: '1.x',
  //       link: 'https://nutui.jd.com/react',
  //       language: ['React18'],
  //       app: 'App 10.0'
  //     }
  //   ]
  // }
];

const products = [
  {
    type: 'React',
    data: [
      {
        name: 'NutUI React',
        icon:
          'https://img12.360buyimg.com/imagetools/jfs/t1/192500/27/37524/4524/649d5065F7e5fbef6/afe567692acba3b0.png',
        status: 1,
        link: '/h5/react/3x/#/zh-CN/guide/intro-react'
      },
      {
        name: 'NutUI React Taro',
        icon:
          'https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png',
        status: 1,
        link: '/taro/react/3x/#/zh-CN/guide/intro-react'
      },
      {
        name: 'NutUI React Native',
        icon:
          'https://img10.360buyimg.com/imagetools/jfs/t1/93992/33/35657/10303/63c0fddbFa8977e27/8d099681ad788fc8.png',
        status: 1,
        link: 'https://nutui.jd.com/react-native/#/zh-CN/guide/intro'
      }
    ]
  },
  {
    type: 'Vue',
    data: [
      {
        name: 'NutUI Vue',
        icon:
          'https://img12.360buyimg.com/imagetools/jfs/t1/192500/27/37524/4524/649d5065F7e5fbef6/afe567692acba3b0.png',
        status: 1,
        link: '/h5/vue/4x/#/zh-CN/guide/intro'
      },
      {
        name: 'NutUI Vue Taro',
        icon:
          'https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png',
        status: 1,
        link: '/taro/vue/4x/#/zh-CN/guide/intro'
      },
      {
        name: 'NutUI uniapp',
        icon: 'https://img13.360buyimg.com/imagetools/jfs/t1/113716/40/39920/321/64c3764dF986d8400/f4474acb3a73c055.png',
        status: 1,
        link: 'https://ext.dcloud.net.cn/search?q=nutui'
      }
    ]
  }
];
if ((import.meta as any).env.BASE_URL.includes('react')) {
  config = {
    ...reactConfig,
    ...SiteReact
  };
} 

export const {
  nav,
  docs,
  version,
  demoUrl,
  homePage,
  versions,
  newHeader,
  header,
  language,
  repository,
  newRepository
} = config;
export {
  guide,
  moreGuide,
  reactGuide,
  reactTaroGuide,
  reactNativeGuide,
  businessGuide,
  products,
  SiteReactTaro,
};
