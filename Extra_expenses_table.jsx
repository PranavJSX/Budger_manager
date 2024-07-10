import React, { useEffect, useState } from 'react'

import '../src/Styles/Info_style.css'; 

export const Extra_expenses_table=(props)=>{
    
const [count,setCounter] = useState(0)


    const Expenses=[
        {
            Expense : "OTT's",
            Amount : 0,
        },
        {
            Expense : 'Snacks',
            Amount : 0,
        },
]
    const [Extra_expenses,SetExtra_expenses] = useState(Expenses)

    const add_custom_expense=()=>{
        console.log('Here')
        let temp = {
            Expense : props.input1,
            Amount : props.input2,
        }
        console.log(Expenses)
        Extra_expenses.push(temp)
        console.log(Extra_expenses)
        SetExtra_expenses(Extra_expenses)
        let i = count+1
        setCounter(i)
        
        return
    } 


    const delete_expense=(e)=>{
        let index = 0
        let temp = e.target
        let current_expense = temp.parentElement.parentElement.parentElement.firstChild.innerHTML
        Extra_expenses.forEach(element => {
            console.log(current_expense)
            console.log(Extra_expenses)
            if(element.Expense===current_expense){
                Extra_expenses.splice(index,1)
            }
            index++
        });
        console.log(Extra_expenses)
        SetExtra_expenses(Extra_expenses)
        let i = count+1
        setCounter(i)
        get_total()
        return 0
    }

    const update_expense=(e)=>{
        let index = 0
        let temp = e.target
        let current_expense = temp.parentElement.parentElement.parentElement.firstChild.innerHTML
        let current_value = parseInt(temp.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.value)
        console.log(current_expense)
        console.log(current_value)
        console.log(temp.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.value)
        Extra_expenses.forEach(element => {
            console.log(current_expense)
            console.log(Extra_expenses)
            if(element.Expense===current_expense){
                Extra_expenses[index].Amount = current_value
            }
            index++
        });
        console.log(Extra_expenses)
        SetExtra_expenses(Extra_expenses)
        let i = count+1
        setCounter(i)
        temp.parentElement.parentElement.parentElement.firstChild.nextSibling.nextSibling.value=''  
        get_total()
        return 0
    }


    const print_expenses = Extra_expenses.map(i=>
        <tr className='Extra_expenses_table_row'>
        <td className='set_td_style'>{i.Expense}</td>
        <td>{i.Amount}</td>
        <input className='expense_input_value_1' placeholder='Enter expense'></input>
        <td><button className='table_button' onClick={(e)=>update_expense(e)}><span class="material-symbols-outlined">check</span></button></td>
        <td><button className='table_button' onClick={(e)=>delete_expense(e)}><span class="material-symbols-outlined">delete</span></button></td>
        </tr>
    )
    const get_total=()=>{
        let temp=0
        console.log('Here')
        Extra_expenses.map(i=>(
            temp = i.Amount+temp
        ))
        console.log(temp)
        props.totalfunction(temp)
    }
    
    return(
        <>
        <button id='Extra_expenses_add_button' onClick={(e)=>add_custom_expense(e) }>ADD</button>
        <table id='Extra_expenses_table'>
        <tr className='Extra_expenses_table_row'>
        <th>Expense</th>
        <th>Amount</th> 
        <th align='left'>Update Expense</th>
        <th>Submit</th>
        <th>Delete</th>
        </tr>
                {print_expenses} 
        </table>
        </>
    )
}

