import React, { useEffect, useState } from  'react' 
export const Stocks_of_interest=()=>{

    const stocks = ['AAPL','AAON','JXN']
    const[stocks_object,setStocksObject] = useState({})
    
    const mystocks=async(str1)=>{
        const fetch = require('node-fetch');

        const url = `https://real-time-finance-data.p.rapidapi.com/stock-time-series-source-2?symbol=${str1}&period=1D`;
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '48a6801135msh0b3a132a1d0ed8fp1d9938jsnb7cfe0e4a2b4',
            'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
        }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(JSON.parse(result).data);
            console.log(stocks_object)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        let i=0;
        let myobj={}
        stocks.forEach(element=>{
            myobj[i] = mystocks(element)
        });
        setStocksObject(myobj)
    })

    // const print_stocks = 
    
    return(
        <div>
            my stocks data from an api
            <ul>
                <li></li>
            </ul>
        </div>
    )
}