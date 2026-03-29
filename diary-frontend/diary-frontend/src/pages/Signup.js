import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

function Signup() {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const signup = async () => {

try{

await API.post("/auth/signup",{
username,
password
});

alert("Signup successful");

navigate("/");

}catch(error){

alert("Signup failed");

}

};

return (

<div className="container d-flex justify-content-center align-items-center vh-100">

<div className="card shadow-lg p-4 border-0" style={{width:"400px"}}>

<h3 className="text-center mb-4 fw-bold">Create Account</h3>

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
className="btn btn-success w-100 mb-3"
onClick={signup}

>

<FaUserPlus/> Signup </button>

<p className="text-center">

Already have an account? <Link to="/">Login</Link>

</p>

</div>

</div>

);
}

export default Signup;
