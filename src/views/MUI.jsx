
// includes
import ArrowBack from '../includes/ArrowBack'
// components
import SliderMarks from '../mui-components/SliderMarks'
import TransferList from '../mui-components/TransferList'
import TemporaryDrawer from '../mui-components/TemporaryDrawer'
import SimpleBackdrop from '../mui-components/SimpleBackdrop'

export default function MUI () {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <ArrowBack />
        <div>
          <h2>MUI</h2>
          <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            <small className='text-blue-400'>https://mui.com</small>
          </a>
        </div>
      </div>

      <div className='flex flex-col gap-8 my-8'>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Slider marks</h4>
          <div className="grid place-content-center px-4">
            <SliderMarks />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Transfer list</h4>
          <div className="grid place-content-center px-4">
            <TransferList />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Drawer</h4>
          <div className="grid place-content-center px-4">
            <TemporaryDrawer />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Backdrop</h4>
          <div className="grid place-content-center px-4">
            <SimpleBackdrop />
          </div>
        </div>
      </div>
    </div>
  )
}
