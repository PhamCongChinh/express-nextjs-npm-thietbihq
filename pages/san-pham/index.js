import React from 'react'
import SEO from '../../components/SEO'
import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { getProducts } from '../../services/product'
const Products = ({products}) => {
	const breadcrumb = {
		name: "Sản phẩm"
	}
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
				title="Sản phẩm"
				siteTitle="https://thietbihq.com"
				description="Thiết bị cơ khí, Ngành may mặc, Sơn thể thao, Thiết bị khu công nghiệp, Nội thất Hòa Phát, Máy móc sản xuất ngành nhựa, Thảm cầu lông Enlio, Thi công sân điền kinh Nam Định"
			/>
            <h1 className="text-xl p-5">Sản phẩm</h1>
            
        </Layout>
    )
}
/*export const getStaticProps = async () => {
	const products = await getProducts()
	return {
		props: {
			products,
		}
	}
}*/

export default Products

/**
 * <ProductsList products={products}/>
 */
