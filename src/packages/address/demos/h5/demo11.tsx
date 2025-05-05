import React, { useEffect, useState } from 'react'
import { Address, Cell, CascaderOption } from '@nutui/nutui-react'

const Demo1 = () => {
  const [text, setText] = useState<string>('选择地址')
  const [hotList] = useState([
    { name: '北京' },
    { name: '上海' },
    { name: '广州' },
    { name: '深圳' },
    { name: '杭州' },
    { name: '南京' },
    { name: '苏州' },
    { name: '天津' },
    { name: '武汉' },
    { name: '长沙' },
  ])
  const [options, setOptions] = useState<CascaderOption[]>([])
  useEffect(() => {
    setOptions([
      {
        value: '安徽',
        text: '安徽',
        wordCode: 'A',
        children: [
          {
            value: '安庆市',
            text: '安庆市',
            wordCode: 'A',
            disabled: true,
            children: [
              {
                value: '大观区',
                text: '大观区',
                disabled: true,
                wordCode: 'D',
              },
              { value: '怀宁县', text: '怀宁县', wordCode: 'H' },
              { value: '岳西县', text: '岳西县', wordCode: 'Y' },
              { value: '迎江区', text: '迎江区', wordCode: 'Y' },
              { value: '宜秀区', text: '宜秀区', wordCode: 'Y' },
            ],
          },
          {
            value: '合肥市',
            text: '合肥市',
            wordCode: 'H',
            children: [
              { value: '合肥高新', text: '合肥高新', wordCode: 'H' },
              { value: '合肥经济', text: '合肥经济', wordCode: 'H' },
            ],
          },
          {
            value: '淮北市',
            text: '淮北市',
            wordCode: 'H',
            children: [
              { value: '杜集区', text: '杜集区', wordCode: 'D' },
              { value: '烈山区', text: '烈山区', wordCode: 'L' },
            ],
          },
          {
            value: '淮南市',
            text: '淮南市',
            wordCode: 'H',
            children: [{ value: '八公山区', text: '八公山区', wordCode: 'B' }],
          },
          {
            value: '黄山市',
            text: '黄山市',
            wordCode: 'H',
            children: [
              { value: '黄山区', text: '黄山区', wordCode: 'H' },
              { value: '徽州区', text: '徽州区', wordCode: 'H' },
            ],
          },
        ],
      },
      {
        value: '北京',
        text: '北京',
        wordCode: 'B',
        children: [
          {
            value: '朝阳区',
            text: '朝阳区',
            wordCode: 'C',
          },
          {
            value: '昌平区',
            text: '昌平区',
            wordCode: 'C',
          },
          {
            value: '大兴区',
            text: '大兴区',
            wordCode: 'D',
          },
          {
            value: '东城区',
            text: '东城区',
            wordCode: 'D',
          },
          {
            value: '房山区',
            text: '房山区',
            wordCode: 'F',
          },
          {
            value: '丰台区',
            text: '丰台区',
            wordCode: 'F',
          },
        ],
      },
      {
        value: '重庆',
        text: '重庆',
        wordCode: 'C',
      },
      {
        value: '福建',
        text: '福建',
        wordCode: 'F',
      },
      {
        value: '贵州',
        text: '贵州',
        wordCode: 'G',
      },
      {
        value: '广东',
        text: '广东',
        wordCode: 'G',
        children: [
          {
            value: '广州市',
            text: '广州市',
            wordCode: 'G',
            children: [
              {
                value: '白云区',
                text: '白云区',
                wordCode: 'B',
              },
              {
                value: '黄埔区',
                text: '黄埔区',
                wordCode: 'H',
              },
              {
                value: '花都区',
                text: '花都区',
                wordCode: 'H',
              },
              {
                value: '海珠区',
                text: '海珠区',
                wordCode: 'H',
              },
            ],
          },
          {
            value: '深圳市',
            text: '深圳市',
            wordCode: 'S',
            children: [
              {
                value: '宝安区',
                text: '宝安区',
                wordCode: 'B',
              },
              {
                value: '罗湖区',
                text: '罗湖区',
                wordCode: 'L',
              },
              {
                value: '龙岗区',
                text: '龙岗区',
                wordCode: 'L',
              },
              {
                value: '龙华区',
                text: '龙华区',
                wordCode: 'L',
              },
            ],
          },
        ],
      },
      {
        value: '广西',
        text: '广西',
        wordCode: 'G',
      },
      {
        value: '甘肃',
        text: '甘肃',
        wordCode: 'G',
      },
      {
        value: '河北',
        text: '河北',
        wordCode: 'H',
        disabled: true,
      },
      {
        value: '河南',
        text: '河南',
        wordCode: 'H',
        disabled: true,
      },
      {
        value: '湖南',
        text: '湖南',
        wordCode: 'H',
        disabled: true,
      },
      {
        value: '湖北',
        text: '湖北',
        wordCode: 'H',
        disabled: true,
      },
      {
        value: '山东',
        text: '山东',
        wordCode: 'S',
      },
      {
        value: '山西',
        text: '山西',
        wordCode: 'S',
      },
      {
        value: '上海',
        text: '上海',
        wordCode: 'S',
        children: [
          {
            value: '宝山区',
            text: '宝山区',
            wordCode: 'B',
          },
          {
            value: '黄埔区',
            text: '黄埔区',
            wordCode: 'H',
          },
          {
            value: '虹口区',
            text: '虹口区',
            wordCode: 'H',
          },
          {
            value: '嘉定区',
            text: '嘉定区',
            wordCode: 'J',
          },
          {
            value: '静安区',
            text: '静安区',
            wordCode: 'J',
          },
          {
            value: '金山区',
            text: '金山区',
            wordCode: 'J',
          },
        ],
      },
      {
        value: '陕西',
        text: '陕西',
        wordCode: 'S',
      },
      {
        value: '四川',
        text: '四川',
        wordCode: 'S',
      },
      {
        value: '浙江',
        text: '浙江',
        wordCode: 'Z',
      },
    ])
  }, [])
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell
        title="使用电梯地址"
        description={text}
        onClick={() => setVisible(true)}
      />
      <Address
        type="elevator"
        title="选择地址"
        visible={visible}
        hotList={hotList}
        options={options}
        onChange={(value) => {
          console.log('value', value)
          setText(value.join(''))
        }}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo1
