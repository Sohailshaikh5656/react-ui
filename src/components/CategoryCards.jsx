import React from 'react'

export default function CategoryCards({ item }) {
    return (
        <div className="carousel-slide" style={{ minWidth: "var(--card-width)" }}>

            <div className="category-card card border-0 position-relative mx-2">
                <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "350px", width: "100%", objectFit: "cover" }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-center"
                    style={{ transform: "translateY(-10px)" }}>
                    <button className="btn btn-light btn-sm mb-0 catgeory-view-btn text-dark">
                        {item.name}
                    </button>
                </div>
            </div>

        </div>
    )
}
