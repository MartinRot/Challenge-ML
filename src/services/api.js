import axios from 'axios'

export const apiService = axios.create({
    baseURL: 'https://api.mercadolibre.com'
})

//Los interceptores sirven para manipular la data de alguna u otra manera