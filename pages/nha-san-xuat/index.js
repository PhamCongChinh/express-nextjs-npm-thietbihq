import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Manufactuer = () => {
    const breadcrumb = {
        name: "Nhà sản xuất"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Nhà sản xuất"
                siteTitle="https://thietbihq.com/"
                description="Thiết bị cơ khí, Ngành may mặc, Sơn thể thao, Thiết bị khu công nghiệp, Nội thất Hòa Phát, Máy móc sản xuất ngành nhựa, Thảm cầu lông Enlio, Thi công sân điền kinh Nam Định"
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Manufactuer
