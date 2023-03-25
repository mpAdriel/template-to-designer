
import React, { useState } from 'react'
import { CascadeSelect as CCascadeSelect } from 'primereact/cascadeselect'

export default function CascadeSelect () {
  const [selectedCity, setSelectedCity] = useState(null)
  const countries = [
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          cities: [
            { cname: 'Sydney', code: 'A-SY' },
            { cname: 'Newcastle', code: 'A-NE' },
            { cname: 'Wollongong', code: 'A-WO' }
          ]
        },
        {
          name: 'Queensland',
          cities: [
            { cname: 'Brisbane', code: 'A-BR' },
            { cname: 'Townsville', code: 'A-TO' }
          ]
        }

      ]
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            { cname: 'Montreal', code: 'C-MO' },
            { cname: 'Quebec City', code: 'C-QU' }
          ]
        },
        {
          name: 'Ontario',
          cities: [
            { cname: 'Ottawa', code: 'C-OT' },
            { cname: 'Toronto', code: 'C-TO' }
          ]
        }

      ]
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            { cname: 'Los Angeles', code: 'US-LA' },
            { cname: 'San Diego', code: 'US-SD' },
            { cname: 'San Francisco', code: 'US-SF' }
          ]
        },
        {
          name: 'Florida',
          cities: [
            { cname: 'Jacksonville', code: 'US-JA' },
            { cname: 'Miami', code: 'US-MI' },
            { cname: 'Tampa', code: 'US-TA' },
            { cname: 'Orlando', code: 'US-OR' }
          ]
        },
        {
          name: 'Texas',
          cities: [
            { cname: 'Austin', code: 'US-AU' },
            { cname: 'Dallas', code: 'US-DA' },
            { cname: 'Houston', code: 'US-HO' }
          ]
        }
      ]
    }
  ]

  return (
    <div className="card flex justify-content-center">
      <CCascadeSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countries}
        optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
        className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" />
    </div>
  )
}
