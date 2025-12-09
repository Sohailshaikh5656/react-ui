import React from 'react'
export default function InstagramStories() {
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop",
      alt: "Fashion style 1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop",
      alt: "Fashion style 2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=400&fit=crop",
      alt: "Fashion style 3"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=400&fit=crop",
      alt: "Fashion style 4"
    }
  ]

  return (
    <section className="container my-5">
      <h3 className="text-center mb-4 category-text">Our Instagram Stories</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {instagramPosts.map((post) => (
          <div className="col" key={post.id}>
            <div className="position-relative instagram-card">
              <img 
                src={post.image} 
                alt={post.alt}
                className="img-fluid rounded"
                style={{ height: '300px', width: '100%', objectFit: 'cover' }}
              />
              <div className="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center opacity-0">
                <i className="bi bi-instagram text-white fs-1"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col services">
            <div className="d-flex flex-column">
              <i className="bi bi-box-seam fs-3 mb-1 fw-bold text-dark"></i>
              <h6 className="mb-2 fw-bold">Free Shipping</h6>
              <small className="text-muted">Free shipping on all orders over $150</small>
            </div>
          </div>
          <div className="col services">
            <div className="d-flex flex-column">
              <i className="bi bi-currency-dollar fs-3 mb-1 fw-bold text-dark"></i>
              <h6 className="mb-2 fw-bold">Money Guarantee</h6>
              <small className="text-muted">Within 30 days for an exchange</small>
            </div>
          </div>
          <div className="col services">
            <div className="d-flex flex-column">
              <i className="bi bi-headset fs-3 mb-1 fw-bold text-dark"></i>
              <h6 className="mb-2 fw-bold">Online Support</h6>
              <small className="text-muted">24 hours a day, 7 days a week</small>
            </div>
          </div>
          <div className="col services">
            <div className="d-flex flex-column ">
              <i className="bi bi-credit-card fs-3 mb-1 fw-bold text-dark"></i>
              <h6 className="mb-2 fw-bold">Flexible Payment</h6>
              <small className="text-muted">Pay with multiple credit cards</small>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .instagram-card:hover .instagram-overlay {
          opacity: 1 !important;
          background-color: rgba(0, 0, 0, 0.2);
          transition: opacity 0.3s ease;
          cursor:pointer;
        }
      `}</style>
    </section>
  )
}
