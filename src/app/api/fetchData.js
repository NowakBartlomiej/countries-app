import { countriesAxios } from '@/countriesAxios';

const fetchData = async (endpoint, options) => {
  const result = await countriesAxios
    .get(endpoint, { params: { fields: options.filters.join(',') } })
    .catch((error) => {
      throw new Error(error);
    });
  return result.data;
};

export default fetchData;
