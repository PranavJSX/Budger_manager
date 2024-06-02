import React, { useEffect, useState } from 'react';
import '../src/Styles/Info_style.css'; 

export const Info = () => {
  const [input1,setInput1] = useState('')
  const [input2,setInput2] = useState('')
  const add_Rg_expense=function(e){
    setInput1(input1)
    setInput2(input2)
    let new_expense=`<tr className='Rg_expenses_table_row'>
      <td>${input1}</td>
      <td>${input2} Rs</td>
    </tr>`;
  const our_table = document.getElementById('Rg_expenses_table')
  our_table.innerHTML+=new_expense
  console.log("Add expense button clicked")
  e.preventDefault();
  return
  }
 const increase_func=function(x){
  console.log('Increase button clicked');
  let creation_string = `valueofexpense_${x}`
  let point = document.getElementById(creation_string )
  console.log(point)
  console.log(point.innerHTML)
  let current_value = parseInt(point.innerHTML)
  let temp = current_value+1000
  point.textContent=temp
  return
 }
 const decrease_func=function(x){
  console.log('Increase button clicked');
  let creation_string = `valueofexpense_${x}`
  let point = document.getElementById(creation_string )
  console.log(point)
  console.log(point.innerHTML)
  let current_value = parseInt(point.innerHTML)
  let temp = current_value-1000
  point.textContent=temp
  return
 }
  return (
    <>
      <div className='flex_1'>
        <div id='flex-1'>
          <>
          <h2>Regular Expenses</h2>
          <input type='text' id = "Rg_expenses_input" value={input1} onChange={(e)=>setInput1(e.target.value)} placeholder='Add custom Expense'></input>
          <input type='text' id = "Rg_expenses_input_value" style={inputstyle} value={input2} onChange={(e)=>setInput2(e.target.value)} placeholder='Value'></input>
          <button id='Rg_expenses_add_button' onClick={(e)=>add_Rg_expense(e)}>ADD</button>
          </>
          <table id='Rg_expenses_table'>
            <tr className='Rg_expenses_table_row'>
              <td>Home Rent</td>
              <td><button className='local_button' onClick={(e)=>{decrease_func(e.target.value)}} value={1}>-</button></td>
              <td id='valueofexpense_1'>0</td>
              <td>Rs</td>
              <td><button className='local_button' onClick={(e)=>{increase_func(e.target.value)}} value={1}>+</button></td>
            </tr>
            <tr className='Rg_expenses_table_row'>
              <td>Home Rent</td>
              <td><button className='local_button' onClick={(e)=>{decrease_func(e.target.value)}} value={2}>-</button></td>
              <td id='valueofexpense_2'>0</td>
              <td>Rs</td>
              <td><button className='local_button' onClick={(e)=>{increase_func(e.target.value)}} value={2}>+</button></td>
            </tr>
            <tr className='Rg_expenses_table_row'>
              <td>Home Rent</td>
              <td><button className='local_button' onClick={(e)=>{decrease_func(e.target.value)}} value={3}>-</button></td>
              <td id='valueofexpense_3'>0</td>
              <td>Rs</td>
              <td><button className='local_button' onClick={(e)=>{increase_func(e.target.value)}} value={3}>+</button></td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Total:</td>
              <td>{total_function}</td>
            </tr>
          </table>
        </div>
        <div id='flex-2'>flex 2</div>
        <div id='flex-3'>flex 3</div>
      </div>
    </>
  )
}


const inputstyle={
  maxWidth:'50px',
}

