import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const HeaderComponent = () => {

 //it is an alternate way to route from one page to another without using link 
 //it takes an link value as argument naviagate("/home") it will route the use to home page from browserouter 
  const route=useNavigate();  
  const [search ,setSearch]=useState('');

  //FUNCTION:Search Function for search products by name
  function SearchProduct()
  {
    if(search)
    {
        alert("Searched  "+search);
    }
  }

  return (

    // Header Container for nav 
    <div className="header-container">
        {/* Logo Images container */}
      <div className="header-logo-div" onClick={()=>route("/")}>
        <img src="/logo.png" className="header-logo-img" alt="Header_Logo" />
      </div>
      {/* header sub container for search and navlinks */}
      <div className="header-sub-container">
        {/* search input div */}
        <div className="Search-div">
          <input
            type="text"
            placeholder="Search Products..."
            className="search-input"
            name="Search"
            required
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button className="Search-btn" onClick={SearchProduct}>
            <FaSearch size={22} />
          </button>
        </div>
        {/* nav links container */}
        <div className="header-nav-div">
          <Link to="/" className="nav-links">
            <FaHouse />
            Home
          </Link>
          <Link to="/cart" className="cart-link nav-links">
            <img src="/cart.png" width="35" className="cart-img" />
            Cart
            <span className="cart-item-count">0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
