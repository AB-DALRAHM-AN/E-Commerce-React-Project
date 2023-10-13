function Product(props) {
  return (
    <div className="card">
      <img src={props.product.image} alt="" />
      <h2>{props.product.title}</h2>
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={() => {
        console.log("you are going to buy this product that cost", props.product.price)
      }}>Add to Cart</button>
    </div>
  );
}

export default Product;
