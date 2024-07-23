import React, { useEffect, useState } from 'react';
import '../src/Styles/Info_style.css'; 
import { Regular_expenses_table } from './Regular_expenses_table';
import {Extra_expenses_table} from './Extra_expenses_table';
import { Earnings } from './Earnings';

export const Info = (props) => {
  const [input1,setInput1] = useState('')
  const [input2,setInput2] = useState('')
  const [total,setTotal] = useState(0)
  const [input3,setInput3] = useState('')
  const [input4,setInput4] = useState('')
  const [total2,setTotal2] = useState(0)

  
  const handle_total=(val)=>{
    props.get_total(val)
    setTotal(val)
  }

  const handle_total2=(val)=>{
    props.get_total2(val)
    setTotal2(val);
  }

  const handle_earnings=(val)=>{
    props.earnings_total(val)
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
          <Regular_expenses_table input1={input1} input2={input2} totalfunction={handle_total}/>
          }
          <tr></tr>
          <table className='total_table'>
            <tr>
              <td className='total_td'>Total:{total}</td>
            </tr>
          </table>
        </div>
        <div id='flex-2'>
          <>
          <h2>Extra Expenses</h2>
          <input type='text' id = "Rg_expenses_input" value={input3} onChange={(e)=>setInput3(e.target.value)} placeholder='Add custom Expense'></input>
          <input type='text' id = "Rg_expenses_input_value" style={inputstyle} value={input4} onChange={(e)=>setInput4(e.target.value)} placeholder='Value'></input>
          </>
          {
          <Extra_expenses_table input1={input3} input2={input4} totalfunction={handle_total2}/>
          }
          <tr></tr>
          <table className='total_table'>
            <tr>
              <td className='total_td'>Total:{total2}</td>
            </tr>
          </table>
        </div>
        <div id='flex-3'><Earnings total_earinings={handle_earnings}/></div>
      </div>
    </>
  )
}

const inputstyle={
  maxWidth:'50px',
}

