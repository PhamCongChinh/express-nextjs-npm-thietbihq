import React from 'react'
import SEO from '../../components/SEO'
import axios from 'axios'
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { toast, Slide } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../features/cart/cartSlice'
const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        e.target.reset()
        const res = await axios({
            method: "POST",
            url: "/api/mail",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            data
        })
        if(res.status === 200){
            dispatch(clearCart())
            toast.success(`Xác nhận đơn hàng thành công`,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                theme: 'colored',
                transition: Slide,
            })
        }
        return res
    };
    return (
        <>
            <SEO
				title="Đặt hàng"
				siteTitle="https://thietbihq.com"
				description=""
			/>
            <div className="md:bg-gray-100">
                <nav className="max-w-6xl mx-auto ">
                    <ol className="list-reset py-2 px-4 rounded flex bg-gray-100 text-grey text-sm md:bg-gray-100 md:px-0">
                        <li><Link href="/" className="no-underline text-indigo">Trang chủ</Link></li>
                        <li className="pl-2">/</li>
                        <li className="px-2"><Link href="/shop/checkout" className="no-underline text-indigo">Đặt hàng</Link></li>
                    </ol>
                </nav>
            </div>

            <div className="max-w-6xl mx-auto p-4 md:px-0">
                <div className="grid md:grid-cols-2">
                    <div className="md:grid-cols-1">
                        <div className="flex items-center mb-5 border-b-2 pb-2">
                            <div className="w-2/3">
                                Sản phẩm
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-500 text-right mb-1 pr-4">
                                    Số lượng
                                </label>
                            </div>
                        </div>
                        {cartItems?.map(item => (
                        <div className="flex items-center mb-5" key={item.id}>
                            <div className="w-2/3">
                                {item.name}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-500 text-right mb-1 pr-4">
                                    x{item.cartQuantity}
                                </label>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="md:grid-cols-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
                            {cartItems?.map((item, index) => (
                                <div key={index}>
                                    <input type="hidden" {...register(`product${index}`, { required: true, })} defaultValue={item.name} />
                                    <input type="hidden" {...register(`quantity${index}`, { required: true, })} defaultValue={item.cartQuantity} />
                                </div>
                            ))}
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Họ tên <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input {...register("name", { required: true, maxLength: 50 })} className="border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                                    {errors.name?.type === 'maxLength' && "Giới hạn tối đa 50 ký tự"}
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input {...register("email", { required: true, pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} className="border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email"/>
                                    {errors.name?.type === 'pattern' && "Định dạng email không đúng, ví dụ abc@gmail.com"}
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Số điện thoại <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input {...register("telephone", { required: true, maxLength: 20 })} className="border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Địa chỉ <span className="text-red-500">*</span>
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input {...register("address", { required: true, maxLength: 50 })} className="border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"/>
                                    {errors.name?.type === 'maxLength' && "Giới hạn tối đa 50 ký tự"}
                                </div>
                            </div>
                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                        Yêu cầu
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <textarea rows="5" {...register("message", { maxLength: 200 })} className="border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <input type="submit" value="Xác nhận" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout

/**
 * {cartItems?.map(item => (
                                <input key={item.id} type="text" {...register("product", { required: true, })} defaultValue={item.name} />
                            ))}
 */