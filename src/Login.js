import React from "react";
import "./Login.css"
import { useState } from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link  , useNavigate} from "react-router-dom";
import { auth } from "./Firebase"




function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const signIn = e =>{
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email,password)
          .then(auth =>{
            navigate('/');
          })
          .catch(error =>alert(error.message))
    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)

          .then(auth =>{
            if(auth){
                navigate('/');}
          })
          .catch(error =>alert(error.message))
    }



    return(
        <div className="login">
            <Link to="/"  style={{textDecoration:"none"}}>
            <div className="login_logo">
                <StorefrontIcon className="logo_img" fontSize="large"/>
                <h2 className="logo_title">eShop</h2>
            </div>
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button className="login_btn" onClick={signIn}>Sign In</button>
                </form>
            <p>by signing-in you agree to the eShop Website conditions</p>

                <button className="btn_register" onClick={register}>Sign Up </button>


            </div>

        </div>
    );
}
export default Login