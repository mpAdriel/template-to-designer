
import React, { useState, useEffect } from 'react'
import { PickList as CPickList } from 'primereact/picklist'
import { ProductService } from './service/ProductService'

export default function PickList () {
  const [source, setSource] = useState([])
  const [target, setTarget] = useState([])

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setSource(data))
  }, [])

  const onChange = (event) => {
    setSource(event.source)
    setTarget(event.target)
  }

  const itemTemplate = (item) => {
    return (
      <div className="flex flex-wrap p-2 align-items-center gap-3">
        <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
        <div className="flex-1 flex flex-column gap-2">
          <span className="font-bold">{item.name}</span>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag text-sm"></i>
            <span>{item.category}</span>
          </div>
        </div>
        <span className="font-bold text-900">${item.price}</span>
      </div>
    )
  }

  return (
    <div className="card">
      <CPickList source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1400px"
        sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '30rem' }} targetStyle={{ height: '30rem' }} />
    </div>
  )
}
