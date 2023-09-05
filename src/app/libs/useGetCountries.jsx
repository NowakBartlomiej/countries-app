'use client'

import { useQuery} from '@tanstack/react-query'
import axios from 'axios'

const useGetCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const {data} = await axios.get('https://restcountries.com/v3.1/all');
      return data
    }
  })
}

export default useGetCountries