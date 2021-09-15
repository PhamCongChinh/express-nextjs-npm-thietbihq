import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import { getParamsProduct, getProduct } from '../../services/product'
import ProductItem from '../../components/ProductItem'
const Detail = ({ product }) => {
    const breadcrumb = {
        cname: product.cname,
        name: product.name
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
				title={`${product.name}`}
				siteTitle="https://thietbihq.com"
				description={`${product.description} - Thiết bị HQ Nam Định`}
			/>
            <ProductItem product={product}/>
        </Layout>
    )
}
export const getStaticPaths = async () => {
    const paths = await getParamsProduct()
    return {
        paths,
        fallback: false, // Neu khong co trong props thi chuyen sang 404
    }
}
export const getStaticProps = async ({ params }) => {
    const product = await getProduct(params.slug)
    return {
        props: {
            product,
        }
    }
}

export default Detail
