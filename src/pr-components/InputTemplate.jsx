
import React, { useState } from 'react'
import { InputMask as CInputMask } from 'primereact/inputmask'

export default function InputTemplate () {
  const [value, setValue] = useState('')

  return (
    <CInputMask
      value={value}
      onChange={(e) => setValue(e.target.value)}
      mask="99-999999"
      placeholder="99-999999"
    />
  )
}
