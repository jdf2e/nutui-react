import React from 'react'
import { Elevator, elevatorContext } from './elevator'
import { useTranslate } from '../../sites/assets/locale'
import Icon from '../icon'

interface T {
  basic: string
  customIndex: string
  sticky: string
  customContent: string
  anhui: string
  beijing: string
  guangxi: string
  guangdong: string
  hunan: string
  hubei: string
  shanghai: string
  shenzhen: string
  guangzhou: string
  hangzhou: string
  chengdu: string
  xian: string
  tianjin: string
  wuhan: string
  changsha: string
  chongqin: string
  suzhou: string
  nanjing: string
  xining: string
  lanzhou: string
  shijiazhuang: string
  qinhuangdao: string
  dalian: string
  haerbin: string
  changchun: string
  taiyuan: string
  fujian: string
  gansu: string
  guizhou: string
  hainan: string
  hebei: string
  henan: string
  heilongjiang: string
  jilin: string
  jiangsu: string
  jiangxi: string
  liaoning: string
  one: string
  two: string
  three: string
}
const ElevatorDemo = () => {
  const acceptKey = 'num'
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      customIndex: '自定义索引key',
      sticky: '索引吸顶',
      customContent: '自定义内容',
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
      basic: '基本用法',
      customIndex: '自定義索引key',
      sticky: '索引吸頂',
      customContent: '自定義內容',
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
  const dataList = [
    {
      title: 'A',
      list: [
        {
          name: translated.anhui,
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: translated.beijing,
          id: 2,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: translated.guangxi,
          id: 3,
        },
        {
          name: translated.guangdong,
          id: 4,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: translated.hunan,
          id: 5,
        },
        {
          name: translated.hubei,
          id: 6,
        },
        {
          name: translated.henan,
          id: 7,
        },
      ],
    },
  ]
  const dataList2 = [
    {
      num: translated.one,
      list: [
        {
          name: translated.beijing,
          id: 1,
        },
        {
          name: translated.shanghai,
          id: 2,
        },
        {
          name: translated.shenzhen,
          id: 3,
        },
        {
          name: translated.guangzhou,
          id: 4,
        },
        {
          name: translated.hangzhou,
          id: 5,
        },
      ],
    },
    {
      num: translated.two,
      list: [
        {
          name: translated.chengdu,
          id: 6,
        },
        {
          name: translated.xian,
          id: 7,
        },
        {
          name: translated.tianjin,
          id: 8,
        },
        {
          name: translated.wuhan,
          id: 9,
        },
        {
          name: translated.changsha,
          id: 10,
        },
        {
          name: translated.chongqin,
          id: 11,
        },
        {
          name: translated.suzhou,
          id: 12,
        },
        {
          name: translated.nanjing,
          id: 13,
        },
      ],
    },
    {
      num: translated.three,
      list: [
        {
          name: translated.xining,
          id: 14,
        },
        {
          name: translated.lanzhou,
          id: 15,
        },
        {
          name: translated.shijiazhuang,
          id: 16,
        },
        {
          name: translated.qinhuangdao,
          id: 17,
        },
        {
          name: translated.dalian,
          id: 18,
        },
        {
          name: translated.haerbin,
          id: 19,
        },
        {
          name: translated.changchun,
          id: 20,
        },
        {
          name: translated.taiyuan,
          id: 21,
        },
      ],
    },
  ]
  const dataList3 = [
    {
      title: 'A',
      list: [
        {
          name: translated.anhui,
          id: 1,
        },
      ],
    },
    {
      title: 'B',
      list: [
        {
          name: translated.beijing,
          id: 2,
        },
      ],
    },
    {
      title: 'C',
      list: [
        {
          name: translated.chongqin,
          id: 3,
        },
      ],
    },
    {
      title: 'F',
      list: [
        {
          name: translated.anhui,
          id: 4,
        },
      ],
    },
    {
      title: 'G',
      list: [
        {
          name: translated.guangxi,
          id: 5,
        },
        {
          name: translated.guangdong,
          id: 6,
        },
        {
          name: translated.gansu,
          id: 7,
        },
        {
          name: translated.guizhou,
          id: 8,
        },
      ],
    },
    {
      title: 'H',
      list: [
        {
          name: translated.hunan,
          id: 9,
        },
        {
          name: translated.hubei,
          id: 10,
        },
        {
          name: translated.hainan,
          id: 11,
        },
        {
          name: translated.hebei,
          id: 12,
        },
        {
          name: translated.henan,
          id: 13,
        },
        {
          name: translated.heilongjiang,
          id: 14,
        },
      ],
    },
    {
      title: 'J',
      list: [
        {
          name: translated.jilin,
          id: 15,
        },
        {
          name: translated.jiangsu,
          id: 16,
        },
        {
          name: translated.jiangxi,
          id: 17,
        },
      ],
    },
    {
      title: 'L',
      list: [
        {
          name: translated.liaoning,
          id: 18,
        },
      ],
    },
  ]
  const onClickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
  }

  const onClickIndex = (key: string) => {
    console.log(key)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Elevator
          indexList={dataList}
          height="260"
          onClickItem={(key: string, item: any) => onClickItem(key, item)}
          onClickIndex={(key: string) => onClickIndex(key)}
        />
        <h2>{translated.customIndex}</h2>
        <Elevator
          indexList={dataList2}
          height="220"
          acceptKey={acceptKey}
          onClickItem={(key: string, item: any) => onClickItem(key, item)}
          onClickIndex={(key: string) => onClickIndex(key)}
        />
        <h2>{translated.sticky}</h2>
        <Elevator
          indexList={dataList3}
          isSticky
          height="220"
          onClickItem={(key: string, item: any) => onClickItem(key, item)}
          onClickIndex={(key: string) => onClickIndex(key)}
        />
        <h2>{translated.customContent}</h2>
        <Elevator
          indexList={dataList}
          height="260"
          onClickItem={(key: string, item: any) => onClickItem(key, item)}
          onClickIndex={(key: string) => onClickIndex(key)}
        >
          <elevatorContext.Consumer>
            {(value) => {
              return (
                <>
                  <Icon name="JD" size="12" />
                  <span style={{ marginLeft: '15px' }}>{value?.name}</span>
                </>
              )
            }}
          </elevatorContext.Consumer>
        </Elevator>
      </div>
    </>
  )
}

export default ElevatorDemo
