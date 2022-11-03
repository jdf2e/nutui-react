import React from 'react'
// @ts-ignore
import reactCSS from 'reactcss'
// @ts-ignore
import { SketchPicker } from 'react-color'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
type Color = RGB | HEX | RGBA

interface ColorPickerProps {
  type: 'hex' | 'rgb'
  color: Color
  onChange: (color: Color) => void
}

interface ColorPickerState {
  displayColorPicker: boolean
  color: Color
}

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
  state: ColorPickerState = {
    displayColorPicker: false,
    color: this.props.color,
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  handleChange = (color: any) => {
    const finalyColor =
      this.props.type == 'hex'
        ? color.hex
        : `rgba(${color.rgb.r}, ${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    this.setState({ color: finalyColor })
    this.props.onChange(finalyColor)
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          height: '24px',
          lineHeight: '24px',
          textAlign: 'center',
          borderRadius: '2px',
          color: '#fff',
          background: this.state.color,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color}>{this.state.color}</div>
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default ColorPicker
