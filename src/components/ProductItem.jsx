import { useNavigate } from "react-router-dom";
import Stars from "../utils/Stars";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/CartSlice";

export default function ProductItem(props) {
  //creating route
  const route = useNavigate();

  //for dispatching the redux action
  const dispatch = useDispatch();

  //getting the cart data from store
  const Cart = useSelector((state) => {
    return state.cart.value;
  });

  function PushToCart() {
    //finding if the product already exists in the cart
    const index = Cart.findIndex((item) => item.id == props?.item?.id);
    if (index) {
      //it will call addtocart action from cart slice and store the whole data about the
      //product
      dispatch(AddToCart(props.item));
    } else {
      alert("Product is Already in Cart");
    }
  }

  return (
    <div className="product-card">
      {/* //when the user will click the photo or card they will be redirected to the product detail page */}
      <div
        className="product-card-img"
        onClick={() => {
          route(`/product/${props.item.id}`);
        }}
      >
        <img
          src={props?.item?.thumbnail}
          alt={props.item?.title}
          className="product-thumbnail"
          loading="lazy"
        />
      </div>
      <div className="product-card-body">
        <p
          onClick={() => {
            route(`/product/${props.item.id}`);
          }}
          className="product-title"
        >
          {props?.item?.title}
        </p>
        {/* passing rating as stars */}
        <Stars stars={props.item?.rating} />
        <p className="price">
          ${props.item?.price}{" "}
          <span>({props.item?.discountPercentage}% off)</span>
        </p>
        <button className="add-to-cart-btn" onClick={PushToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
