import React from 'react'
import SellerCards from '../SellerCards';
export default function BestSeller() {
    const products = [
        {
            id: 1,
            name: "Summer Dress",
            productName: "Floral Maxi Dress",
            currentPrice: "$49.99",
            oldPrice: "$79.99",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop"
        },
        {
            id: 2,
            name: "Casual Shirt",
            productName: "Cotton Button-Down",
            currentPrice: "$35.99",
            oldPrice: "$45.99",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
        },
        {
            id: 3,
            name: "Denim Jacket",
            productName: "Classic Blue Denim",
            currentPrice: "$59.99",
            oldPrice: "$89.99",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop"
        },
        {
            id: 4,
            name: "Winter Sweater",
            productName: "Wool Blend Knit",
            currentPrice: "$42.99",
            oldPrice: "$65.99",
            image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop"
        },
        {
            id: 5,
            name: "Formal Pants",
            productName: "Slim Fit Trousers",
            currentPrice: "$39.99",
            oldPrice: "$55.99",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
        },
        {
            id: 6,
            name: "Sports T-shirt",
            productName: "Breathable Activewear",
            currentPrice: "$24.99",
            oldPrice: "$34.99",
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"
        },
        {
            id: 7,
            name: "Leather Shoes",
            productName: "Premium Oxford Shoes",
            currentPrice: "$89.99",
            oldPrice: "$129.99",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop"
        },
        {
            id: 8,
            name: "Accessory Set",
            productName: "Fashion Jewelry Pack",
            currentPrice: "$19.99",
            oldPrice: "$29.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd0ViODfRKVxR7ql-Q3PMEbj_FyAasjI_Dw&s"
        }
    ]

    return (
        <>
            <section className="best-seller container mt-4 my-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="category-text text-center w-100">Best Sellers</h3>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {products.map((product,index) => (
                        <SellerCards key={index} product = {product} />
                    ))}
                </div>
            </section>
        </>
    );

}
