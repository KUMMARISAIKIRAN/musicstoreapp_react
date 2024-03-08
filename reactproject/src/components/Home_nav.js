
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './homenav.css'
function Home_Nav()
{
    return (
        <>
        <div class="image-container">
     <nav class="navbar">
        <Link to="/">Home</Link>  
        <Link to="/userlogin?returnUrl=/userhome">Category</Link>  
        <Link to="/login"> Admin</Link> 
        <Link to="/userlogin"> User </Link>  
        <Link to="/contact">Contact</Link> 
        <Link to="/about">About</Link> 
       </nav>
        <img className="bgimg" src="./images/main_bg.png" />
        </div>
        </>

    )


    
    
}
export default Home_Nav