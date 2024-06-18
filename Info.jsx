import React, { useEffect, useState } from 'react';
import '../src/Styles/Info_style.css'; 
import { Regular_expenses_table } from './Regular_expenses_table';

export const Info = () => {
  const [input1,setInput1] = useState('')
  const [input2,setInput2] = useState('')
  const [show_var,setShow_var] = useState(0)
  
  const show_custom_Rg_expenses=()=>{
    setShow_var(1)
    console.log('Add button clicked')
  }
  return (
    <>
      <div className='flex_1'>
        <div id='flex-1'>
          <>
          <h2>Regular Expenses</h2>
          <input type='text' id = "Rg_expenses_input" value={input1} onChange={(e)=>setInput1(e.target.value)} placeholder='Add custom Expense'></input>
          <input type='text' id = "Rg_expenses_input_value" style={inputstyle} value={input2} onChange={(e)=>setInput2(e.target.value)} placeholder='Value'></input>
          </>
          {
          <Regular_expenses_table input1={input1} input2={input2} add_button_clicked={show_var}/>
          }
          <tr></tr>
          <table>
            <tr>
              <td id='total_td'>Total:</td>
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

