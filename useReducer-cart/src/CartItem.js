import React from "react";
import { useGlobalContext } from "./context";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>

      <div className="amount-div">
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id)}>
          <FaMinusCircle />
        </button>

        {/* amount */}
        <p className="amount">{amount}</p>

        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaPlusCircle />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
