'use client'

import { useQuery} from '@tanstack/react-query'
import fetchData from '../app/api/fetchData'

const useCountries = (options) => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => {
      return fetchData('/all', options)
    },
    ...options
  })
}

export const getUseQueryKey = () => {
  return ['countries']
}

export default useCountries