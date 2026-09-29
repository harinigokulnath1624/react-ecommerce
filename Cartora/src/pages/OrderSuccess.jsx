import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="success-card text-center">
          <div className="success-icon">
            <i className="bi bi-check-lg"></i>
          </div>

          <h1 className="fw-bold mt-4">Order Placed Successfully!</h1>
          <p className="text-secondary mt-3">
            Thank you for shopping with Cartora. Your order has been placed
            successfully.
          </p>

          <div className="d-flex justify-content-center gap-2 mt-4">
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
            <Link to="/" className="btn btn-outline-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSuccess;