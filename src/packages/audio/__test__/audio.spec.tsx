import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Audio } from '../audio'

test('className && style && type = progress  && onPause  && onFastBack && onForward test ', () => {
  const playeEnd = jest.fn()
  const pause = jest.fn()
  const canPlay = jest.fn()
  const mute = jest.fn()
  const fastBack = jest.fn()
  const forward = jest.fn()
  const TestComponent = () => {
    return (
      <>
        <Audio
          className="audio-jest"
          style={{ fontSize: '20px' }}
          type="progress"
          autoplay
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          onPlayEnd={playeEnd}
          onPause={pause}
          onCanPlay={canPlay}
          onMute={mute}
          onFastBack={fastBack}
          onForward={forward}
        />
      </>
    )
  }
  const { getByText, container } = render(<TestComponent />)
  expect(container.querySelector('.nut-audio')).toHaveClass(
    'nut-audio audio-jest'
  )
  expect(container.querySelector('.nut-audio')).toHaveStyle('font-size: 20px;')
  const backButton = getByText('快退')
  const forwardButton = getByText('快进')
  const muteButton = getByText('静音')

  if (backButton && forwardButton && muteButton) {
    fireEvent.click(forwardButton)
    fireEvent.click(backButton)
    fireEvent.click(muteButton)
    expect(forward).toBeCalled()
    expect(fastBack).toBeCalled()
    expect(mute).toBeCalled()
  }
})

test('icon type test', () => {
  const { container } = render(<Audio type="icon" />)
  expect(container).toMatchSnapshot()
})

test('none type test', () => {
  const { container } = render(<Audio type="none" />)
  expect(container).toMatchSnapshot()
})
