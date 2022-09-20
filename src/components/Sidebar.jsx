
import React from 'react'
import {topItem} from "../data"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebarcss ">
        <div className=' px-1 '>
     <div className=' flex items-center justify-center my-2'>
        {topItem.map((item)=>{
            return <div key={item.id} className=' rounded-sm border-[2px] border-[#FF686E] px-3 mx-1 bg-[#FF686E] text-[white] flex flex-col items-center'>
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
        </div>
        })}

     </div>
        <div>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
            <ul className=' list-none'>
                <li>Offers <span>78</span></li>
                <li>Food Aid</li>
                <li>Recipes</li>
                <li>Favourites</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar