import { Home, KeyboardArrowDown, LocationCity, Menu, MoreVert, MyLocation, Search } from '@mui/icons-material'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import React, { useState } from 'react'
const Navbar = () => {

    const [move, Setmove]=useState(false);
  return (
    <div className=' h-[60px] w-[100%] bg-[#FDD670] flex items-center justify-between sticky top-0'>
        <div className=' sm:flex-2 flex  h-[100%] items-center justify-center '>
            <div className='w-[100%] h-[80%] flex items-center justify-center'>
                <span className='px-[8px] flex items-center h-[100%] ml-1 hover:bg-[#c7a349] cursor-pointer rounded-md'><Menu /></span>
                <span className=' mx-1 font-semibold text-[#403F3D]'>SmartShop</span>
            </div>
          
        </div>
        <div className='flex-1 sm:flex-[7] bg-[white] w-[50px] sm:w-[100%] p-2 rounded-md flex items-center justify-between'>
            <input className='w-[90%] outline-none ' type="text"  placeholder='Search for products (e.g milk, eggs, potato)'/>
            <Search/>
            
        </div>
        <div className='sm:hidden flex items-center justify-start'>
           <MoreVert/>
        </div>
        <div className=' flex-[4] hidden  sm:flex justify-end items-center h-[100%] relative text-[#615E58]'>
           <span className='flex items-center justify-center h-[100%] w-fit px-[18px] hover:bg-[#c7a349] cursor-pointer border-r-[1px] border-[grey]' onMouseOver={(()=> Setmove(true)) } onMouseOut={(()=>Setmove(false))}><Home/> Dhaka<KeyboardArrowDown/></span>
           <div className={`absolute bg-white top-[60px] -left-[270px] w-[400px] shadow-md ${move ? "block": "hidden"} cursor-pointer rounded-b-md`} onMouseOver={(()=> Setmove(true)) } onMouseOut={(()=>Setmove(false))} >
            <div className='flex items-center justify-start p-[20px] pb-[20px] hover:bg-[#ddc0c1]'>
                <span className=' text-[#FF686E] w-[30px] h-[30px] bg-[white] text-[10px] rounded-full shadow-md flex items-center justify-center'><MyLocation/></span>
                <span>Use My Current Location</span>
            </div>
            <hr className=' my-1'/>
            <div className=' flex items-center justify-start p-[20px] pt-[20px] hover:bg-[#ddc0c1]  rounded-b-md'>
            <span className='text-[#FF686E] w-[30px] h-[30px] bg-[white] text-[10px] rounded-full shadow-md flex items-center justify-center'><LocationCity/></span>
                <span>Change city</span>
            </div>
           </div>
           <span className='flex items-center justify-center h-[100%] w-fit px-[18px] hover:bg-[#c7a349] cursor-pointer border-r-[1px] border-[grey]'><QuestionMarkIcon/>Help</span>
           <span className='flex items-center justify-center h-[100%] w-fit px-[18px] cursor-pointer '>EN|BN</span>

           <span className=' bg-[#FF686E] h-[100%] flex justify-center items-center px-[38px] text-[white] font-bold cursor-pointer hover:bg-[#d65256]'>Sign In</span>
        </div>
    </div>
  )
}

export default Navbar