import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductsDetails() {
  const productUrl = `https://fakestoreapi.com/products`;
  const [product, setProduct] = useState({});
  const Id = useParams();
  useEffect(() => {
    fetch(`${productUrl}/${Id.ProductId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <a href="/#" className="btn btn-primary m-3">
            Add to Cart
          </a>
          <span className="btn btn-primary">{product.price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails;
