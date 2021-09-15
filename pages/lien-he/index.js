import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Contact = () => {
    const breadcrumb = {
        name: "Liên hệ"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Liên hệ"
                siteTitle="https://thietbihq.com/"
                description="Trụ sở chính
                Địa chỉ: xóm 4 - Xuân Hồng - Xuân Trường - Nam Định
                Điện thoại : 0915 172 333"
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Contact
