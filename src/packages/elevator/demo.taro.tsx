import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'
import Demo3 from './demos/taro/demo3'
import Demo4 from './demos/taro/demo4'
import Demo5 from './demos/taro/demo5'

const ElevatorDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      customIndex: '自定义索引key',
      sticky: '索引吸顶',
      customContent: '自定义内容',
      showKeys: '不展示右侧导航',
      anhui: '安徽',
      beijing: '北京',
      guangxi: '广西',
      guangdong: '广东',
      hunan: '湖南',
      hubei: '湖北',
      shanghai: '上海',
      shenzhen: '深圳',
      guangzhou: '广州',
      hangzhou: '杭州',
      chengdu: '成都',
      xian: '西安',
      tianjin: '天津',
      wuhan: '武汉',
      changsha: '长沙',
      chongqin: '重庆',
      suzhou: '苏州',
      nanjing: '南京',
      xining: '西宁',
      lanzhou: '兰州',
      shijiazhuang: '石家庄',
      qinhuangdao: '秦皇岛',
      dalian: '大连',
      haerbin: '哈尔滨',
      changchun: '长春',
      taiyuan: '太原',
      fujian: '福建',
      gansu: '甘肃',
      guizhou: '贵州',
      hainan: '海南',
      hebei: '河北',
      henan: '河南',
      heilongjiang: '黑龙江',
      jilin: '吉林',
      jiangsu: '江苏',
      jiangxi: '江西',
      liaoning: '辽宁',
      one: '一',
      two: '二',
      three: '三',
    },
    'zh-TW': {
      basic: '基础用法',
      customIndex: '自定義索引key',
      sticky: '索引吸頂',
      customContent: '自定義內容',
      showKeys: '不展示右側導航',
      anhui: '安徽',
      beijing: '北京',
      guangxi: '廣西',
      guangdong: '廣東',
      hunan: '湖南',
      hubei: '湖北',
      shanghai: '上海',
      shenzhen: '深圳',
      guangzhou: '廣州',
      hangzhou: '杭州',
      chengdu: '成都',
      xian: '西安',
      tianjin: '天津',
      wuhan: '武漢',
      changsha: '長沙',
      chongqin: '重慶',
      suzhou: '蘇州',
      nanjing: '南京',
      xining: '西寧',
      lanzhou: '蘭州',
      shijiazhuang: '石家莊',
      qinhuangdao: '秦皇島',
      dalian: '大連',
      haerbin: '哈爾濱',
      changchun: '長春',
      taiyuan: '太原',
      fujian: '福建',
      gansu: '甘肅',
      guizhou: '貴州',
      hainan: '海南',
      hebei: '河北',
      henan: '河南',
      heilongjiang: '黑龍江',
      jilin: '吉林',
      jiangsu: '江蘇',
      jiangxi: '江西',
      liaoning: '遼寧',
      one: '一',
      two: '二',
      three: '三',
    },
    'en-US': {
      basic: 'Basic Usage',
      customIndex: 'Custom index key',
      sticky: 'Index ceiling',
      customContent: 'Custom content',
      showKeys: 'Right navigation is not displayed',
      anhui: 'AnHui',
      beijing: 'BeiJing',
      guangxi: 'GuangXi',
      guangdong: 'GuangDong',
      hunan: 'HuNan',
      hubei: 'HuBei',
      shanghai: 'ShangHai',
      shenzhen: 'ShenZhen',
      guangzhou: 'GuangZhou',
      hangzhou: 'HangZhou',
      chengdu: 'ChengDu',
      xian: 'XiAn',
      tianjin: 'TianJin',
      wuhan: 'WuHan',
      changsha: 'ChangSha',
      chongqin: 'ChongQin',
      suzhou: 'SuZhou',
      nanjing: 'NanJing',
      xining: 'XiNing',
      lanzhou: 'LanZhou',
      shijiazhuang: 'ShiJiaZhuang',
      qinhuangdao: 'QinHuangDao',
      dalian: 'DaLian',
      haerbin: 'HaErBin',
      changchun: 'ChangChun',
      taiyuan: 'TaiYuan',
      fujian: 'FuJian',
      gansu: 'GanSu',
      guizhou: 'GuiZhou',
      hainan: 'HaiNan',
      hebei: 'HeBei',
      henan: 'HeNan',
      heilongjiang: 'HeiLongJiang',
      jilin: 'JiLin',
      jiangsu: 'JiangSu',
      jiangxi: 'JiangXi',
      liaoning: 'LiaoNing',
      one: 'one',
      two: 'two',
      three: 'three',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <div style={{ background: 'white' }}>
          <Demo1 />
        </div>
        <h2>{translated.customIndex}</h2>
        <div style={{ background: 'white' }}>
          <Demo2 />
        </div>
        <h2>{translated.showKeys}</h2>
        <div style={{ background: 'white' }}>
          <Demo3 />
        </div>
        <h2>{translated.sticky}</h2>
        <div style={{ background: 'white' }}>
          <Demo4 />
        </div>
        <h2>{translated.customContent}</h2>
        <div style={{ background: 'white' }}>
          <Demo5 />
        </div>
      </div>
    </>
  )
}

export default ElevatorDemo
