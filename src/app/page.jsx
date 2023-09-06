'use client'

import useCountries from "./libs/useCountries"

export const metadata = {
  title: 'Home Page',
  description: 'This is the home page',
  category: 'education',
  keywords: ['geography', 'countries', 'country', 'map', 'education'],
  icons: {
    icon: 'logo.svg',
  }
}

const Page = () => {
  const {data, isLoading} = useCountries();
  
  return (
    <section>
      {isLoading 
        ? <h2>Loading...</h2> 
        : (
          <div>{data.map((country) => (
            <h1 key={country.name.common}>{country.name.common}</h1>
          ))}</div>
        )
      }
    </section>
  )
}

export default Page