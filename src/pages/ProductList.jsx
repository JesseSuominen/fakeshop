import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  let content = <p>No products found</p>;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (products.length > 0) {
    content = (
      <ul className="product__list">
        {products.map((product) => (
          <li className="product__list-item" key={product.id}>
            <Link
              className="product__list-item__link"
              to={`/products/${product.id}`}
            >
              <div className="product__list-item">
                <img
                  className="product__list-item__image"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product__list-item__section">
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>👔 Products 💎</h1>
      {content}
    </div>
  );
};

export default ProductList;
