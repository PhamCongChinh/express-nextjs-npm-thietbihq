import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Services = () => {
    const breadcrumb = {
        name: "Dịch vụ"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Dịch vụ"
                siteTitle="https://thietbihq.com/"
                description="Kiểm định, sửa chữa thiết bị..."
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Services
