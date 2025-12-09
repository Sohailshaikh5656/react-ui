import React from 'react'
import "../../App.css";
// import poster from '../../assets/poster.jpg';
export default function Poster() {
  return (
    <div className="poster-container position-relative" style={{ height: '90vh' }}>
        <img src="/assets/images/heroImage.jpeg" alt="Poster" className="img-fluid h-100 w-100 object-fit-cover" />
        <div className="position-absolute top-50 start-0 translate-middle-y p-5 ps-5 text-white">
            <p className="line-1 mb-1 text-dark">Classic Exclusive</p>
            <h3 className="display-6 fw-bold mb-1 text-dark">Women's Collection</h3>
            <p className="mb-4 text-dark line-3">UPTO 40% OFF</p>    
            <button className="btn btn-dark btn-sm text-light p-3 pl-5 pr-5">Shop Now <i class="bi bi-arrow-right"></i></button>
        </div>
    </div>
  )
}
