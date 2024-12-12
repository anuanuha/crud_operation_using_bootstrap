import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Create =()=>{
    const[value, setValue]=useState({
        name:'',
        email:'',
        phone:''
    });
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',value)
        .then(res=>{console.log(res)
        navigate('/')})
        .catch(err=>console.log(err))
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a User</h1>
                <form>
                    <div className="mb-2">
                      <label htmlFor="name">Name:</label>
                      <input type="text" name="name" className="form-control" placeholder="enter the name"
                      onChange={e=>setValue({...value, name:e.target.value})}></input>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email">Email:</label>
                      <input type="text" name="email" className="form-control" placeholder="enter the email"
                      onChange={e=>setValue({...value, email:e.target.value})}></input>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="phone">Phone:</label>
                      <input type="text" name="Phone" placeholder="enter the phone number"
                      onChange={e=>setValue({...value, phone:e.target.value})}></input>
                    </div>
                     <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                     <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    )
}