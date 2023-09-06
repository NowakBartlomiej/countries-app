import { countriesAxios } from "@/countriesAxios"

const fetchData = async (endpoint) => {
    const result = await countriesAxios.get(endpoint)
        .catch((error) => {
            if (error.response.status) {
                throw new Error(error)
            }
        })
    // console.log(result)
    return result.data
}

export default fetchData;