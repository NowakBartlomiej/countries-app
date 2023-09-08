import { countriesAxios } from "@/countriesAxios"

const fetchData = async (endpoint) => {
    const result = await countriesAxios.get(endpoint)
        .catch((error) => {
            throw new Error(error)  
        })
    // console.log(result)
    return result.data
}

export default fetchData;