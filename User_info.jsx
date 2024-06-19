import React, { useEffect, useState } from 'react';

import '../src/Styles/User_info_style.css'

export const User_info = (props) => {
    // const obj1 = props.User_obj

    const print_user_details=props.userobj.map(i=>
        <>
        <p className='grid_child_1'>{i.Name}</p>
        </>
    )
  return (
    <>
    <div className='grid-1'>
    {print_user_details}
    <div className='grid_items'>Total Expenses <br/>{props.total}</div>
    <div className='grid_items'>Extra Expenses <br/>{100}</div>
    </div>
    </>
  )
}

// userobj

let User_obj=[{
    Id:101,
    Name : 'Pranav Ojha',
    Email :  'maunojha1@gmail.com',
    image_src : 'public/DSC04831 (2).jpg'
  },]