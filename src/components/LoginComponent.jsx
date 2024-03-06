import React, { useState } from 'react'
import { LoginAPI,GoogleSignInAPI} from '../api/AuthAPI';
import "../Sass/LoginComponent.scss";
import LinkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";


export default function LoginComponent() { 
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await LoginAPI(credentials.email,credentials.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home")
    } catch(err){
      console.log(err);
      toast.error("Please Check your Credentials");
    
    }
        
  }
const googleSignIn = () => {
  let response = GoogleSignInAPI();
  console.log(response);
}
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className='google-btn' onClick={googleSignIn}/>
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
