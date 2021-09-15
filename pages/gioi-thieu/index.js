import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Introduce = () => {
    const breadcrumb = {
        name: "Giới thiệu"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Giới thiệu công ty TNHH thương mại và sản xuất HQ"
                siteTitle="https://thietbihq.com/"
                description="Đa dạng sản phẩm, Giá cả hợp lý, Tiết kiệm thời gian và chi phí Nam Định"
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Introduce
