import axios from './axiosClient'
//http://api.thietbihq.com
//import axios from 'axios'
import useSWR from 'swr'
const fetcher = async (url) => await axios.get(url).then(res => res.data)
export const getCategories = () => {
    try {
        const response = useSWR(`/api/v1/categories`, fetcher)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}
export const getCategory = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const response = await axios.get(`/api/v1/category/${id}`)
        return response.data

    } catch (error) {
        console.log(error)
    }
}
export const getParamsCategory = async () => {
    const categories = await axios.get(`/api/v1/categories`)
    if (!categories) return <div>Loading...</div>
    return categories.data.map(category => ({
        params: {
            slug: `${category.slug}-${category.id}`
        }
    }))
}
export const getProductsByCategory = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const response = await axios.get(`/api/v1/productsByCategory/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}