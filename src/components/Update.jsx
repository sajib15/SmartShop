import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { update, removeItem } from '../store/userSlice';

const Update = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const Fname = useSelector(state=> state.user.name);
    const Femil = useSelector(state=> state.user.email);
    const dispatch = useDispatch();
     const handleUpdate=(e)=>{
      e.preventDefault();
      dispatch(update({name,email}))
     } 
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(removeItem());
        console.log("deleteItem")
       } 
  return (
    <div>
      <input type="text" placeholder={Fname} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder={Femil} onChange={(e)=>setEmail(e.target.value)} />
      <button onClick={handleUpdate}>update</button>
      <span>Click to delete Mr {Fname}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Update
