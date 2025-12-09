import React from 'react'

export default function Deals() {
  return (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-7 col-lg-7">
        <div className="box-60" style={{ height: '400px', backgroundColor: '#f8f9fa', padding: '2rem' }}>
          <h3 className="mb-3">Deals of the Months</h3>
          <p className="text-muted mb-4">Don't miss out on our exclusive monthly offers. Limited time only! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est harum sit debitis illo suscipit neque. Incidunt quidem illum illo nesciunt dolorem soluta.</p>
          
          <div className="d-flex gap-3 mb-4">
            <div className="deal-box text-center p-3">
              <div className="fs-3 fw-bold">03</div>
              <div className="small text-muted">Days</div>
            </div>
            <div className="deal-box text-center p-3">
              <div className="fs-3 fw-bold">18</div>
              <div className="small text-muted">Hours</div>
            </div>
            <div className="deal-box text-center p-3">
              <div className="fs-3 fw-bold">45</div>
              <div className="small text-muted">Min</div>
            </div>
            <div className="deal-box text-center p-3">
              <div className="fs-3 fw-bold">22</div>
              <div className="small text-muted">Sec</div>
            </div>
          </div>
          
          <button className="btn btn-dark px-4 py-3 d-flex justify-content-center align-items-center">View All Product &nbsp;<i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
      <div className="col-md-5 col-lg-5">
        <div className="box-40" style={{ height: '400px', overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=400&fit=crop" 
            alt="Fashion model" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  </div>
  )
}
