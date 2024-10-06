import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RemoveFromCart } from "../Redux/CartSlice";

const CartItem = (props) => {
  const route = useNavigate();

  const dispatch = useDispatch();

  //FUNCTION:for removing the cart item from cart slice
  function RemoveItem() {
    //dispatching the removecart action which takes index passed as props from cart.jsx
    dispatch(RemoveFromCart(props.index));
  }

  //quantity
  var [count, setCount] = useState(props.item?.minimumOrderQuantity);

  //FUNCTION:For decreseing the quantity
  //it check if the value is less than the minimum quantity required to buy the product
  function MinusQuantity() {
    if (count >= props.item?.minimumOrderQuantity) {
      setCount(count--);
    } else {
      alert(
        "Minimum Quantity is " + props.item.minimumOrderQuantity + " required"
      );
    }
  }

  return (
    <div className="cart-card">
      <div
        className="cart-product-img"
        onClick={() => route(`/product/${props.item.id}`)}
      >
        <img src={props.item.thumbnail} />
      </div>
      <div className="cart-product-details">
        <p
          className="cart-product-title product-title"
          onClick={() => route(`/product/${props.item.id}`)}
        >
          {props.item.title}
        </p>
        <p
          className="product-stock-status"
          style={{
            color: `${
              props.item?.availabilityStatus.includes("Low")
                ? "brown"
                : "rgb(82, 118, 0)"
            }`,
          }}
        >
          {props.item?.availabilityStatus}
        </p>
        <p className="cart-price">
          {/* it will show the total proce multiply by value */}$
          {props.item?.price * count}{" "}
          <span>({props.item?.discountPercentage}% off)</span>
        </p>
        <div className="quantity">
          <button
            className="increase-btn"
            onClick={() => {
              setCount(count++);
            }}
          >
            <FaPlus />
          </button>
          {count}
          <button className="decrease-btn" onClick={MinusQuantity}>
            <FaMinus />
          </button>
        </div>
        <button className="remove-btn" onClick={RemoveItem}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
