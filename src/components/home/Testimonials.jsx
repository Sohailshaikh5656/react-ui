import React, { useEffect, useRef, useState } from "react";
import TestimonialCards from "../TestimonialCards";
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const trackRef = useRef(null);

  const fetchTestimonials = () => {
    setTestimonials([
      {
        id: 1,
        rating: 5,
        message:
          "Absolutely love the quality and fit of the clothes! The customer service was exceptional and delivery was super fast.",
        profileUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        name: "Sarah Johnson",
        designation: "Fashion Blogger",
      },
      {
        id: 2,
        rating: 4,
        message:
          "Great shopping experience! The products are exactly as described and the prices are very reasonable.",
        profileUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        name: "Michael Chen",
        designation: "Marketing Manager",
      },
      {
        id: 3,
        rating: 5,
        message:
          "Best online fashion store I've ever used. The collection is amazing and the quality exceeds expectations.",
        profileUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        name: "Emily Rodriguez",
        designation: "Interior Designer",
      },
      {
        id: 4,
        rating: 4,
        message:
          "Quick delivery and excellent customer support. Will definitely shop here again for my fashion needs.",
        profileUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        name: "David Kim",
        designation: "Software Engineer",
      },
      {
        id: 5,
        rating: 4,
        message:
          "Great shopping experience! The products are exactly as described and the prices are very reasonable.",
        profileUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        name: "Michael Chen",
        designation: "Marketing Manager",
      },
      {
        id: 6,
        rating: 5,
        message:
          "Best online fashion store I've ever used. The collection is amazing and the quality exceeds expectations.",
        profileUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        name: "Emily Rodriguez",
        designation: "Interior Designer",
      },
    ]);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const slideLeft = () => {
    trackRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    trackRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="container my-5">
      <div className="container d-flex justify-content-between align-items-center mt-3 mb-3">
        <h3 className="mb-4 category-text">What our Customer Say's</h3>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <button className="btn btn-light btn-sm" onClick={slideLeft}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-dark btn-sm" onClick={slideRight}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="carousel-container position-relative overflow-hidden">
        <div
          className="carousel-track d-flex"
          ref={trackRef}
          style={{
            overflowX: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
          }}
        >
          {testimonials.map((item,index) => (
            <TestimonialCards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
