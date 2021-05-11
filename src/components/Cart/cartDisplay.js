import {useCart} from './cartContext'

export const CartDisplay = () => {
  const { state, increaseQuantity, decreaseQuantity, removeFromCart } = useCart()
  return (
    <div style={{textAlign: "center"}}>
      {state.map((product) => {
        return (
          <div style={{ display: "inline-block", margin: "1.3rem", padding: "1rem" }}>
            <div className="card">
              <span className="prod-badge">{product.offer}</span>
              <img className="prod-img" src={product.image} alt="" />
              <h3>{product.name}</h3>
              {product.inStock && <div> In Stock </div>}
              {!product.inStock && <div> Out of Stock </div>}
              {product.fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
              <div className="price">
                <p>₹ {product.price}</p>
              </div>
              <p>Rating {product.ratings}</p>
              <div className="prod-btns">
                <button
                  className="btn btn-primary"
                  onClick={() => decreaseQuantity(product)}
                >
                  -
                </button>
                <p> Quantity {product.qty}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => increaseQuantity(product)}
                >
                  +
                </button>
              </div>
              <button
                className="btn btn-secondary"
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
