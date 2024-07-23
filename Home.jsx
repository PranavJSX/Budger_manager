import React, { useState } from 'react'
import { Info } from './Info'
import { User_info } from './User_info'

export const Home = () => {
  const [Regular_total,setRegularTotal]=useState(0)
  const [Extra_total,setExtra_total] = useState(0)
  const [Earnings_total , setEarnings_total] = useState(0)

  let User_obj=[{
    Id:101,
    Name : 'Pranav Ojha',
    Email :  'maunojha1@gmail.com',
    image_src : 'public/DSC04831 (2).jpg'
  },]

  const set_total1=(val)=>{
    setRegularTotal(val)
  }

  const set_total2=(val)=>{
    setExtra_total(val)
  }
  
  const set_earings=(val)=>{
    setEarnings_total(val);
  }
  

  const user_id=101
  console.log(User_obj)
  return (
    <div><p style={{color:'azure'}}>Hi User! , Welcome to your personal Budget Manager.</p>
        <div><span><br/></span>
            <section className='section1' style={{minHeight:'480px'}}><Info get_total={set_total1} get_total2={set_total2} earnings_total={setEarnings_total}/></section>
            <section className='section2'><User_info userobj={User_obj} current_user_id={user_id} total_rg={Regular_total} total_ex={Extra_total} earnings_total={Earnings_total}/></section>
            <footer>This is the footer</footer>
        </div>
    </div>
  )
}




