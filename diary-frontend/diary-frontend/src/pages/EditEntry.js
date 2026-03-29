import {useEffect,useState} from "react";
import {useParams,useNavigate} from "react-router-dom";
import API from "../api";

function EditEntry(){

const {id}=useParams();
const navigate = useNavigate();

const [title,setTitle]=useState("");
const [content,setContent]=useState("");

useEffect(()=>{

API.get(`/diary/entry/${id}`)
.then(res=>{

setTitle(res.data.title);
setContent(res.data.content);

});

},[id]);


const updateEntry = async()=>{

await API.put(`/diary/update/${id}`,{
title,
content
});

navigate("/dashboard");

};


return(

<div className="container mt-4">

<h2>Edit Entry</h2>

<input
className="form-control mb-3"
value={title}
onChange={e=>setTitle(e.target.value)}
/>

<textarea
className="form-control mb-3"
rows="6"
value={content}
onChange={e=>setContent(e.target.value)}
/>

<button
className="btn btn-success"
onClick={updateEntry}
>
Update Entry
</button>

</div>

);

}

export default EditEntry;