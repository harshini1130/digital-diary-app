import {useState} from "react";
import API from "../api";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import {FaSave, FaArrowLeft} from "react-icons/fa";

function NewEntry(){

const navigate = useNavigate();

const [title,setTitle]=useState("");
const [content,setContent]=useState("");

const userId = localStorage.getItem("userId");

const save = async()=>{

await API.post("/diary/create",{
userId,
title,
content
});

navigate("/dashboard");

};

return(

<div>

<Navbar/>

<div className="container mt-5 d-flex justify-content-center">

<div className="card shadow-lg border-0 p-4" style={{width:"700px"}}>

<h3 className="fw-bold mb-4">Write New Diary Entry</h3>

<input
className="form-control mb-3"
placeholder="Entry Title"
onChange={e=>setTitle(e.target.value)}
/>

<textarea
className="form-control mb-4"
rows="8"
placeholder="Write your thoughts, memories, or reflections here..."
onChange={e=>setContent(e.target.value)}
/>

<div className="d-flex justify-content-between">

<button
className="btn btn-secondary"
onClick={()=>navigate("/dashboard")}
>
<FaArrowLeft/> Cancel
</button>

<button
className="btn btn-primary"
onClick={save}
>
<FaSave/> Save Entry
</button>

</div>

</div>

</div>

</div>

);

}

export default NewEntry;
