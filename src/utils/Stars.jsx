//for showing the rating stars in the products

import { FaStar, FaStarHalfAlt, } from "react-icons/fa";
import { FaRegStar} from "react-icons/fa6";

const Stars=({stars})=>{

    //creating and new array of length 5
    //by usin array's from method which takes two argument first arraylike and second a callback function to return data;
    //in i have compare the rating passed as stars if it less than full star if more than 
    //the number which is just 0.5 more than index if less than or equal than half star if more that means the rating is less than index so
    //empty star
    
    const ratingstar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
        return (
            <span key={index}>
                {
                    stars>=index+1 ? (<FaStar/>):stars>=number ? <FaStarHalfAlt/> : <FaRegStar/>
                }
            </span>
        )
    });

    return (
        <div className="rating-star">
            {ratingstar}
        </div>
    )
}

export default Stars;