
import { useState } from 'react'
import ArrowBack from '../includes/ArrowBack'

// includes
import ModalViewItem from '../includes/modals/ModalViewItem'

export default function Shop () {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ArrowBack />
      <div className="group relative flex flex-col-reverse">
        <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-slate-200">
          <h3>
            <a href="#">Basic Tee 6-Pack </a>
          </h3>
          <p>$192</p>
        </div>
        <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
          <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-preview.jpg" alt="Model wearing gray t-shirt." className="object-cover object-center" />
          <div className="flex items-end p-4">
            <button onClick={() => setOpen(!open)} type="button" className="relative z-10 w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100">
              <span>Quick view</span>
              <span className="sr-only">, Basic Tee 6-Pack </span>
            </button>
          </div>
        </div>
      </div>
      <ModalViewItem open={open} setOpen={setOpen} />
    </>
  )
}
