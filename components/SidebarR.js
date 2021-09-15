import Link from 'next/link'
import Image from 'next/image'
const SidebarR = ({ newProducts }) => {
    return (
        <>
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Sản phẩm mới</p>
            </div>
            {newProducts?.map(item => (
                <Link key={item.id} href={`/detail/${item.slug}-${item.id}.html`}>
                    <a>
                        <div className="flex flex-row p-2 border-b border-r border-l cursor-pointer relative">
                            <Image src={`/images/${item.image}`} alt={item.name} height={20} width={20}/>
                            <p className="px-3 text-sm font-semibold text-gray-700">{item.name}</p>
                            <p className="absolute bottom-1 right-1 text-white text-xs bg-red-500 px-1.5 py-0.5">Chi tiết</p>
                        </div>
                    </a>
                </Link>
            ))}
        </>
    )
}
export default SidebarR
