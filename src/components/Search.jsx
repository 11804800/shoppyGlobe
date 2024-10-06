import { Link, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";
import { FaArrowLeft } from "react-icons/fa6";

const Search = (props) => {
  const params = useParams();

  const { data, loading, err } = useFetch(
    `https://dummyjson.com/products/search?q=${params.name}`
  );

  // when the useFetch is loading
  if (loading) {
    return <div className="loading">Loading ...</div>;
  }
  //when the useFetch returns error
  else if (err) {
    return <div className="fetch-error">{err.message}</div>;
  } else if (data) {
    return (
      <div className="container">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">
            <FaArrowLeft size={12} />
            Home
          </Link>
          /<p>Search</p>/{params?.name}
        </div>
        <p className="search">Showing {data.products.length}+ Results for {params?.name}</p>
        <div className="product-container">
          {data?.products.length == 0 ? (
            <div className="No-CartItem">
              <h1 className="no-product-heading">
                Sorry! Not Data Found For {params.name}
              </h1>
              <Link to="/" className="back-to-home">
                Back to Home
              </Link>
            </div>
          ) : (
            data?.products.map((item) => {
              // passing the props product single item to product item key for giving unique key
              return <ProductItem key={item?.id} item={item} />;
            })
          )}
        </div>
      </div>
    );
  }
};

export default Search;
