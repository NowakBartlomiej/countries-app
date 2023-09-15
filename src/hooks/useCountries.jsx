'use client'

import { useQuery} from '@tanstack/react-query'
import fetchData from '../app/api/fetchData'

const useCountries = (options) => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: () => {
      return fetchData('/all', {filters: options?.filters ?? []})
    },
    ...options
  })
}

export const getUseCountriesQueryKey  = () => {
  return ['countries']
}

export default useCountries