'use client'

import { useQuery} from '@tanstack/react-query'
import fetchData from '../api/fetchData'

const useCountries = (options) => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      return fetchData('/all', options)
    },
    ...options
  })
}

export default useCountries