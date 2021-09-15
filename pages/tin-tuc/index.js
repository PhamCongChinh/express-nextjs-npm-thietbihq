import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const News = () => {
    const breadcrumb = {
        name: "Tin tức"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Tin tức"
                siteTitle="https://thietbihq.com/"
                description="Chính sách khách hàng, hướng dẫn sử dụng, giới thiệu sản phẩm ..."
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default News
