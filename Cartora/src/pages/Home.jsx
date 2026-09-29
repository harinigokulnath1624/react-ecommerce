import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <p className="hero-kicker">WELCOME TO CARTORA</p>
              <h1 className="display-3 fw-bold">
                Discover products you’ll love.
              </h1>
              <p className="lead text-secondary mt-3">
                Explore everyday essentials, trending products and great
                finds in one simple shopping experience.
              </p>
              <Link to="/products" className="btn btn-primary btn-lg mt-3">
                Explore Products <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-card">
                <i className="bi bi-bag-heart-fill"></i>
                <h3>Simple. Modern. Cartora.</h3>
                <p className="mb-0">
                  Browse, add to cart, update quantities and complete your
                  order with a clean React shopping flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-search"></i>
                <h5>Explore Products</h5>
                <p>Browse products fetched from a real API.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-cart-check"></i>
                <h5>Smart Cart</h5>
                <p>Add, remove and change product quantities easily.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card">
                <i className="bi bi-shield-check"></i>
                <h5>Checkout Flow</h5>
                <p>Complete the practice checkout and order-success flow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;