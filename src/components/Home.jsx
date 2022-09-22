import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const Fname = useSelector(state=> state.user.name)
  return (
    <div>
      Hello Mr {Fname} wellcom to my page...
    </div>
  )
}

export default Home
