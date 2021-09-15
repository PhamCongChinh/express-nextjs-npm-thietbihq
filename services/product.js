//import axios from './axiosClient'
import axios from 'axios'
import useSWR from 'swr'
const fetcher = async (url) => await axios.get(url).then(res => res.data)
export const getProducts = () => {
    try {
        //const response = await axios.get(`/api/v1/products`)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = useSWR(`/api/v1/products`, fetcher)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

/*export const getParamsProduct = async () => {
    const products = await axios.get(`/api/v1/products`)
    if (!products) return <div>Loading...</div>
    return products.data.map(product => ({
        params: {
            slug: `${product.slug}-${product.id}`
        }
    }))
}

export const getProduct = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const response = await axios.get(`/api/v1/product/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}*/

export const getNewproducts = () => {
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = useSWR(`/api/v1/newproducts`, fetcher)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getSellingProducts = () => {
    try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const response = useSWR(`/api/v1/sellingproducts`, fetcher)
        return response.data
    } catch (error) {
        console.log(error)
    }
}