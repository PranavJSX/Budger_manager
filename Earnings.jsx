
import React, { useEffect, useState } from 'react'
import '../src/Styles/earnings_style.css';

export const Earnings = (props) => {

  const [income_source,setincome_source] = useState('')
  const [income_amount,setincome_amount] = useState('')
  const [counter,setCounter] = useState(0)
  const [total_earnings,settotal_earnings] = useState(0)

  


  
  const rg_earnings=[{
    Incoming : "Salary",
    Amount : 30000,
    icon:<button class = 'minus_button' onClick={(e)=>delete_my_earning(e)}><span class="material-symbols-outlined">
    remove
    </span></button>,
  },{
    Incoming : "House rent Earnings",
    Amount : 8000,
    icon:<button class = 'minus_button' onClick={(e)=>delete_my_earning(e)}><span class="material-symbols-outlined">
    remove
    </span></button>
  }]

  const [rg_earnings_list,setrg_earnings_list] = useState(rg_earnings)

  const print_rg_earnings=rg_earnings_list.map(i=>
    <>
      <li id='earnings_list_elements'>{i.Incoming}:{i.Amount}   {i.icon}{console.log('printed')}</li>
    </>
  )


  const delete_my_earning=(e)=>{
    console.log('Remove button is clicked');
    let temp = e.target.parentElement.parentElement.firstChild;
    temp = temp.textContent
    let index=0
    console.log(temp)
    console.log(temp!='ol')
    rg_earnings_list.forEach(i=>{
      if(temp===i.Incoming)
        rg_earnings_list.splice(index,1)
    index++;
    }
  )
   let i = counter + 1
    setCounter(i)
    get_total_earnings()
    return
  }


  const add_income=(e)=>{
    if(income_amount=='' || income_source=='') {
      alert('Please enter all the fields')
      return
    }
    e.preventDefault()
    console.log(income_amount)
    let source = income_source
    let amount = income_amount
    console.log(rg_earnings_list)
    let myobj = {
      Incoming : source,
      Amount : amount,
      icon:<button class = 'minus_button' onClick={(e)=>delete_my_earning(e)}><span class="material-symbols-outlined">
      remove
      </span></button>
    }
    rg_earnings_list.push(myobj)
    setrg_earnings_list(rg_earnings_list)
    console.log(rg_earnings_list)
    let i = counter + 1
    setCounter(i)
    setincome_amount('')
    setincome_source('')
    return
  }


  const get_total_earnings = function(){
    let total = 0 
    rg_earnings_list.map(i=>(
      total += parseInt(i.Amount)
    ))
    settotal_earnings(total)
    props.total_earinings(total)
  }

  useEffect(()=>{
    get_total_earnings()
  })

  return (
    <>
    <ul className = 'barlow-condensed-light'>
      <li>
        Earnings
        <ol id='my_main_list'>{print_rg_earnings}</ol>
      </li>
    </ul>

    <>
    <section id='addition_div'>
      <form id='myform'>
        <input placeholder='Incoming Source' value={income_source} onChange={(e)=>{setincome_source(e.target.value)}}></input>
        <input placeholder='Enter Amount' value={income_amount} onChange={(e)=>{setincome_amount(e.target.value)}}></input>
        <button type='submit' onClick={(e)=>add_income(e)}>Submit</button>
      </form>
      {total_earnings}
    </section>
    </>
    </>

  )
}
