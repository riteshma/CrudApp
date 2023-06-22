import React from 'react'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';


const Add = () => {

  let navigate = useNavigate();

  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
  });

  const {username,email,phone}=user;
  const InputChange=(e)=>{
  console.log(e.target.value);
  setUser({...user,[e.target.name]:e.target.value});
  }

  const onsubmit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:3001/users",user);
    navigate('/')
  }
  
  return (
    <>
    <div className='container border shadow p-5 mt-5 w-50'>
    <form onSubmit={(e)=>onsubmit(e)} >
    <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">User Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" name='username' value={username} placeholder="User Name" required onChange={(e)=>InputChange(e)}/>
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' value={email} placeholder='Email Address' aria-describedby="emailHelp" required onChange={(e)=>InputChange(e)} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
    <input type="phone" class="form-control" id="exampleInputPhone" name='phone' value={phone} placeholder='Phone Number' required onChange={(e)=>InputChange(e)} />
  </div>
  <button type="submit" class="btn btn-primary">Add User</button>
</form>
    </div>
    </>
  )
}

export default Add