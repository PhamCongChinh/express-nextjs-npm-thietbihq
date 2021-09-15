import Layout from '../../components/Layout'
import Script from 'next/script'
import SEO from '../../components/SEO'
const Search = () => {
    const breadcrumb = {
        name: "Tìm kiếm",
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
				title="Tìm kiếm - Thiết bị HQ"
				siteTitle="https://thietbihq.com"
				description="Thi công sân điền kinh, sơn EPOXY, thảm cầu lông Nam Định"
			/>
            <Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
            <div className="gcse-searchresults-only"></div>
        </Layout>
    )
}

export default Search
