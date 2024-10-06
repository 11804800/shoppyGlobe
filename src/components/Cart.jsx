import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart=()=>{

    const data=useSelector((state)=>{
        return state.cart.value;
    });

    console.log(data);
    return (
        <div>
            <CartItem/>
        </div>
    )
}

export default Cart;