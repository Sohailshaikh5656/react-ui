import React from 'react'

export default function TestimonialCards({ item }) {
    return (
        <div
            className="carousel-slide"
            style={{ minWidth: "var(--testimonial-width)" }}
        >
            <div className="feeback-card card border-0 p-3 mx-2 h-100 shadow-sm">
                <div className="d-flex align-items-center mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill text-warning me-1"></i>
                    ))}
                </div>

                <p className="card-text text-muted mb-3">{item.message}</p>

                <div className="d-flex align-items-center mt-auto">
                    <img
                        src={item.profileUrl}
                        className="rounded-circle me-3"
                        alt={item.name}
                        style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                        }}
                    />
                    <div>
                        <h6 className="mb-0 text-dark">{item.name}</h6>
                        <small className="text-muted">{item.designation}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
