import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/userSlice';

const Delete = () => {
  const Fname = useSelector(state=> state.user.name)
  const dispatch = useDispatch();

  const handleDelete=(e)=>{
    e.preventDefault();
    dispatch(removeItem());
   } 
  return (
    <div>
      <span>Click to delete Mr {Fname}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete
