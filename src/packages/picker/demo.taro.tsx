import React, { useState, useRef } from 'react'
import { Cell, Picker } from '@/packages/nutui.react.taro'

interface pickerRefState {
  updateChooseValue: (
    index: number,
    value: string,
    cacheValueData: any[]
  ) => void
}
interface IResValue {
  label: number
  value: string
}
const PickerDemo = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const pickerRef1 = useRef<pickerRefState>(null)
  const pickerRef2 = useRef<pickerRefState>(null)
  const pickerRef3 = useRef<pickerRefState>(null)
  const APIData = [
    {
      label: 1,
      array: [
        {
          label: 1,
          value: '朝阳区',
        },
        {
          label: 2,
          value: '海淀区',
        },
        {
          label: 3,
          value: '大兴区',
        },
        {
          label: 4,
          value: '东城区',
        },
        {
          label: 5,
          value: '西城区',
        },
        {
          label: 6,
          value: '丰台区',
        },
      ],
    },
    {
      label: 2,
      array: [
        {
          label: 1,
          value: '黄浦区',
        },
        {
          label: 2,
          value: '长宁区',
        },
        {
          label: 3,
          value: '普陀区',
        },
        {
          label: 4,
          value: '杨浦区',
        },
        {
          label: 5,
          value: '浦东新区',
        },
      ],
    },
  ]
  const listData1 = [
    [
      {
        label: 1,
        value: '南京市',
      },
      {
        label: 2,
        value: '无锡市',
      },
      {
        label: 3,
        value: '海北藏族自治区',
      },
      {
        label: 4,
        value: '北京市',
      },
      {
        label: 5,
        value: '连云港市',
      },
      {
        label: 6,
        value: '浙江市',
      },
      {
        label: 7,
        value: '江苏市',
      },
      {
        label: 8,
        value: '大庆市',
      },
      {
        label: 9,
        value: '绥化市',
      },
      {
        label: 10,
        value: '潍坊市',
      },
      {
        label: 11,
        value: '请按市',
      },
      {
        label: 12,
        value: '乌鲁木齐市',
      },
    ],
  ]
  const listData2 = [
    ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    ['上午', '下午', '晚上'],
  ]

  const [custmerCityData, setCustmerCityData] = useState([
    [
      {
        label: 1,
        value: '北京',
      },
      {
        label: 2,
        value: '上海',
      },
    ],
  ])

  const setChooseValueCustmer = (chooseData: any[]) => {
    const str = chooseData.map((item) => item.value).join('-')
    setCityCustmer(str)
    console.log('多级联动用法选中项：', str)
  }

  const closeUpdateChooseValueCustmer = (chooseData: any[], ref: any) => {
    // 此处模拟查询API，如果数据缓存了不需要再重新请求
    setTimeout(() => {
      const { label, value } = chooseData[0]
      const resItems = APIData.find((item) => item.label == label)
      if (resItems && resItems.array.length) {
        setCustmerCityData((data) => {
          const result = [...data]
          result[1] = resItems?.array || []
          return result
        })

        // 复原位置
        ref.current?.updateChooseValue(0, chooseData[0])
        ref.current?.updateChooseValue(1, chooseData[1])
      }
    }, 100)
  }

  const updateChooseValueCustmer = (
    index: number,
    resValue: IResValue,
    cacheValueData: any[]
  ) => {
    // 本demo为二级联动，所以限制只有首列变动的时候触发事件
    if (index === 0) {
      // 此处模拟查询API，如果数据缓存了不需要再重新请求
      const { label, value } = resValue
      setTimeout(() => {
        const resItems = APIData.find((item) => item.label == label)
        if (resItems && resItems.array.length) {
          let cityData: any[] = []
          setCustmerCityData((data) => {
            const result = [...data]
            result[1] = resItems?.array || []
            cityData = [...result]
            return result
          })
          setTimeout(() => {
            // 更新第二列位置
            pickerRef3.current?.updateChooseValue(
              index + 1,
              cityData[1]?.[0],
              cacheValueData
            )
          }, 200)
        }
      }, 100)
    }
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
          <span>
            <label>基础用法</label>
          </span>
        </Cell>
        <Picker
          isVisible={isVisible1}
          listData={listData1}
          onClose={() => setIsVisible1(false)}
          defaultValueData={[]}
          ref={pickerRef1}
        />
        <h2>多列用法</h2>
        <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
          <span>
            <label>多列用法</label>
          </span>
        </Cell>
        <Picker
          isVisible={isVisible2}
          listData={listData2}
          onClose={() => setIsVisible2(false)}
          defaultValueData={['周四', '下午']}
          onConfirm={(list: any[]) => console.log('多列用法选中项：', list)}
          ref={pickerRef2}
        />
        <h2>多级联动</h2>
        <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
          <span>
            <label>
              多级联动
              <span>{cityCustmer}</span>
            </label>
          </span>
        </Cell>
        <Picker
          isVisible={isVisible3}
          listData={custmerCityData}
          onClose={() => setIsVisible3(false)}
          defaultValueData={[]}
          onConfirm={(list: any[]) => setChooseValueCustmer(list)}
          onChoose={(index: number, value: IResValue, list: any[]) =>
            updateChooseValueCustmer(index, value, list)
          }
          onCloseUpdate={(list: any[]) =>
            closeUpdateChooseValueCustmer(list, pickerRef3)
          }
          ref={pickerRef3}
        />
      </div>
    </>
  )
}

export default PickerDemo
