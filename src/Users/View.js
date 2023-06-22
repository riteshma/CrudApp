import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const View = () => {

    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
      });

      const {id} = useParams();

      useEffect(()=>{
        loadUser();
    }, []);

    const loadUser = async () =>{
        const result =  await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
       }

    return (
        <>
            <div className='container mt-5 py-4 w-50 border shadow'>
                <Link className="btn btn-primary" to="/" >Back to home</Link>
                <h3 className='display-4' >User Id: {id}</h3>
                <ul class="list-group">
                    <li class="list-group-item">User Name: {user.username}</li>
                    <li class="list-group-item">Email Address: {user.email}</li>
                    <li class="list-group-item">Phone Number: {user.phone}</li>
                </ul>
            </div>
        </>
    )
}

export default View