import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import userEvent from "@testing-library/user-event";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="fotter">
        <span className="name">{name}</span>
        {/* <span className="price">{price}</span> */}
      </div>
      <div className="fotter">
        {/* <span className="name">{name}</span> */}
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add
      </Button>
    </div>
  );
};

export default ProductCard;
