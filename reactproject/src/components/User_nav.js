import React from 'react';
import {Link } from 'react-router-dom';


function Usernav(){  

    const handleLogout = () => {
        window.location.href = '/';
    }
return(
    <>
    <div style={{ "textAlign": "center" }}>
      
        <hr />
        <nav class="navbar-admin">
        <Link to="/userhome">Home</Link> 
        <Link to="/products">Products</Link> 
        <Link to="/category">Categories</Link> 
        {/* <Link to="">Cart</Link> | */}
         <Link to="" onClick={handleLogout}>Logout</Link> 
         </nav>
        <hr />
      </div>
     
    </>
)  

}

export default Usernav;