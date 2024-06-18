import React from 'react'
import './Header_style.css'
import { Invested } from './Invested';
import { Tracker } from './Tracker';
import { Home } from './Home';
import { useState } from 'react';

function Header() {
  const [page,setPage] = useState('HOME')
  function handler(e){
    // console.log(e.target.innerText)
    let secion_name = e.target.innerText
    setPage(secion_name)
  };
  return (
    <div className='Header'>
    <div className='flexbox_container'>
        <button className='flex_item' onClick={handler}>HOME</button>
        <button className='flex_item' onClick={handler}>INVESTED</button>
        <button className='flex_item' onClick={handler}>TRACKER</button>
        <button className='flex_item'>SIGN OUT</button>
        </div> 

        {page ==="HOME" &&   
          <Home/>
        }

        {page ==="INVESTED" &&
        <Invested/>}

        {page ==="TRACKER" &&
        <Tracker/>}
    </div>
  )
}
export default Header