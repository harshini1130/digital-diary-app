import {useEffect,useState} from "react";
import API from "../api";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import {FaEdit, FaTrash, FaPlus} from "react-icons/fa";

function Dashboard(){

const [entries,setEntries]=useState([]);

const userId = localStorage.getItem("userId");

useEffect(()=>{

API.get(`/diary/entries/${userId}`)
.then(res=>setEntries(res.data));

},[]);

const deleteEntry = async(id)=>{

await API.delete(`/diary/delete/${id}`);

setEntries(entries.filter(e=>e.id!==id));

};

return(

<div>

<Navbar/>

<div className="container mt-5">

<div className="d-flex justify-content-between align-items-center mb-4">

<h2 className="fw-bold">My Digital Diary</h2>

<Link to="/new" className="btn btn-primary">
<FaPlus/> New Entry
</Link>

</div>

{entries.length === 0 && (

<div className="alert alert-secondary text-center">
You have no diary entries yet. Start writing your first memory!
</div>

)}

{entries.map(entry=>(

<div className="card shadow-sm mb-4 border-0" key={entry.id}>

<div className="card-body">

<h4 className="card-title fw-bold">{entry.title}</h4>

<p className="card-text mt-3">
{entry.content}
</p>

<p className="text-muted small">
{new Date(entry.createdAt).toLocaleString()}
</p>

<div className="mt-3">

<Link 
to={`/edit/${entry.id}`}
className="btn btn-warning me-2"
>
<FaEdit/> Edit
</Link>

<button
className="btn btn-danger"
onClick={()=>deleteEntry(entry.id)}

>

<FaTrash/> Delete </button>

</div>

</div>

</div>

))}

</div>

</div>

);

}

export default Dashboard;
