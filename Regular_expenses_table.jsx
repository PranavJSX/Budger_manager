import React, { useEffect, useState } from 'react'

import '../src/Styles/Info_style.css'; 

export const Regular_expenses_table=(props)=>{
    
const [rerender,setRerender] = useState(0)
    const Expenses=[
        {
            Expense : 'House Rent',
            Amount : 0,
        },
        {
            Expense : 'Food',
            Amount : 0,
        },
        {
            Expense : 'Travel',
            Amount:0,
        }
]
    const [Rg_expenses,SetRg_expenses] = useState(Expenses)

    const add_custom_expense=()=>{
        console.log('Here')
        let temp = {
            Expense : props.input1,
            Amount : props.input2,
        }
        console.log(Expenses)
        Rg_expenses.push(temp)
        console.log(Rg_expenses)
        SetRg_expenses(Rg_expenses)
        let i = rerender+1
        setRerender(i)
        return
    }


    const print_expenses = Rg_expenses.map(i=>
        <tr className='Rg_expenses_table_row'>
        <td>{i.Expense}</td>
        <td>{i.Amount}</td>
        </tr>
    )
    
    return(
        <>
        <button id='Rg_expenses_add_button' onClick={(e)=>add_custom_expense(e) }>ADD</button>
        <table id='Rg_expenses_table'>
                {print_expenses} 
        </table>
        </>
    )
}

