import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="empty-state text-center py-5">
            <i className="bi bi-cart-x display-1 text-secondary"></i>
            <h2 className="mt-4">Your cart is empty</h2>
            <p className="text-secondary">
              Add some products before proceeding to checkout.
            </p>
            <Link to="/products" className="btn btn-primary mt-2">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-4">Your Cart</h1>

        <div className="row g-4">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="cart-item mb-3" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-secondary mb-2">${item.price}</p>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>

                <div className="text-end">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  <button
                    className="btn btn-sm btn-link text-danger d-block ms-auto"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="summary-card">
              <h4>Order Summary</h4>
              <div className="d-flex justify-content-between my-3">
                <span>Subtotal</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between border-top pt-3">
                <span>Total</span>
                <strong className="text-primary">
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>
              <Link
                to="/checkout"
                className="btn btn-primary w-100 mt-4"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;