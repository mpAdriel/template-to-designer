
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export default function CSwitch () {
  return (
    <Switch className='custom-component catch-switch' {...label} />
  )
}
