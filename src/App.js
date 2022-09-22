import React from 'react'
import Delete from './components/Delete'
import Home from './components/Home'
import Update from './components/Update'

import  Store from "./store/Store";
const App = () => {
  return (
    <div>
      <Home/>
      <Update/>
      <Delete/>
    </div>
  )
}

export default App
