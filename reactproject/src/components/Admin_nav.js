import React from 'react';
import {Link } from 'react-router-dom';


function Adminnav(){  
  const handleLogout = () => {
    window.location.href = '/';
}
return(
    <>
    <div style={{ "textAlign": "center" }}>
      
        <hr />
        <nav class="navbar-admin">
        <Link to="/adminhome">Home</Link> 
        <Link to="/products">Products</Link> 
        {/* <Link to="">View Product</Link>  */}
        <Link to="/addprod">Add Product</Link> 
         <Link to="" onClick={handleLogout}>Logout</Link> 
         </nav>
        <hr />

      </div>
   
    </>
)  

}

export default Adminnav;