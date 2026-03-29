import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const logout = ()=>{
localStorage.removeItem("userId");
navigate("/");
};

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/dashboard">
MyDiary
</Link>

<div>

<Link className="btn btn-light me-2" to="/new">
New Entry
</Link>

<button
className="btn btn-danger"
onClick={logout}
>
Logout
</button>

</div>

</div>

</nav>

);

}

export default Navbar;