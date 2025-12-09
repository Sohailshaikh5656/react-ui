import React, { useEffect, useRef, useState } from "react";
import CategoryCards from "../CategoryCards";
export default function Categories() {
  const [category, setCategory] = useState([]);
  const trackRef = useRef(null);

  const fetchCategory = () => {
    setCategory([
      { id: 1, image: "https://i.pinimg.com/564x/85/22/34/8522346c05525356198706df30c7ebe0.jpg", name: "Casual Wear" },
      { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipZ4e4pBbZWAQD27nroaXZr-oFkPojd97qw&s", name: "Western Wear" },
      { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLMhDJmJjJurDNDjxyW8GsKpIVXewZ8qqyw&s", name: "Ethnic Wear" },
      { id: 4, image: "https://img.freepik.com/free-photo/little-fashionista-with-shopping-bag-summer-hat-glasses-colored-pink-background-mom-s-shoes-concept-children-s-fashion_169016-4513.jpg?w=740&q=80", name: "Kids Wear" },
      { id: 5, image: "https://i.pinimg.com/564x/85/22/34/8522346c05525356198706df30c7ebe0.jpg", name: "Casual Wear" },
      { id: 6, image: "https://img.freepik.com/free-photo/little-fashionista-with-shopping-bag-summer-hat-glasses-colored-pink-background-mom-s-shoes-concept-children-s-fashion_169016-4513.jpg?w=740&q=80", name: "Kids Wear" },
    ]);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const scrollLeft = () => {
    trackRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="container my-5">
      <div className="container d-flex justify-content-between align-items-center mt-3 mb-3">
        <h3 className="mb-4 category-text">Shop by Categories</h3>

        <div className="d-flex justify-content-center align-items-center gap-2">
          <button className="btn btn-light btn-sm" onClick={scrollLeft}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="btn btn-dark btn-sm" onClick={scrollRight}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="carousel-container position-relative overflow-hidden">
        <div className="carousel-track d-flex"
             ref={trackRef}
             style={{ overflowX: "auto", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
          
          {category.map((item, index) => (
            <CategoryCards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
