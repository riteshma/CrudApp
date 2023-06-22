import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Home = () => {

    const [users, setUser]=useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async  () =>{
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data)
        console.log(result.data)
    };

    const deletUser = async (id) => {
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUsers();
    }
  return (
    <>
    <div className='containers'>
    <table class="table  border shadow">
  <thead>
    <tr className='table-dark'>
      <th scope="col">S.No</th>
      <th scope="col">User Name</th>
      <th scope="col">Email Address</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((user,index)=>(
      <tr>
      <th scope='row' >{index+1}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
      <Link className='btn btn-outline-success' to={`/view/${user.id}`} ><i class="fa-solid fa-eye"></i></Link>
      <Link className='btn btn-outline-primary m-3' to={`/user/edit/${user.id}`} ><i class="fa-solid fa-pen-to-square"></i></Link>
      <Link className='btn btn-outline-danger' onClick={()=>deletUser(user.id)} ><i class="fa-solid fa-trash-can"></i></Link>
      </td>
      </tr>
    ))
   }
  </tbody>
</table>
    </div>
    
    </>
  )
}

export default Home