import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Customers = () => {
    const breadcrumb = {
        name: "Khách hàng"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Khách hàng"
                siteTitle="https://thietbihq.com/"
                description=""
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Customers