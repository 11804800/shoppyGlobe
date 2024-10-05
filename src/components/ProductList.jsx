import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";

const ProductList = () => {

  //   Calling the custom hook useFetch which will fetch the data from the store
  const { data, loading, err } = useFetch("https://dummyjson.com/products");


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
      <div className="product-container">
        {/* //mapping over the data  */}
        {data?.products.map((item) => {
            // passing the props product single item to product item key for giving unique key
          return <ProductItem key={item?.id} item={item} />;
        })}
      </div>
    );
  }
};
export default ProductList;
