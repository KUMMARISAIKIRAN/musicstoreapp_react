import React, {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";

function Userlogin({ handleUserLogin }) {   

    const [uid, setUserId]  = useState("");
    const [pwd, setPassword]  = useState("");
    const [result, setResult]  = useState(""); 

    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    function loginButton_click()
    {      
      
       const queryString = location.search; // returns the query string from the current url
      // let strReturnUrl  =  new URLSearchParams(search).get('key');
       let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      
       if(strReturnUrl == null)
       {
        strReturnUrl = "/";
       }
      
        if(uid =="saikiran" && pwd  == "saikiran")
        {   
          // In real-time apps, we will get the token from the server
          // JWT token is the popular token generation library          
           let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAA";
           sessionStorage.setItem('user-token', token);
          //   navigate("/Emps");
           //navigate(strReturnUrl);
           handleUserLogin(true);
           navigate("/userhome")
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }


  return (
    <>
    <div className='login-container'> 
     <center>
      <fieldset>
                <h3><bold>User Login</bold></h3>

                <label>User Id  : </label>
                <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  value={pwd}  onChange={(args) => setPassword(args.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"    />
                <p  style={{color : "red"}}>{result}</p>   
       </fieldset></center>  </div> 
    </>
  );

}

export default Userlogin;