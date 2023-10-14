import "./styles.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <>
    <div class="card w-18rem">
      <img src={product.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">
          {product.description}
        </p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
    </>
  );
}

export default Product;
