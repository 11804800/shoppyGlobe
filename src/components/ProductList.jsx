import useFetch from "../utils/useFetch";
import Loading from "./Loading";

const ProductList = () => {
  const { data, loading, err } = useFetch("https://dummyjson.com/products");
  console.log(data)
  if(loading)
  {
    return <Loading/>
  }
  else if(err)
  {
    return (
        <div>
            {err.message}
        </div>
    )
  }
  else if(data)
  {
    return (
        <div>
            Product data
        </div>
    )
  }
};
export default ProductList;
