import { useQuery} from '@tanstack/react-query'
import fetchData from '../app/api/fetchData'

export const getUseCountriesQueryKey  = () => {
  return ['countries']
}

const useCountries = (options) => {
  return useQuery({
    queryKey: getUseCountriesQueryKey(),
    queryFn: fetchData('/all', {filters: options?.filters ?? []}),
    ...options
  })
}



export default useCountries