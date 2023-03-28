
// components
import CSlider from './components/CSlider'
import CSwitch from './components/CSwitch'
import CSelect from './components/CSelect'

import { initUI } from './assets/index'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    initUI()
  }, [])

  return (
    <>
      {/* components */}
      <CSwitch />
      <CSlider/>
      <CSelect/>

      <div className="cmui custom-select"></div>

    </>
  )
}

export default App
