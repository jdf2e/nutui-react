// 抽象配置中心

import homefeatures1 from '../assets/images/img-home-features1.png';
import homefeatures2 from '../assets/images/img-home-features2.png';
import homefeatures3 from '../assets/images/img-home-features3.png';
import homefeatures5 from '../assets/images/img-home-features5.png';

// React 官网配置
export const SiteReact = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui-react',
    releases: 'https://github.com/jdf2e/nutui-react/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui-react/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/'
    },
    {
      name: 'nutui-vue',
      link: 'https://nutui.jd.com/'
    }
  ],
  newHeader: [],
  header: [
    {
      name: 'intro-react,theme-react,start-react,international-react,contributing-react',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro-react',
      pathName: 'intro-react'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: '/zh-CN/component/button'
    }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '60+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
    ],
    // 是否展示taro楼层
    taroShow: true,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'react'
};
// React Taro 官网配置
export const SiteReactTaro = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react',
    gitee: '',
    releases: 'https://github.com/jdf2e/nutui-react/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui-react/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/'
    },
    {
      name: 'nutui-vue',
      link: 'https://nutui.jd.com/'
    }
  ],
  newHeader: [],
  header: [
    {
      name: 'intro-react,theme-react,starttaro-react,international-react,contributing-react',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro-react',
      pathName: 'intro-react'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: '/zh-CN/component/button'
    }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '60+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
    ],
    // 是否展示taro楼层
    taroShow: true,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'react'
};

