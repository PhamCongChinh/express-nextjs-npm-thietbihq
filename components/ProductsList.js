import React, { useState } from 'react'
import Link from "next/link";
import ReactPaginate from 'react-paginate'
const ProductsList = ({ products }) => {
	const [pageNumber, setPageNumber] = useState(0)
    const productsPerPage = 18
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)
	const changePage = ({ selected }) => {
        setPageNumber(selected)
		window.scrollTo(0, 0)
    }
	return (
		<>
		<div className="grid grid-cols-2 md:grid-cols-3">
			{products.slice(pagesVisited, pagesVisited + productsPerPage)?.map((item) => (
				<div key={item.id} className="relative p-3 hover:shadow-md">
					<Link href={`/detail/${item.slug}-${item.id}.html`}>
						<a>
							<div className="h-52 items-center">
								<img src={`/images/${item.image}`} alt={item.name} className="max-h-52 w-full" />
							</div>
							<div className="pt-2 mb-6">
								<h1 className="font-semibold text-gray-700 text-sm">{item.name}</h1>
							</div>
							<div className="absolute bottom-1 left-3 text-red-500">Liên hệ</div>
						</a>
					</Link>
				</div>
			))}
			
		</div>
		<div className="flex justify-center my-10">
			{products.length !== 0 ? (
				<ReactPaginate
					previousLabel={
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
					<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
				  	</svg>}
					nextLabel={
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
					<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
				  	</svg>}
					pageCount={pageCount}
					onPageChange={changePage}
					marginPagesDisplayed={1}
          			pageRangeDisplayed={3}
					containerClassName={'pagination'}
					activeClassName={'active'}
					disabledClassName={"disabled"}
			/>
			):('')}
		</div>
		</>
	);
};

export default ProductsList;