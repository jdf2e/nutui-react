import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CalendarCard } from '../calendarcard'

test('test defaultValue render', async () => {
  const { container } = render(
    <CalendarCard defaultValue={new Date('2023-01-25')} />
  )

  // active
  const activeDay = container.querySelectorAll(
    '.nut-calendarcard-day.current.active .nut-calendarcard-day-inner'
  )
  expect(activeDay.length).toBe(1)
  expect(activeDay[0].innerHTML).toBe('25')

  // prev
  const prevDays = container.querySelectorAll('.nut-calendarcard-day.prev')
  expect(prevDays.length).toBe(0)

  // next
  const nextDays = container.querySelectorAll('.nut-calendarcard-day.next')
  expect(nextDays.length).toBe(11)

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  expect(currentDays.length).toBe(42 - 0 - 11)
})

test('test onChange & onDayClick & onPageChange', async () => {
  const onChange = jest.fn()
  const onDayClick = jest.fn()
  const onPageChange = jest.fn()
  const { container } = render(
    <CalendarCard
      defaultValue={new Date('2023-01-25')}
      onChange={onChange}
      onDayClick={onDayClick}
      onPageChange={onPageChange}
    />
  )

  expect(onPageChange).toBeCalledTimes(1)

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  fireEvent.click(currentDays[1])
  expect(onDayClick).toBeCalledWith({
    year: 2023,
    month: 1,
    date: 2,
    type: 'current',
  })
  fireEvent.click(currentDays[3])
  fireEvent.click(currentDays[5])
  expect(onChange).toBeCalledTimes(3)

  const nextDays = container.querySelectorAll('.nut-calendarcard-day.next')
  fireEvent.click(nextDays[0])
  expect(onDayClick).toBeCalledTimes(3)
  expect(onPageChange).toBeCalledTimes(1)
})

test('test type multiple', async () => {
  const { container } = render(
    <CalendarCard defaultValue={new Date('2023-01-25')} type="multiple" />
  )

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  fireEvent.click(currentDays[1]) // 0102
  fireEvent.click(currentDays[3]) // 0104
  fireEvent.click(currentDays[5]) // 0106
  const activeDays = container.querySelectorAll('.nut-calendarcard-day.active')
  expect(activeDays.length).toBe(4)
})

test('test type range', async () => {
  const { container } = render(
    <CalendarCard defaultValue={[new Date('2023-01-25')]} type="range" />
  )

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  fireEvent.click(currentDays[1]) // 0102
  fireEvent.click(currentDays[3]) // 0104
  fireEvent.click(currentDays[8]) // 0109
  const start = container.querySelector(
    '.nut-calendarcard-day.start .nut-calendarcard-day-inner'
  )
  expect(start?.innerHTML).toBe('4') // 0104
  const end = container.querySelector(
    '.nut-calendarcard-day.end .nut-calendarcard-day-inner'
  )
  expect(end?.innerHTML).toBe('9') // 0109
  const midDays = container.querySelectorAll('.nut-calendarcard-day.mid')
  expect(midDays.length).toBe(4) // 0105-0108
})

test('test type week', async () => {
  const { container } = render(
    <CalendarCard
      defaultValue={[new Date('2023-01-22'), new Date('2023-01-28')]}
      type="week"
    />
  )

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  fireEvent.click(currentDays[8]) // 0109
  const start = container.querySelector(
    '.nut-calendarcard-day.start .nut-calendarcard-day-inner'
  )
  expect(start?.innerHTML).toBe('8') // 0108
  const end = container.querySelector(
    '.nut-calendarcard-day.end .nut-calendarcard-day-inner'
  )
  expect(end?.innerHTML).toBe('14') // 0114
  const midDays = container.querySelectorAll('.nut-calendarcard-day.mid')
  expect(midDays.length).toBe(5) // 0109-0113
})

test('test disableDay', async () => {
  const onDayClick = jest.fn()
  const { container } = render(
    <CalendarCard
      defaultValue={new Date('2023-01-24')}
      disableDay={(day) => {
        const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay()
        return d === 1 || d === 3
      }}
      onDayClick={onDayClick}
    />
  )

  // disabled
  const disabledDays = container.querySelectorAll(
    '.nut-calendarcard-day.disabled'
  )
  expect(disabledDays.length).toBe(12)

  // current
  const currentDays = container.querySelectorAll(
    '.nut-calendarcard-day.current'
  )
  fireEvent.click(currentDays[22]) // 0123 disabled
  expect(onDayClick).toBeCalledTimes(0)
  fireEvent.click(currentDays[25]) // 0126
  expect(onDayClick).toBeCalledTimes(1)
})

test('test ref methods', async () => {
  const onPageChange = jest.fn()
  const App = () => {
    const CalendarRef = React.useRef<any>()
    const click1 = () => {
      CalendarRef.current?.jumpTo(2023, 2)
    }
    const click2 = () => {
      CalendarRef.current?.jump(-24)
    }
    return (
      <>
        <button onClick={click1}>btn1</button>
        <button onClick={click2}>btn2</button>
        <CalendarCard
          ref={CalendarRef}
          defaultValue={new Date('2023-01-25')}
          onPageChange={onPageChange}
        />
      </>
    )
  }
  const screen = render(<App />)

  expect(onPageChange).toBeCalledWith({
    year: 2023,
    month: 1,
  })

  fireEvent.click(screen.getByText('btn1'))
  expect(onPageChange).toHaveBeenLastCalledWith({
    year: 2023,
    month: 2,
  })

  fireEvent.click(screen.getByText('btn2'))
  expect(onPageChange).toHaveBeenLastCalledWith({
    year: 2021,
    month: 2,
  })
})
