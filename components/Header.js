import Link from "next/link";
import React, { useState} from "react";
import { useSelector } from "react-redux";
import Script from 'next/script'
import { getCategories } from "../services/category";
const Header = () => {
	const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)
	const categories = getCategories()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	return (
		<header id="header">
			{/** Open Sidebar */}
			<div
        		onClick={() => setIsSidebarOpen(false)}
        		className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          		isSidebarOpen ? "block" : "hidden"}`}
			/>
			<div
        		className={`fixed bg-blue-500 inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0  lg:translate-x-0 lg:static lg:inset-0 md:hidden ${
          		isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`}
			>
				<div className="flex flex-col items-start text-lg text-white">
					<Link href="/" >
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Trang chủ</button>
					</Link>
					<Link href="/gioi-thieu.html" >
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Giới thiệu</button>
					</Link>

					<button className="pt-3 pl-6 w-full flex justify-between" onClick={() => setIsOpen(true)}>
						<div>Sản phẩm</div>
						<div>
							<svg className="h-7 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
						</div>
					</button>
					<div className={`bg-white w-full ${isOpen ? "block" : "hidden"}`}>
						{categories?.map(item => (
							<div key={item.id} className="">
								<Link href={`/san-pham/${item.slug}-${item.id}.html`}>
									<p className="text-base text-gray-600 py-1 px-6 border-b-2 cursor-pointer" onClick={() => setIsSidebarOpen(false)}>{item.name}</p>
								</Link>
							</div>
						))}
					</div>

					<Link href="/tin-tuc.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Tin tức</button>
					</Link>
					<Link href="/khach-hang.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Khách hàng</button>
					</Link>
					<Link href="/nha-san-xuat.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Nhà sản xuất</button>
					</Link>
					<Link href="/tuyen-dung.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Tuyển dụng</button>
					</Link>
					<Link href="/dich-vu.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Dịch vụ</button>
					</Link>
					<Link href="/lien-he.html" className="">
						<button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Liên hệ</button>
					</Link>
				</div>
			</div>

			<div className="bg-gray-100 shadow-sm">
				<div className="flex justify-between max-w-6xl mx-auto p-1">
					<div className="md:hidden flex cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
						<svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</div>
					<div className="hidden md:flex">
						<Link href="/">
							<p className="text-sm font-normal cursor-pointer pt-1">HQ Việt Nam</p>
						</Link>
					</div>
					<div className="pr-2">
						<Link href="/shop/cart">
							<a>
								<span className="relative inline-block">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 18 18" fill="currentColor">
										<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
									</svg>
									<span className="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
										{cartTotalQuantity}
									</span>
								</span>
							</a>
						</Link>
					</div>
				</div>
			</div>

			<div className="grid grid-flow-row auto-rows-max mx-auto justify-items-center md:grid-cols-5 max-w-6xl">
				<div className="md:col-span-1">
					<img src="/images/static/logo.png" alt="Logo HQ Việt Nam" className="h-36 md:h-36" />
				</div>
				<div className="flex w-full items-center px-4 md:col-span-3 py-3 md:px-0 md:py-0">
					<Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
					<div className="w-full">
						<div className="gcse-searchbox-only"></div>
					</div>
				</div>
				<div className="hidden md:flex flex-col justify-center col-span-1">
					<div className="py-1">
						<p>Tư vấn mua hàng</p>
					</div>
					<div className="flex">
						<svg className="h-6 w-6 text-red-500" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
						<span className="pl-1 text-red-500 font-semibold text-lg">0965 990 555</span>
					</div>
				</div>
			</div>

			<div className="hidden md:flex bg-blue-500 w-full text-md font-semibold text-white ">
				<div className="container max-w-6xl mx-auto py-2.5">
					<div className="flex space-x-12">
						<Link href="/">Trang chủ</Link>
						<Link href="/gioi-thieu.html">Giới thiệu</Link>
						<Link href="/san-pham.html">Sản phẩm</Link>
						<Link href="/tin-tuc.html">Tin tức</Link>
						<Link href="/khach-hang.html">Khách hàng</Link>
						<Link href="/nha-san-xuat.html">Nhà sản xuất</Link>
						<Link href="/tuyen-dung.html">Tuyển dụng</Link>
						<Link href="/dich-vu.html">Dịch vụ</Link>
						<Link href="/lien-he.html">Liên hệ</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Header;
