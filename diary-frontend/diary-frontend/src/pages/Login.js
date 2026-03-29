import { useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Login() {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const login = async () => {

try{

const res = await API.post("/auth/login",{
username,
password
});

if(res.data){

localStorage.setItem("userId",res.data.id);

window.location="/dashboard";

}else{

alert("Invalid username or password");

}

}catch(error){

alert("Login failed");

}

};

return (

<div className="container d-flex justify-content-center align-items-center vh-100">

<div className="card shadow-lg p-4 border-0" style={{width:"400px"}}>

<h3 className="text-center mb-4 fw-bold">MyDiary Login</h3>

<input
className="form-control mb-3"
placeholder="Username"
onChange={e=>setUsername(e.target.value)}
/>

<input
className="form-control mb-3"
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button
className="btn btn-primary w-100 mb-3"
onClick={login}

>

<FaSignInAlt/> Login </button>

<p className="text-center">

Don't have an account? <Link to="/signup">Sign up</Link>

</p>

</div>

</div>

);
}

export default Login;
