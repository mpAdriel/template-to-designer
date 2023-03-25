
// includes
import ArrowBack from '../includes/ArrowBack'
// components
import InputTemplate from '../pr-components/InputTemplate'
import CascadeSelect from '../pr-components/CascadeSelect'
import Chips from '../pr-components/Chips'
import MultiSelectTemplate from '../pr-components/MultiSelectTemplate'
import TreeSelect from '../pr-components/TreeSelect'
import PickList from '../pr-components/PickList'
import ConfirmPopup from '../pr-components/ConfirmPopUp'
import Dialog from '../pr-components/Dialog'

export default function PrimeReact () {
  return (
    <div className='my-5' style={{ maxWidth: '600px' }}>

      <div className='flex flex-row justify-between'>
        <ArrowBack />
        <div>
          <h2>Prime React</h2>
          <a href="https://primereact.org/" target="_blank" rel="noopener noreferrer">
            <small className='text-blue-400'>https://primereact.org</small>
          </a>
        </div>
      </div>

      <div className='flex flex-col gap-8 my-8'>

        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Input mask</h4>
          <div className="px-4">
            <InputTemplate />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Cascade select</h4>
          <div className="px-4">
            <CascadeSelect />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Chips</h4>
          <div className="px-4">
            <Chips />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>MultiSelect template</h4>
          <div className="px-4">
            <MultiSelectTemplate />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Confirm popup</h4>
          <div className="px-4">
            <ConfirmPopup />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>TreeSelect</h4>
          <div className="px-4">
            <TreeSelect />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>PickList</h4>
          <div className="px-4">
            <PickList />
          </div>
        </div>
        <div className='grid gap-3'>
          <h4 className='text-lg text-blue-400 font-bold'>Dialog</h4>
          <div className="px-4">
            <Dialog />
          </div>
        </div>

      </div>
    </div>
  )
}
