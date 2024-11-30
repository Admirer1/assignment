import React from 'react'
import '../App.css';  // Make sure the path is correct

import { Outlet } from 'react-router-dom';
const AppLayout = () => {
  return (
    <div>
app
 <div className='grid-background'> 
    </div>
    <Outlet/>
  

    </div>
   
      
   
  )
}

export default AppLayout;
