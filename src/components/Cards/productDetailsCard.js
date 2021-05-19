import { WishButton2, CartButton } from "../Buttons/index";
import "./cards.css";

export const ProductDetailsCard = ({ product }) => {
  return (
    <div className="out-box">
      <div className="product-details">
        <div className="container c-img">
          <img src={product.image} />
        </div>
        <div className="container c-details">
          <div className="title" >
            <h3 className="title-brand" >{product.brand}</h3>
            <h1 className="title-name" >{product.name}</h1>
          </div>
          <div>
            <p>
              <span>Availability:</span> {product.inStock ? "In Stock" : "Out of Stock"}{" "}
            </p>
            <p>
            <span>Delivery:</span> {product.fastDelivery ? "Fast Delivery" : "Delayed"}
            </p>
            <p><span>Material:</span> {product.material}</p>
          </div>
            <div className="prices">
              <p className="dis-price" >₹{product.price}</p>
              <p className="price-orig">₹ 1599</p>
              <p className="dis" >(45% off)</p>
            </div>
            <div>
              <h3>Description</h3>
              <p> This is product description section , hope we maeki it something soon, but no what writing, no see as of any for var used in the This is product description section , hope we maeki it something soon, but no what writing, no see as of any for var used in the </p>
            </div>
            <div>
              <CartButton product={product} />
              <WishButton2  product={product} lg />
            </div>
            <div className="extra-details" >
              <h3>PRODUCT DETAILS</h3>
              <p>Premium non-stretch denim. </p>
              <p>Clean black wash.</p>
              <p>Long sleeves, snap-button cuffs.</p>
              <p>Spread collar, button front.</p>
              <p>Snap-flap patch pockets at chest.</p>
              <p>Curved shirttail hem.</p>

              <h3>Size & Fit</h3>
              <p>Regular Fit</p>
              <p>The model (height 6') is wearing a size 39</p>

              <h3>Material & Care </h3>
              <p>100% cotton</p>
              <p>Machine-wash</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};