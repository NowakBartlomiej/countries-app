import { countriesAxios } from "@/countriesAxios"

const fetchData = async (endpoint, options = {
    name: false,
    captital: false,
    currencies: false,
  }) => {
    const result = await countriesAxios.get(`${endpoint}?fields=${options.name ? 'name,' : ''}${options.captital ? 'captital,' : ''}${options.currencies ? 'currencies,' : ''}`)
        .catch((error) => {
            throw new Error(error)  
        })
    return result.data
}

export default fetchData;