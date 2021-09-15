import SEO from '../../components/SEO'
import Layout from '../../components/Layout'

const Recruitment = () => {
    const breadcrumb = {
        name: "Tuyển dụng"
    }
    return (
        <Layout breadcrumb={breadcrumb}>
            <SEO
                title="Tuyển dụng"
                siteTitle="https://thietbihq.com/"
                description="Vị trí tuyển dụng, mô tả công việc, được hướng dẫn, đào tạo khi mới vào làm ..."
            />
            <div className="p-3 text-sm">
                <p>Dữ liệu đang cập nhật ...</p>
            </div>
        </Layout>
    )
}

export default Recruitment
