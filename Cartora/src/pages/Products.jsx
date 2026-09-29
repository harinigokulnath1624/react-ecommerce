import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(
    () => ["all", ...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-5">
      <div className="container">
        <div className="section-heading mb-4">
          <p className="hero-kicker mb-1">SHOP</p>
          <h1 className="fw-bold">All Products</h1>
          <p className="text-secondary">
            Find something you like and add it to your cart.
          </p>
        </div>

        <div className="row g-3 mb-5">
          <div className="col-lg-8">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option value={item} key={item}>
                  {item === "all" ? "All Categories" : item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary"></div>
            <p className="mt-3 text-secondary">Loading products...</p>
          </div>
        )}

        {error && !loading && (
          <div className="alert alert-danger">{error}</div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="empty-state text-center py-5">
            <i className="bi bi-search display-5"></i>
            <h4 className="mt-3">No products found</h4>
            <p className="text-secondary">
              Try a different search or category.
            </p>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;