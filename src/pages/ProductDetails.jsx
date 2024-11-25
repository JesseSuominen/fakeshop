import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const productId = params.ProductId;
  console.log(params);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Invalid data received from server");
      }
      setProduct(data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  let content = <p>Trying to fetch product details</p>;

  if (loading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error.message}</p>;
  }

  if (product) {
    content = (
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <h2>{product.category}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
        </div>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ProductDetails;
