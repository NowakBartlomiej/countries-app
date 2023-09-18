import axios from "axios";

export const countriesAxios = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});