import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card product-card h-100 border-0">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="card-body d-flex flex-column p-4">
        <span className="product-category">{product.category}</span>
        <h5 className="product-title mt-2">{product.title}</h5>

        <div className="small text-warning mb-2">
          <i className="bi bi-star-fill"></i> {product.rating}
        </div>

        <div className="mt-auto">
          <h5 className="product-price">${product.price}</h5>
          <div className="d-flex gap-2">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-outline-primary flex-grow-1"
            >
              View
            </Link>
            <button
              className="btn btn-primary flex-grow-1"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;