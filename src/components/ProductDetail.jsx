import { FaArrowLeft, FaLeftRight, FaShield, FaTruck } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { FaShieldAlt, FaUser } from "react-icons/fa";
import { useState } from "react";
import Stars from "../utils/Stars";

const ProductDetail = () => {
  const params = useParams();
  //if the product has multiple images to show
  const [imgIndex, setImgIndex] = useState(0);

  //   Calling the custom hook useFetch which will fetch the data from the store
  const { data, loading, err } = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  // when the useFetch is loading
  if (loading) {
    return <div className="loading">Loading ...</div>;
  }
  //when the useFetch returns error
  else if (err) {
    return <div className="fetch-error">{err.message}</div>;
  }
  //when it return the data without any error
  else if (data) {
    return (
      <div className="container">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">
            <FaArrowLeft size={12} />
            Home
          </Link>
          /<p>Product</p>/{data?.title}
        </div>
        <div className="Product-Detail-container">
          <div className="product-img-div">
            <div className="img-nav">
              {data?.images.map((item, index) => {
                return (
                  <img
                    src={item}
                    alt={data?.title}
                    key={item}
                    width="80"
                    height="80"
                    onClick={() => setImgIndex(index)}
                  />
                );
              })}
            </div>
            <img
              src={data?.images[imgIndex]}
              alt={data?.title}
              className="product-images"
            />
          </div>
          <div className="product-details">
            <p className="Product-name">{data?.title}</p>
            <div className="ratings">
              <p>{data?.rating}</p>
              <Stars stars={data?.rating} />
              <p>{data?.reviews.length} ratings</p>
            </div>
            <hr />
            <p className="product-price">
              <span>-{data?.discountPercentage}% </span> ${data?.price}
            </p>
            <p>Inclusive all taxes</p>
            <p
              className="product-stock-status"
              style={{
                color: `${
                  data?.availabilityStatus.includes("Low")
                    ? "brown"
                    : "rgb(82, 118, 0)"
                }`,
              }}
            >
              {data?.availabilityStatus}
            </p>
            <hr />
            <div className="product-offerings">
              <span>
                <FaShieldAlt size={32} color="teal"/>
                {data?.warrantyInformation}
              </span>
              <span>
                <FaTruck size={32} color="teal"/>
                {data?.shippingInformation}
              </span>
              <span>
                <FaLeftRight size={32} color="teal" />
                {data?.returnPolicy}
              </span>
            </div>
            <hr />
            <div className="product-features">
              <table>
                <tbody>
                <tr>
                  <td className="head">Brand</td>
                  <td>{data.brand}</td>
                </tr>
                <tr>
                  <td className="head">Sku</td>
                  <td>{data?.sku}</td>
                </tr>
                <tr>
                  <td className="head">width</td>
                  <td>{data?.dimensions?.width} cm</td>
                </tr>
                <tr>
                  <td className="head">Depth</td>
                  <td>{data?.dimensions?.depth} cm</td>
                </tr>
                <tr>
                  <td className="head">Height</td>
                  <td>{data?.dimensions?.height} cm</td>
                </tr>
                </tbody>
              </table>
            </div>
             <hr/> 
            <div className="product-desc">
              <h3 className="heading">Description :-</h3>
              {data?.description}
            </div>
            <hr />
          </div>
        </div>
        <hr />
        <h1 className="title">Reviews</h1>
        <div className="product-rating-div">
          {data?.reviews.map((item, index) => {
            return (
              <div key={index} className="reviews">
                <div className="reviewer-data">
                  <span className="icon">
                    <FaUser />
                  </span>
                  <div className="reviewer-name">
                    <p>{item.reviewerName}</p>
                    <p>{item?.reviewerEmail}</p>
                  </div>
                </div>
                <div className="comment">{item?.comment}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default ProductDetail;
