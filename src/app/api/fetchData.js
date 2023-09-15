import { countriesAxios } from "@/countriesAxios"

const fetchData = async (endpoint, options = {filters}) => {
    const filtersValues = String(options.filters)
    
    const result = await countriesAxios.get(`${endpoint}`, {params: { fields: filtersValues}})
        .catch((error) => {
            throw new Error(error)  
        })
    return result.data
}

export default fetchData;