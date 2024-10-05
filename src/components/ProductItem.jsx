import { useNavigate } from "react-router-dom";
import Stars from "../utils/Stars";

export default function ProductItem(props){
    //creating route 
    const route=useNavigate(); 
    return (
        //when the user will click the photo or card they will be redirected to the product detail page
        <div className="product-card" onClick={()=>{route(`/product/${props.item.id}`)}}>
            <div className="product-card-img">
                <img src={props?.item?.thumbnail} alt={props.item?.title} className="product-thumbnail"/>
            </div>
            <div className="product-card-body">
                <p>{props?.item?.title}</p>
                {/* passing rating as stars */}
                <Stars stars={props.item?.rating}/>
                <p className="price">${props.item?.price} <span>({props.item?.discountPercentage}% off)</span></p>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
    )
}
