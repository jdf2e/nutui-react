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
        app: 'App 15.0'
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
  SiteReactTaro,
};
