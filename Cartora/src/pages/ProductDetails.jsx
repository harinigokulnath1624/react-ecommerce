import { Link, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProducts(id);
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="container text-center py-5">
        <div className="spinner-border text-primary"></div>
        <h5 className="mt-3">Loading product...</h5>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container text-center py-5">
        <h3>{error || "Product not found."}</h3>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <Link to="/products" className="text-decoration-none">
          <i className="bi bi-arrow-left me-2"></i>Back to Products
        </Link>

        <div className="row g-5 mt-2 align-items-center">
          <div className="col-md-6 text-center">
            <div className="details-image-wrap">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="details-image"
              />
            </div>
          </div>

          <div className="col-md-6">
            <span className="product-category">{product.category}</span>
            <h1 className="fw-bold mt-2">{product.title}</h1>

            <div className="text-warning my-3">
              <i className="bi bi-star-fill"></i> {product.rating}
            </div>

            <h2 className="text-primary">${product.price}</h2>

            <p className="text-secondary mt-3">{product.description}</p>

            <div className="product-meta my-4">
              <p><strong>Brand:</strong> {product.brand || "N/A"}</p>
              <p><strong>Stock:</strong> {product.stock}</p>
              <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product)}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;