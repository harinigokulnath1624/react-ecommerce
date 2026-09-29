import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  if (cart.length === 0) {
    return (
      <section className="py-5">
        <div className="container text-center">
          <h2>Your cart is empty</h2>
          <p className="text-secondary">
            Add products before going to checkout.
          </p>
          <Link to="/products" className="btn btn-primary">
            Shop Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-4">Checkout</h1>

        <div className="row g-4">
          <div className="col-lg-7">
            <form className="checkout-card" onSubmit={handleSubmit}>
              <h4 className="mb-4">Delivery Details</h4>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">City</label>
                  <input
                    className="form-control"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-6">
                  <label className="form-label">Pincode</label>
                  <input
                    className="form-control"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="btn btn-primary w-100 mt-4" type="submit">
                Place Order
              </button>
            </form>
          </div>

          <div className="col-lg-5">
            <div className="summary-card">
              <h4>Order Total</h4>
              <div className="d-flex justify-content-between mt-4">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>
              <div className="d-flex justify-content-between border-top pt-3 mt-3">
                <strong>Total</strong>
                <strong className="text-primary">
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;