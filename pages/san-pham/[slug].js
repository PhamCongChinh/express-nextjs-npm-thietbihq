import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import {getCategory, getParamsCategory, getProductsByCategory } from '../../services/category'

const ProductsByCategory = ({ category, products }) => {
    const breadcrumb = {
        //name: category.name
        name: 'asd'
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title={``}
                siteTitle="https://thietbihq.com"
                description={` Thiết bị HQ - Nam Định`}
            />
            
        </Layout>
    )
}
/*export const getStaticPaths = async () => {
    const paths = await getParamsCategory()
    return {
        paths,
        fallback: false, // Neu khong co trong props thi chuyen sang 404
    }
}
export const getStaticProps = async ({ params }) => {
    const category = await getCategory(params.slug)
    const products = await getProductsByCategory(params.slug)
    return {
        props: {
            category,
            products,
        }
    }
}*/
export default ProductsByCategory

/**
 * <ProductsList products={products}/>
 */