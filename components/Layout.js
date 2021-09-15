import Sidebar from "./Sidebar"
import SidebarR from "./SidebarR"
import { getCategories } from "../services/category"
import { getNewproducts, getSellingProducts } from "../services/product"
import { useRouter } from 'next/router'
import Link from 'next/link'

const Layout = ({ children, breadcrumb }) => {
    const categories = getCategories()
    const newProducts = getNewproducts()
    const sellingProducts = getSellingProducts()
    const router = useRouter()
    return (
        <div className="bg-gray-50">
            <div className="bg-white">
            {breadcrumb ? (
                <nav className="max-w-6xl mx-auto">
                    <ol className="list-reset py-2 px-4 rounded flex bg-gray-100 text-grey text-sm md:bg-white md:px-0">
                        <li><Link href="/" className="no-underline text-indigo">Trang chủ</Link></li>
                        <li className="pl-2">/</li>
                        {breadcrumb.cname ? (
                            <>
                            <li className="px-2">{breadcrumb.cname}</li>
                            <li>/</li>
                            </>
                        ) : ('')}
                        <li className="px-2">{breadcrumb.name}</li>
                        </ol>
                    </nav>
                ) : ('')}
            </div>
            <div className="grid grid-flow-row auto-rows-max max-w-6xl mx-auto p-3.5 md:px-0">
                <div className="md:grid grid-cols-5 bg-white">
                    <div className="hidden md:grid col-span-1">
                        {!categories ? ('') : (
                            <Sidebar categories={categories} sellingProducts={sellingProducts} />
                        )}
                    </div>
                        {router.pathname === "/"? (
                            <>
                            <div className="md:col-span-4">
                                <img src="/images/static/banner.JPG" alt="Banner HQ Việt Nam" className="h-36 w-full md:h-72"/>
                                <div className="md:grid grid-cols-4">
                                    <main className="md:col-span-3">{children}</main>
                                    <div className="md:col-span-1"><SidebarR newProducts={newProducts}/></div>
                                </div>
                            </div>
                            </>
                        ):(
                            <>
                    <main className="md:col-span-3">{children}</main>
                    <div className="md:col-span-1"><SidebarR newProducts={newProducts}/></div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Layout