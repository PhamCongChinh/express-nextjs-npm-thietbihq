import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import { getProducts } from '../services/product'
const Home = () => {
	const products = getProducts()
	if (!products) return <div>Loading...</div>
	console.log(products)
	return (
		<Layout>
			<SEO
				title="Thiết bị HQ - Thiết bị cơ khí, ngành may mặc, công nghiệp Nam Định"
				siteTitle="https://thietbihq.com"
				description="Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định"
			/>
			
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

export default Home
/**
 * <ProductsList products={products} />
 */