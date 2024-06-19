import React, { useState } from 'react'
import { Info } from './Info'
import { User_info } from './User_info'

export const Home = () => {
  const [Regular_total,setRegularTotal]=useState(0)

  let User_obj=[{
    Id:101,
    Name : 'Pranav Ojha',
    Email :  'maunojha1@gmail.com',
    image_src : 'public/DSC04831 (2).jpg'
  },]

  const set_total=(val)=>{
    setRegularTotal(val)
  }

  const user_id=101
  console.log(User_obj)
  return (
    <div>Hi User! , Welcome to your personal Budget Manager.
        <div><span><br/></span>
            <section className='section1' style={{minHeight:'620px'}}><Info get_total={set_total}/></section>
            <section className='section2'><User_info userobj={User_obj} current_user_id={user_id} total={Regular_total}/></section>
            <footer>This is the footer</footer>
        </div>
    </div>
  )
}




