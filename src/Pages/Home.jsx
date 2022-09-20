
import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <Sidebar />
        <Feed/>
      </div>
    </div>
  )
}

export default Home
