import React from "react";

export default function SellerCards({ product }) {
    return (
        <div className="col">
            <div className="seller-card card border-0 position-relative">

                {/* IMAGE + HOVER ITEMS */}
                <div className="image-wrapper position-relative overflow-hidden">

                    <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: "300px", width: "100%", objectFit: "cover" }}
                    />

                    {/* ICONS ON RIGHT */}
                    <div className="hover-icons position-absolute top-0 end-0 p-2 d-flex flex-column gap-2">
                        <button className="btn btn-light btn-sm rounded-circle">
                            <i className="bi bi-star"></i>
                        </button>
                        <button className="btn btn-light btn-sm rounded-circle">
                            <i className="bi bi-three-dots"></i>
                        </button>
                        <button className="btn btn-light btn-sm rounded-circle">
                            <i className="bi bi-eye"></i>
                        </button>
                    </div>

                    {/* ADD TO CART BUTTON */}
                    <div className="hover-cart position-absolute bottom-0 start-0 w-100 p-3">
                        <button className="btn btn-light text-dark w-100">Add to Cart</button>
                    </div>
                </div>

                {/* BODY */}
                <div className="card-body">
                    <h6 className="card-title text-dark mb-1">{product.name}</h6>
                    <p className="card-text text-muted small mb-2">{product.productName}</p>

                    <div className="d-flex align-items-center gap-2">
                        <span className="text-dark fw-bold">{product.currentPrice}</span>
                        <span className="text-muted text-decoration-line-through small">
                            {product.oldPrice}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
