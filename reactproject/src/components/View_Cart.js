import { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
function ViewCart(props) {

    const location = useLocation();
    
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState(location.state ? location.state.totalAmount : 0);
let navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have been successfully purchased');
        navigate('/userhome');
    };

    return (
        <center><br></br>
         <div style={
                {
                    backgroundImage: "url('./images/addproducts.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // if you want it fixed to viewport
                    backgroundRepeat: 'no-repeat',
                    height: '100vh', // Adjust height as needed
                }
            }

            >
        <div className='form-container'>
            
            
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                
                    <label htmlFor="fullName">FULL NAME</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                
                </div><br></br> <div className='form-row'>
                
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div><br></br>
                <div className='form-row'>
                
                    <label htmlFor="address">ADDRESS</label>
                    <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div><br></br>
                <div className='form-row'>
                    <label htmlFor="phoneNumber">PHONE NUMBER</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                </div><br></br>
                <div className='form-row'>
                    <label htmlFor="amount">AMOUNT</label>
                    <input type="number" id="amount" value={amount} readOnly className="large-input"/>
                </div><br></br>
                <button className="buttonatc" type="submit">PLACE ORDER</button>
            </form>
        </div></div>
        </center>
    );
}

export default ViewCart;
