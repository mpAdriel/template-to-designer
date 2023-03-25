
import React, { useState } from 'react'
import { Chips as CChips } from 'primereact/chips'

export default function Chips () {
  const [value, setValue] = useState([])

  return (
    <div className="card p-fluid">
      <CChips value={value} onChange={(e) => setValue(e.value)} />
    </div>
  )
}
