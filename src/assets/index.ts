
export function initUI () {
  const CSwitch = document.querySelector('.catch-switch')!
  const CSlider = document.querySelector('.catch-slider')!
  const CSelect = document.querySelector('.catch-select')!

  const switches = document.querySelectorAll('.custom-switch')
  for (const element of switches) {
    element.appendChild(CSwitch)
  }

  const sliders = document.querySelectorAll('.custom-slider')
  for (const element of sliders) {
    element.appendChild(CSlider)
  }

  const selects = document.querySelectorAll('.custom-select')
  for (const element of selects) {
    element.appendChild(CSelect)
  }
}
