import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Audio } from '../audio'

test('className && style && type = progress  && onPause  && onFastBack && onForward test ', () => {
  const playeEnd = vi.fn()
  const pause = vi.fn()
  const canPlay = vi.fn()
  const mute = vi.fn()
  const fastBack = vi.fn()
  const forward = vi.fn()
  const TestComponent = () => {
    return (
      <>
        <Audio
          className="audio-vi"
          style={{ fontSize: '20px' }}
          type="progress"
          autoPlay
          src="//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav"
          onEnd={playeEnd}
          onPause={pause}
          onCanPlay={canPlay}
          onMute={mute}
          onBack={fastBack}
          onForward={forward}
        />
      </>
    )
  }
  const { getByText, container } = render(<TestComponent />)
  expect(container.querySelector('.nut-audio')).toHaveClass(
    'nut-audio audio-vi'
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
