import { useParams,Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react"

export const Read=()=>{
    const [data,setdata] = useState([]);
    const {id} =useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/users/'+ id)
        .then(res=>setdata(res.data))
        .catch(err=>console.log(err));
    },[])
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h3>Detail of User</h3>
                <div className="mb-2"> 
                   <strong>Name:{data.name}</strong>
                </div>
                <div className="mb-2"> 
                   <strong>Email:{data.email}</strong>
                </div>
                <div className="mb-3"> 
                   <strong>Phone:{data.name}</strong>
                </div>
                <Link to={`/update/${id}`} className='btn btn-success' >Edit</Link>
                <Link to='/' className='btn btn-primary ms-3' >Back</Link>
            </div>
        </div>
    )
}