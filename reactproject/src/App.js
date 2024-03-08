import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Adminhome from './components/Admin_Home';
import Add_Product from './components/Add_Product';
import Products from './components/Products';
import ReactDOM from 'react-dom/client';
import Admin_Home from './components/Admin_Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home_Nav from './components/Home_nav';
import Admin_Nav from './components/Admin_nav';
import Userlogin from './components/userLogin';
import Userhome from './components/User_Home';
import User_nav from './components/User_nav';
import Category from './components/Category';
import cartStore from './Stores/CartStore';
import { Provider } from 'react-redux';
import ViewCart from './components/View_Cart';

cartStore.dispatch({type:"CREATE"}); 
function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const handleAdminLogin = (status) => {
    setIsAdminLoggedIn(status);
  };
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const handleUserLogin = (status) => {
    setIsUserLoggedIn(status);
  };
  return (
    <BrowserRouter>
      <div>
        {isAdminLoggedIn ? <Admin_Nav /> : isUserLoggedIn ? <User_nav /> : <Home_Nav />}

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/viewcart" element={<ViewCart />} />
          <Route path="/login" element={<Login handleAdminLogin={handleAdminLogin} />} />
          <Route path="/userlogin" element={<Userlogin handleUserLogin={handleUserLogin} />} />
          <Route path="/category" element={
            <ProtectedRoute returnUrl="/category">
               <Provider store={cartStore}>
                <Category/>
              </Provider>
            </ProtectedRoute>
          } />
          <Route path="/adminhome" element={
            <ProtectedRoute returnUrl="/adminhome" >
              <Adminhome />
            </ProtectedRoute>
          } />
          <Route path="/userhome" element={
            <ProtectedRoute returnUrl="/userhome" >
              <Userhome />
            </ProtectedRoute>
          } />
        
          <Route path="/addprod" element={<Add_Product />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;