'use client'

import useCountries from '@/app/libs/useCountries'
import React from 'react'

const Countries = () => {
  const {data, isLoading} = useCountries();

  return (
    <>
        {isLoading 
        ? <h2>Loading...</h2> 
        : (
          <div>{data.map((country) => (
            <h1 key={country.name.common}>{country.name.common}</h1>
          ))}</div>
        )
      }
    </>
  )
}

export default Countries