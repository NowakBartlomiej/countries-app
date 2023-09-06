'use client'

import { useQuery} from '@tanstack/react-query'
import fetchData from './fetchData'

const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      return fetchData('/all')
    }
  })
}

export default useCountries