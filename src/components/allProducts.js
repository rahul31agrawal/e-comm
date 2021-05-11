import {useFilter} from './Filters/filterContext'
import {WishButton, ViewItem} from './Buttons/index'


export const ProductsDisplay = () => {
  const { filteredData } = useFilter()

  return (
    <div style={{textAlign: "center"}} >
      {filteredData.map((product) => {
        return (
          <div style={{ display: "inline-block", margin: "1.3rem", padding: "1rem" }}>
            <div key={product.id} className="card">
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
                {/* <CartButton product={product} /> */}
                <ViewItem product={product} />
                <WishButton product={product} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};