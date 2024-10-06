import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Cart = () => {
  const data = useSelector((state) => {
    return state.cart.value;
  });

  console.log(data);
  return (
    <div className="container" style={{ background: "rgb(234, 237, 237)" }}>
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-link">
          <FaArrowLeft size={12} />
          Home
        </Link>
        /<p>Cart</p>
      </div>
      <div className="cart-container">
        <div className="Cart">
          <h1>Shopping Cart</h1>
          <p>Price</p>
        </div>
        <hr />{" "}
        {data.length == 0 ? (
          //it will show when the cart is empty
          <div className="No-CartItem">
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="back-to-home">
              Browse Products
            </Link>
          </div>
        ) : (
          data.map((item, index) => {
            return <CartItem key={item.id} index={index} item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
