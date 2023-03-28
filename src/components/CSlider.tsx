
import Slider from '@mui/material/Slider'

function valuetext (value: number) {
  return `${value}°C`
}

export default function CSlider () {
  return (
    <Slider
      className='custom-component catch-slider'
      aria-label="Temperature"
      defaultValue={30}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={110}
    />
  )
}
