import React, { useState } from 'react'
import Icon from '../icon'
import { SearchBar } from './searchbar'
import { useConfig } from '@/packages/configprovider'

const SearchBarDemo = () => {
  const { locale } = useConfig()

  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return (
    <>
      <div className="demo">
        <h2>{locale.searchbar.title1}</h2>
        <SearchBar placeholder={locale.searchbar.basePlaceholder} />
        <h2>{locale.searchbar.title2}</h2>
        <SearchBar shape="round" maxLength={5} />
        <h2>{locale.searchbar.title3}</h2>
        <SearchBar
          background="linear-gradient(to right, #9866F0, #EB4D50)"
          inputBackground="#999"
          align="right"
        />
        <h2>{locale.searchbar.title4}</h2>
        <SearchBar
          label={locale.searchbar.text}
          actionText={locale.searchbar.test}
        />
        <h2>{locale.searchbar.title5}</h2>
        <SearchBar
          leftoutIcon={<Icon name="heart-fill1" size="14" />}
          rightoutIcon={<Icon name="star-fill" size="14" />}
        />
        <h2>{locale.searchbar.title6}</h2>
        <SearchBar
          onChange={(val: string, e: Event) => change(val, e)}
          maxLength={10}
        />
        <span className="val-text">value：{value}</span>
      </div>
    </>
  )
}

export default SearchBarDemo
