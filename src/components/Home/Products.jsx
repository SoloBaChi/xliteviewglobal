import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <section className="products mt-8">
        <h3>Products</h3>
        <div className="product-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-1.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-1.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-2.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-2.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-3.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-3.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-4.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-4.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-5.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-5.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-6.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-6.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
          <Link to="https://wa.me/2347049668561" target='_blank' className="card-container">
            <div className="top-section">
              <div className="img-container inline-block" style={{background:`url(${`/assets/product-7.jpg`}) no-repeat center/cover`}}>
                {/* <img src={`/assets/product-7.jpg`} alt="product 1" /> */}
              </div>
            </div>
            <div className="bottom-section">
              <div className="card-text">
                <p>Price : ₦ 140,000</p>
              </div>
            </div>
          </Link>
        </div>
    </section>
  )
}

export default Products