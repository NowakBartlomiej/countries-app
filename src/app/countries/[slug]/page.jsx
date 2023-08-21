import React from 'react'

export const metadata = {
    title: 'Countries'
}

const page = ({params}) => {
  return (
    <>
        <h1>Country {params.slug}</h1>
    </>
  )
}

export default page